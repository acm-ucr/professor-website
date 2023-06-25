/* eslint-disable new-cap */
import Navigation from "@/components/Navigation";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Lexend } from "next/font/google";
import Footer from "@/components/Footer";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className} pt-10`}>
        <Navigation />
        <div className="w-full flex justify-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
