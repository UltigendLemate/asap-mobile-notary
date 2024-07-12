import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IoIosCall } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} app-scrollbar`}>{children}
      <div className="fixed bottom-6 right-10 z-10 flex items-center justify-center gap-1 animate-bounce">
        <div className=" bg-white  border px-3  text-sm shadow-md py-1">Call Me!</div>
        <div className="bg-[#350952] rounded-full p-2  h-14 w-14 shadow-lg">
          <IoIosCall className="h-full w-full text-white" />
        </div>
      </div>
      </body>
    </html>
  );
}
