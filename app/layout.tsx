import type { Metadata } from "next";
import { NTR, Roboto } from "next/font/google";
import "./globals.css";

const ntrsans = NTR({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-ntr',
})

const robotosans = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: "Prasanth Kumar Chigilipalli",
  description: "Software Engineer with experience building real-time, modular systems and production-style applications.",
  verification: {
    google: "a0PgInxWyu1kiqtAf5sF48b_ttTD4KJUW2iIk9yhu3Q",
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
        className={`${ntrsans.variable} ${robotosans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
