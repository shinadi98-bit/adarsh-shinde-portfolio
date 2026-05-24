import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adarsh Shinde — Finance, Research & AI Automation",
  description:
    "MBA Finance professional with equity research, SAP FICO, and AI workflow automation experience. Based in Navi Mumbai, India. Open to fintech, financial analysis, investment research, and automation-focused roles.",
  keywords: [
    "Adarsh Shinde",
    "MBA Finance",
    "Equity Research",
    "SAP FICO",
    "Financial Modelling",
    "AI Automation",
    "Portfolio",
    "FLAME University",
    "Navi Mumbai",
  ],
  authors: [{ name: "Adarsh Shinde" }],
  openGraph: {
    title: "Adarsh Shinde — Finance, Research & AI Automation",
    description:
      "MBA Finance professional combining domain expertise with AI-enabled execution. Equity research, SAP FICO, quantitative research, and workflow automation.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Shinde — Finance, Research & AI Automation",
    description:
      "Finance professional with equity research, SAP FICO, and AI workflow automation experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexSans.variable} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#050a14" />
      </head>
      <body className={ibmPlexSans.className}>{children}</body>
    </html>
  );
}
