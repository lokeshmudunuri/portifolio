import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mudunuri Lokesh Varma — Frontend Developer & Aspiring AI & ML Engineer | Portfolio",
  description: "Portfolio of Mudunuri Lokesh Varma — Frontend Developer and aspiring AI & ML Engineer crafting modern, responsive web experiences and exploring machine learning applications.",
  keywords: [
    "Mudunuri Lokesh Varma",
    "Lokesh Varma",
    "Frontend Developer",
    "Aspiring AI & ML Engineer",
    "AI/ML",
    "Python",
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Pandas",
    "Data Preprocessing",
    "Claude AI",
    "Agentic AI",
    "Vishnu Institute of Technology",
    "Portfolio"
  ],
  authors: [{ name: "Mudunuri Lokesh Varma", url: "https://github.com/lokeshmudunuri" }],
  openGraph: {
    title: "Mudunuri Lokesh Varma — Frontend Developer & Aspiring AI & ML Engineer",
    description: "Frontend Developer and aspiring AI & ML Engineer crafting modern, responsive web experiences and exploring machine learning applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudunuri Lokesh Varma — Frontend Developer & Aspiring AI & ML Engineer",
    description: "Frontend Developer and aspiring AI & ML Engineer crafting modern, responsive web experiences and exploring machine learning applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.variable + " " + inter.variable}>
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
