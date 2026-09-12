import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mudunuri Lokesh Varma — AI & Machine Learning | Portfolio",
  description: "Portfolio of Mudunuri Lokesh Varma — Third-year B.Tech student specializing in Artificial Intelligence and Machine Learning, building practical full-stack and AI-powered applications.",
  keywords: [
    "Mudunuri Lokesh Varma",
    "Lokesh Varma",
    "AI/ML",
    "Machine Learning",
    "Full Stack Developer",
    "Python",
    "React.js",
    "Vishnu Institute of Technology",
    "Portfolio"
  ],
  authors: [{ name: "Mudunuri Lokesh Varma", url: "https://github.com/lokeshmudunuri" }],
  openGraph: {
    title: "Mudunuri Lokesh Varma — AI & Machine Learning | Portfolio",
    description: "Third-year B.Tech student specializing in Artificial Intelligence and Machine Learning, building practical full-stack and AI-powered applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudunuri Lokesh Varma — AI & Machine Learning | Portfolio",
    description: "Third-year B.Tech student specializing in Artificial Intelligence and Machine Learning, building practical full-stack and AI-powered applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable + " " + inter.variable}>
      <body className="antialiased" suppressHydrationWarning>
        <div className="noise" />
        <ScrollProgress />
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
