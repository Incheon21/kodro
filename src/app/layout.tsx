import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "react-hot-toast";

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
        className="antialiased flex flex-col min-h-screen relative"
        style={{ backgroundColor: "var(--background)" }}
      >
        <Analytics />
        <Navbar />
        <div className="flex flex-1 relative z-10 bg-transparent">
          {children}
        </div>
        <Footer />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "var(--card-bg)",
              color: "var(--foreground)",
              border: "1px solid var(--border-color)",
            },
            success: {
              iconTheme: {
                primary: "var(--kodro-accent)",
                secondary: "white",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "white",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
