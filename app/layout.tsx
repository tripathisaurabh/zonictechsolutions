import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { defaultMetadata } from "../lib/seo";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
