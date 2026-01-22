import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "chandler",
  description: "vibe coding hobbies / projects for the trenches",
  openGraph: {
    title: "chandler",
    description: "vibe coding hobbies / projects for the trenches",
    images: ["/mOCNpkOF_400x400.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "chandler",
    description: "vibe coding hobbies / projects for the trenches",
    images: ["/mOCNpkOF_400x400.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
