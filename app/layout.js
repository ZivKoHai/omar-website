import NavBar from "./components/nav-bar";
import "./globals.css";
import { Heebo } from "next/font/google";
import Script from "next/script";

const heebo = Heebo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://omarwoodshop.co.il"),

  title: "עומר תעשיות עץ - עבודות עץ בהתאמה אישית",

  description:
    "נגרות בהתאמה אישית | עיצוב מטבחים | עבודות עץ מקצועיות | שייש וקרמיקה | פתרונות עץ מותאמים אישית ברמת גימור גבוהה.",

  applicationName: "עומר תעשיות עץ",
  generator: "Next.js",
  creator: 'עומר תעשיות עץ בע"מ',
  publisher: 'עומר תעשיות עץ בע"מ',

  authors: [{ name: "עומר תעשיות עץ", url: "https://omarwoodshop.co.il" }],

  keywords: [
    "עבודות עץ",
    "נגרות בהתאמה אישית",
    "עיצוב מטבחים",
    "עיצוב חדרים",
    "שייש וקרמיקה",
    "עיצוב פנים",
    "עבודות עץ בפרויקטים",
    "ריהוט עץ בעיצוב אישי",
    "נגרות בוטיק",
    "רהיטי עץ איכותיים",
    "דלתות עץ",
    "עיצוב רהיטים בהתאמה אישית",
    "פתרונות עץ ייחודיים",
  ],

  referrer: "origin",
  viewport: "width=device-width, initial-scale=1",

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }],
  colorScheme: "light",

  alternates: {
    canonical: "https://omarwoodshop.co.il",
    languages: {
      he: "https://omarwoodshop.co.il/he",
    },
  },

  icons: {
    icon: "/omar-favicon-light.svg",
    apple: "/omar-favicon-light.svg",
  },

  openGraph: {
    type: "website",
    url: "https://omarwoodshop.co.il",
    title: "עומר תעשיות עץ - פתרונות עץ בעיצוב אישי",
    description:
      "עיצוב וייצור רהיטים, מטבחים ופרויקטים בנגרות בהתאמה אישית עם חומרי גלם איכותיים ורמת גימור גבוהה.",
    images: [
      {
        url: "/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "עומר תעשיות עץ - נגרות בהתאמה אישית",
      },
    ],
    locale: "he_IL",
    siteName: "עומר תעשיות עץ",
  },

  twitter: {
    card: "summary_large_image",
    site: "@omarwoodshop",
    creator: "@omarwoodshop",
    title: "עומר תעשיות עץ - נגרות בהתאמה אישית",
    description:
      "עבודות עץ בעיצוב אישי | מטבחים מעוצבים | ריהוט בהתאמה אישית | פתרונות עץ מותאמים לפרויקטים ייחודיים.",
    images: ["/open-graph-image.png"],
  },

  category: "עיצוב פנים, עבודות עץ, נגרות בהתאמה אישית",
  classification: "ריהוט ועבודות עץ בהתאמה אישית",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <head>
        {/* google analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KT5GS8D46R"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KT5GS8D46R');
            `}
        </Script>
        {/* Google Tag Manager - Head */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KHBXPGK9');
          `}
        </Script>
        {/* favicon */}
        <link
          rel="icon"
          href="/omar-favicon-light.svg"
          type="image/svg+xml"
          sizes="any"
        />
      </head>
      <body className={`${heebo.className} antialiased`}>
        {/* Google Tag Manager - Body (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KHBXPGK9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ************** */}
        {/* Google Ads Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16871461530"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16871461530');
          `}
        </Script>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
