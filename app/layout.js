import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "sonner";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor Appointment Booking",
  description: "Book appointments with your favorite doctors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <KindeProvider>
          <div className="md:px-20">
            <Header/>
            {children}
            <Toaster />
          </div>
        </KindeProvider>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
