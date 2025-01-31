import NavBar from "./components/nav-bar";
import "./globals.css";
import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "עומר תעשיות עץ",
  openGraph: {
    images: "/omar-favicon-light.svg",
  },
  description: "עבודות עץ | שייש וקרמיקה | עיצוב מטבחים | עיצוב חדרים",
  keywords:
    "עבודות עץ, שייש וקרמיקה, עיצוב מטבחים, עיצוב חדרים, עבודות עץ בכלל, עבודות עץ בפרוייקט, עבודות עץ מותאמות אישית, עבודות עץ בכל סוג, עבודות עץ בכל סוג, עבודות עץ בכל סוג, עבודות עץ בכל סוג",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="icon" href="/omar-favicon-light.svg" />
      </head>
      <body className={`${heebo.className} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
