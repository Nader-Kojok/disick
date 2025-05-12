import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Disick - Centre de Formation Sportive à Dakar",
  description: "Centre de formation sportive d'excellence à Dakar, Sénégal. Découvrez nos cours et programmes adaptés à tous les niveaux.",
  keywords: ["formation sportive", "Dakar", "Sénégal", "sport", "entraînement", "coaching", "excellence sportive"],
  authors: [{ name: "Disick" }],
  creator: "Disick",
  publisher: "Disick",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://disick.sn"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Disick - Centre de Formation Sportive à Dakar",
    description: "Centre de formation sportive d'excellence à Dakar, Sénégal. Découvrez nos cours et programmes adaptés à tous les niveaux.",
    url: "https://disick.sn",
    siteName: "Disick",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Disick - Centre de Formation Sportive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disick - Centre de Formation Sportive à Dakar",
    description: "Centre de formation sportive d'excellence à Dakar, Sénégal. Découvrez nos cours et programmes adaptés à tous les niveaux.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // À remplacer par votre code de vérification Google
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
