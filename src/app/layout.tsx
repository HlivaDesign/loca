import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin-ext"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin-ext"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Loca.hu | Premium Kiemelt Termék",
  description: "Vásárold meg a legújabb kiemelt termékeket a Loca.hu-n!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
