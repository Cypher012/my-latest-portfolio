import type { Metadata } from "next";
import { Inter, Space_Grotesk, Roboto_Slab } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["600", "700"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayowole Ojoade | Full-Stack Software Engineer",
  description:
    "Computer Science student at OAU with 1+ years of professional frontend development experience, specializing in TypeScript/React and Go backend systems.",
  keywords: [
    "Ayowole Ojoade",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Golang",
    "Frontend Developer",
    "Nigeria",
  ],
  authors: [{ name: "Ayowole Ojoade" }],
  openGraph: {
    title: "Ayowole Ojoade | Full-Stack Software Engineer",
    description: "Portfolio of Ayowole Ojoade - Full-Stack Developer",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayowole Ojoade | Full-Stack Software Engineer",
    description: "Portfolio of Ayowole Ojoade - Full-Stack Developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${robotoSlab.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
