import type { Metadata } from "next";
import Script from "next/script";

import { CookieConsent } from "@/components/cookie-consent";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";
import { SiteFooter } from "@/components/site-footer";
import { businessInfo } from "@/data/site-content";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.siteUrl),
  title: "Netjes & Klaar | Commerciële schoonmaak, dieptereiniging en industriële reiniging",
  description:
    "Netjes & Klaar verzorgt commerciële schoonmaak voor kantoren, vakantieparken, evenementen, bouwopleveringen, dieptereiniging en productieomgevingen in Nederland. Heldere planning, duidelijke takenlijsten en vaste aanspreekpunten.",
  keywords: [
    "schoonmaakbedrijf",
    "commerciële schoonmaak",
    "kantoorschoonmaak",
    "vakantiepark schoonmaak",
    "evenementenreiniging",
    "bouwschoonmaak",
    "industriële schoonmaak",
    "fabriek schoonmaak",
    "dieptereiniging",
    "facilitaire schoonmaak",
    "zakelijke schoonmaak nederland",
  ],
  applicationName: "Netjes & Klaar",
  category: "business",
  openGraph: {
    title: "Netjes & Klaar | Commerciële schoonmaak voor bedrijven en locaties",
    description:
      "Schoonmaak voor kantoren, vakantieparken, evenementen, bouwopleveringen, dieptereiniging en productieomgevingen in Nederland met duidelijke planning en terugkoppeling.",
    url: businessInfo.siteUrl,
    siteName: businessInfo.name,
    type: "website",
    locale: "nl_NL",
    alternateLocale: ["ar"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Netjes & Klaar | Commerciële schoonmaak voor bedrijven en locaties",
    description:
      "Schoonmaak voor kantoren, vakantieparken, evenementen, bouwopleveringen, dieptereiniging en productieomgevingen in Nederland.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="nl" suppressHydrationWarning>
      <body>
        {children}
        <SiteFooter />
        <CookieConsent />
        <FloatingWhatsAppButton />
      </body>
      {gaId ? (
        <>
          <Script id="google-consent-default" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500
              });
            `}
          </Script>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="google-analytics-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      ) : null}
    </html>
  );
}
