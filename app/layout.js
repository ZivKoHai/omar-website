import Nav from "./components/nav";
import "./globals.css";
import { Heebo } from "next/font/google";
import Script from "next/script";

const heebo = Heebo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "עומר תעשיות עץ",
  description: "עבודות עץ | שייש וקרמיקה | עיצוב מטבחים | עיצוב חדרים",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="icon" href="/omar-favicon-light.svg" />
      </head>
      <body className={`${heebo.className} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
