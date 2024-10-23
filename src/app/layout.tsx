import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Providers } from "@/components/providers";
import { baseUrl } from "@/lib/sitemap";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Kiara Bickers - Official Site | Bitcoin Clarity",
    template: "%s | Kiara Bickers",
  },
  alternates: {
    canonical: baseUrl,
  },
  description:
    "Bitcoin Clarity: The Complete Beginners Guide by Kiara Bickers Explains; What is Bitcoin? How Does Bitcoin Work? How to Understand It Easily With Mental Models.",
  openGraph: {
    title: "Kiara Bickers",
    description:
      "Kiara is a system thinker and author kiarabickers.com is the home of her writing and work.",
    url: baseUrl,
    siteName: "Kiara Bickers",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/bitcoin-clarity-book-3.png",
        width: 2880,
        height: 1660,
        alt: "Kiara Bickers - Official Site",
      },
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body className={`${ibmPlexSans.variable} bg-white dark:bg-gray-950`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
