import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dreams dev",
  description: "dreams dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    
    <html lang="ru">
      <body className={`${inter.variable} white`}>
        <Header />
          {children}
       <Footer />
      </body>
    </html>
    
  );
}
