import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const jura = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ольга Вавилова",
  description: "Архитектор и дизайнер из Челябинска",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    
    <html lang="ru">
      <body className={`${jura.variable} white`}>
        <Header />
          {children}
       <Footer />
      </body>
    </html>
    
  );
}
