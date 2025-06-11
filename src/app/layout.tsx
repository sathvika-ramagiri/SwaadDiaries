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
  title: 'SwaadDiaries',
  
  description: 'A nostalgic and culturally rich food website focused on traditional Indian recipes, narrated and presented in grandma-style storytelling.',
  keywords: 'Indian recipes, traditional food, regional cuisine, family recipes, Indian cooking',
  authors: [{ name: 'Ramagiri Sathvika' }],
  openGraph: {
    title: 'SwaadDiaries',
    description: 'A nostalgic and culturally rich food website focused on traditional Indian recipes, narrated and presented in grandma-style storytelling.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-geist-sans bg-gray-100 text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
