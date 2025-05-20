"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import DoctorDetail from '../_components/DoctorDetail';
import DoctorSuggestionList from '../_components/DoctorSuggestionList';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import AuthError from '@/app/_components/AuthError';

function Details({params}) {
  const [doctor, setDoctor] = useState();
  const { user, isLoading } = useKindeBrowserClient();

  useEffect(() => {
    if (user) {
      getDoctorById();
    }
  }, [user]);

  const getDoctorById = () => {
    GlobalApi.getDoctorById(params.recordId).then(resp => {
      setDoctor(resp.data.data);
    });
  }

  if (isLoading) {
    return <div className="min-h-[60vh] flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <AuthError />;
  }

  return (
    <div className='p-5 md:px-10'>
      <h2 className='font-bold text-[22px]'>Details</h2>
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        {/* Doctor Detail */}
        <div className='col-span-3'>
          {doctor && <DoctorDetail doctor={doctor} />}
        </div>
        {/* Doctor Suggestion */}
        <div>
          <DoctorSuggestionList />
        </div>
      </div>
    </div>
  )
}

export default Details