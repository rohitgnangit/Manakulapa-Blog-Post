import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog Post App",
  description: "People can read and upload blogs here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="absolute top-0 z-[-2] h-screen w-screen transform bg-white bg-[radial-gradient(80%_160%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"
      >
        
        <Navbar/>
        <div className="min-h-[83.7%]">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
