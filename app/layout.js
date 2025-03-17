import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const nebula = localFont({
  src: "../public/fonts/nebula.ttf",
  variable: "--font-nebula",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const nohemi = localFont({
  src: "../public/fonts/Nohemi.otf",
  variable: "--font-nohemi",
});

export const metadata = {
  title: "Ayxsh - Dev Portfolio",
  description: "This is the portfolio of ayush shrestha , a full stack developer based in nepal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nebula.variable} ${manrope.variable} ${nohemi.variable}`}>
      <body>
      <Header/>
        {children}
        </body>
    </html>
  );
}
