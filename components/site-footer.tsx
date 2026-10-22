"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { businessInfo } from "@/data/site-content";
import type { Language } from "@/data/translations";

const languageStorageKey = "netjes-en-klaar-language";
const languageChangeEvent = "netjes-en-klaar-language-change";

const content = {
  nl: {
    serviceArea: "Landelijk inzetbaar",
    contact: "Contact",
    company: "Bedrijfsgegevens",
    kvk: "KvK",
    vat: "Btw-nummer",
    privacy: "Privacy & cookies",
    careers: "Werken bij",
    rights: "Alle rechten voorbehouden.",
  },
  ar: {
    serviceArea: "متاحون في جميع أنحاء هولندا",
    contact: "التواصل",
    company: "بيانات الشركة",
    kvk: "رقم غرفة التجارة (KvK)",
    vat: "الرقم الضريبي (BTW)",
    privacy: "الخصوصية وملفات تعريف الارتباط",
    careers: "العمل معنا",
    rights: "جميع الحقوق محفوظة.",
  },
} as const;

export function SiteFooter() {
  const [language, setLanguage] = useState<Language>("nl");
  const copy = content[language];

  useEffect(() => {
    const syncLanguage = (nextLanguage: string | null) => {
      if (nextLanguage === "nl" || nextLanguage === "ar") {
        setLanguage(nextLanguage);
      }
    };

    syncLanguage(window.localStorage.getItem(languageStorageKey));

    const handleLanguageChange = (event: Event) => {
      const customEvent = event as CustomEvent<Language>;
      syncLanguage(customEvent.detail);
    };

    window.addEventListener(languageChangeEvent, handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener(languageChangeEvent, handleLanguageChange as EventListener);
    };
  }, []);

  return (
    <footer dir={language === "ar" ? "rtl" : "ltr"} className="fresh-shell relative z-10 pb-24 pt-10">
      <div className="grid gap-8 border-t border-fresh-blue/20 pt-8 text-sm leading-7 text-fresh-ink/75 md:grid-cols-3">
        <div>
          <p className="font-semibold text-fresh-ink"><span className="latin-inline">{businessInfo.legalName}</span></p>
          <p>{copy.serviceArea}</p>
        </div>

        <div>
          <p className="font-semibold text-fresh-ink">{copy.contact}</p>
          <a href={businessInfo.phoneHref} className="block w-fit transition hover:text-fresh-blue">
            <span className="latin-inline">{businessInfo.phoneDisplay}</span>
          </a>
          <a href={`mailto:${businessInfo.email}`} className="block w-fit transition hover:text-fresh-blue">
            <span className="latin-inline">{businessInfo.email}</span>
          </a>
        </div>

        <div>
          <p className="font-semibold text-fresh-ink">{copy.company}</p>
          <p>
            {copy.kvk}: <span className="latin-inline">{businessInfo.kvkNumber}</span>
          </p>
          <p>
            {copy.vat}: <span className="latin-inline">{businessInfo.vatNumber}</span>
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-fresh-ink/55">
        <p>
          © {new Date().getFullYear()} <span className="latin-inline">{businessInfo.legalName}</span> {copy.rights}
        </p>
        <div className="flex gap-4">
          <Link href="/privacy" className="transition hover:text-fresh-blue">
            {copy.privacy}
          </Link>
          <Link href="/werken-bij" className="transition hover:text-fresh-blue">
            {copy.careers}
          </Link>
        </div>
      </div>
    </footer>
  );
}
