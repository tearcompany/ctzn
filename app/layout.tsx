import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const ibmSans = IBM_Plex_Sans({
  variable: '--font-ibm-sans',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const ibmMono = IBM_Plex_Mono({
  variable: '--font-ibm-mono',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
  title: "Szloza - Mistyczny Dashboard",
  description: "Eksploruj mistyczne liczby, kabałę i świętą geometrię poprzez interaktywne narzędzia.",
  keywords: ["kabała", "mistycyzm", "gematria", "święta geometria", "numerologia", "duchowość"],
  authors: [{ name: "Szloza Team" }],
  generator: "v0.dev",
  themeColor: "#4B0082", // Indygo jako kolor przewodni
  openGraph: {
    title: "Szloza - Mistyczny Dashboard",
    description: "Odkryj sekrety kabały i liczbowych wzorców.",
    url: "https://szloza.app",
    siteName: "Szloza",
    images: [
      {
        url: "/logo.png", // Ustaw ścieżkę do logo
        width: 1200,
        height: 630,
        alt: "Szloza - Mistyczny Dashboard",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Szloza - Mistyczny Dashboard",
    description: "Eksploruj numerologię, kabałę i świętą geometrię.",
    site: "@szloza_app",
    creator: "@szloza_app",
    images: ["/logo.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmSans.variable} ${ibmMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
