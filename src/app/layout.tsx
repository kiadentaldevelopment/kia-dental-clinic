import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./shared/components/header/page";
import Footer from "./shared/components/footer/page";
import { BookingProvider, BookingForm } from "./shared/components";
import "@ant-design/v5-patch-for-react-19";
import Script from "next/script";
import { GTM_EVENTS } from "./shared/components/gtm-events";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KIA Dental - High Quality Dental Services",
  description:
    "KIA Dental provides high quality dental services including teeth whitening, dental implants, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NQVRTL3L');`}
        </Script>
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQVRTL3L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17554014295"
        />
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17554014295');
            `}
        </Script> */}
        <BookingProvider>
          <GTM_EVENTS />
          <Header />
          {children}
          <Footer />
          <BookingForm />
        </BookingProvider>
      </body>
    </html>
  );
}
