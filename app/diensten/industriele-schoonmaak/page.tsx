import type { Metadata } from "next";
import { IndustrialPageContent } from "@/components/industrial-page-content";
import { SubpageHeader } from "@/components/subpage-header";

export const metadata: Metadata = {
  title: "Industriële schoonmaak | Netjes & Klaar",
  description:
    "Industriële schoonmaak voor productieomgevingen, fabrieken en technische ruimtes. Afstemming op veiligheid, looproutes, ploegendienst en reiniging per zone, ook met Arabische taaloptie op de website.",
  keywords: ["industriële schoonmaak", "fabriek schoonmaak", "productieomgeving schoonmaak", "technische reiniging", "schoonmaak productiehal"],
  alternates: {
    canonical: "/diensten/industriele-schoonmaak",
  },
};

export default function IndustrialCleaningPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pb-24">
      <SubpageHeader />
      <IndustrialPageContent />
    </main>
  );
}
