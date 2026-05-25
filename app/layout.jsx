import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Бібліотека",
    template: "%s | Бібліотека",
  },
  description:
    "Онлайн-система бібліотеки для керування книгами, користувачами та видачами.",
  keywords: [
    "бібліотека",
    "книги",
    "Next.js",
    "MongoDB",
    "Vercel",
    "library",
  ],
  authors: [{ name: "Бібліотека" }],
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "/",
    siteName: "Бібліотека",
    title: "Бібліотека",
    description:
      "Онлайн-система бібліотеки для керування книгами та видачами.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Бібліотека",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Бібліотека",
    description:
      "Онлайн-система бібліотеки для керування книгами та видачами.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
