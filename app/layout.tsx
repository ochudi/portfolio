import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";

export const metadata: Metadata = {
  title: "Chukwudi Ofoma | Software Engineer",
  description:
    "Explore Chukwudi Ofoma's portfolio—showcasing expertise in full-stack development, UI/UX design, and AI-driven applications. Let's build something amazing together.",
  keywords: [
    "Chukwudi Ofoma",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Designer",
    "Software Engineer",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Three.js",
    "Web Development",
    "AI Developer",
    "Freelance Developer",
  ],
  openGraph: {
    title: "Chukwudi Ofoma | Full-Stack Developer & UI/UX Enthusiast",
    description:
      "Discover the work of Chukwudi Ofoma—a software engineer skilled in full-stack development, UI/UX design, and AI-driven applications.",
    url: "https://chudi.vercel.app/",
    siteName: "Chudi's Portfolio",
    images: [
      {
        url: "https://chudi.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chukwudi Ofoma Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chukwudi Ofoma | Full-Stack Developer & UI/UX Enthusiast",
    description:
      "Discover the work of Chukwudi Ofoma—a software engineer skilled in full-stack development, UI/UX design, and AI-driven applications.",
    images: ["https://chudi.vercel.app/og-image.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <Head>
        <link
          rel="icon"
          href="/ico/favicon.ico"
          sizes="any"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/ico/favicon-light.ico"
          sizes="any"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body className={`${inter.className} dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Toaster position="top-right" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
