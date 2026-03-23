import React from "react";
import Link from "next/link"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="w-full border-t mt-auto transition-colors duration-300"
      style={{
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div
            className="text-sm mb-4 md:mb-0"
            style={{ color: "var(--foreground)" }}
          >
            © 2026 Kodro. All rights reserved.
          </div>
          <div className="flex flex-row gap-2 text-xl" style={{ color: "var(--foreground)" }}>
            <Link href="https://www.instagram.com/kodro.dev/  " target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:scale-[1.05]"/>
            </Link>
            <Link href="https://wa.me/6285121096113" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:scale-[1.05]"/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
