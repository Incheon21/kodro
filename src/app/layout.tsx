import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Kodro - Coming Soon",
  description: "Kodro. Get your software done. Coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased flex flex-col min-h-screen"
        style={{ backgroundColor: "var(--hero-bg)" }}
      >
        <Analytics />
        <Navbar />
        <div className="flex flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
