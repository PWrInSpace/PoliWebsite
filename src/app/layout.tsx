import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { QueryProvider } from "@/lib/query-client";

import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "PWr in Space — studencka inżynieria rakietowa z Wrocławia",
  description:
    "PWr in Space to koło naukowe Politechniki Wrocławskiej. Projektujemy, budujemy i testujemy własne rakiety.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <QueryProvider>
        <body className={`${geist.variable} font-sans antialiased`}>
          {children}
        </body>
      </QueryProvider>
    </html>
  );
}
