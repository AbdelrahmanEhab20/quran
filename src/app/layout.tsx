import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Quran Kareem - Surah Al-Baqarah | القرآن الكريم - سورة البقرة",
  description: "Watch and listen to Surah Al-Baqarah (The Cow) from the Holy Quran with beautiful recitation by Sheikh Mahmoud Khalil Al-Hussary. Available 24/7 with HD video and crystal clear audio.",
  keywords: "Quran Kareem, Al-Baqarah, Surah, Islamic, Video, Recitation, Sheikh Mahmoud Khalil Al-Hussary, Arabic, Online, القرآن الكريم",
  authors: [{ name: "Quran Kareem" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Quran Kareem - Surah Al-Baqarah",
    description: "Watch and listen to Surah Al-Baqarah from the Holy Quran with beautiful video recitation",
    type: "website",
    locale: "en_US",
  },
  other: {
    "og:locale:alternate": ["ar_SA", "en_US"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
