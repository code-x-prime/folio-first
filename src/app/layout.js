import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { siteConfig } from "@/data/static";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["IEPF recovery consultant", "Dematerialisation of shares India", "Recover unclaimed dividends", "Transmission of shares after death"],
  authors: [{ name: "Folio First Consulting" }],
  creator: "Folio First Consulting",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://foliofirst.com",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  verification: {
    google: "DJBl5bF6fFX601sYTrO-l7CT4B3XmXJkVQrbq9ma4GE",
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL('https://foliofirst.com'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased text-dark bg-gray-50 flex flex-col min-h-screen`}>
        <Header />
        <main >
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
