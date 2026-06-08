import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VALAM - Your Journey to Wealth Creation",
  description: "Discover your financial stage and build wealth with personalized strategies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}