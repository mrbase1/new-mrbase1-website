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
  title: {
    default: "Base1 Media & Tech",
    template: "%s | Base1 Media & Tech",
  },
  description:
    "Base1 Media & Tech builds web applications, mobile apps, and electronic prototypes with Arduino, ESP8266, and ESP32.",
  icons: {
    icon: "https://res.cloudinary.com/dfsfskmha/image/upload/v1781886309/Base1logo_sgbtzy.png",
    shortcut: "https://res.cloudinary.com/dfsfskmha/image/upload/v1781886309/Base1logo_sgbtzy.png",
    apple: "https://res.cloudinary.com/dfsfskmha/image/upload/v1781886309/Base1logo_sgbtzy.png",
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
