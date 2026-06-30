import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ["latin-ext"], 
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin-ext"], 
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Loca.hu | PDRN Pink Collagen Volume Multi Balm",
  description: "Plump, Glow & Restore In One Balm. The Medicube PDRN Pink Collagen Multi Balm with 5% Volufiline™.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
