import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const ateoric = localFont({
  src: "../public/fonts/Aldridge.ttf",
  variable: "--font-ateoric",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const nebula = localFont({
  src: "../public/fonts/Nebula.ttf",
  variable: "--font-nebula",
});

export const metadata = {
  title: "Ayxsh",
  description: "This is the portfolio of ayush shrestha , a full stack developer based in nepal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ateoric.variable} ${manrope.variable} ${nebula.variable}`}>
      <body>
      <Header/>
        {children}
        </body>
    </html>
  );
}
