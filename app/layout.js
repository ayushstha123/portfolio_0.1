import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./globals.css";

const ateoric = localFont({
  src: "../public/fonts/Aldridge.ttf",
  variable: "--font-ateoric",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Ayxsh",
  description: "This is the portfolio of ayush shrestha , a full stack developer based in nepal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ateoric.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
