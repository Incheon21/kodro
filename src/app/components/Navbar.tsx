"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check current theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }

    // Listen for theme changes
    const handleThemeChange = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setIsDark(currentTheme === "dark");
    };

    // Listen for manual theme changes
    window.addEventListener("storage", handleThemeChange);

    // Observe data-theme attribute changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      window.removeEventListener("storage", handleThemeChange);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <nav className="w-full p-4 bg-transparent">
      <div
        className="rounded-full px-6 py-3 flex w-full justify-between items-center transition-colors duration-300"
        style={{ backgroundColor: "var(--navbar-bg)" }}
      >
        <div className="flex items-center">
          <Image
            src={
              isDark
                ? "/assets/transparentBlackLogo.png"
                : "/assets/transparentWhiteLogo.png"
            }
            alt="Kodro Logo"
            width={120}
            height={40}
            className="h-10 w-auto transition-opacity duration-300"
          />
        </div>

        {/* Navigation items and theme toggle */}
        <div className="flex items-center gap-8">
          {/* Navigation Links */}
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="relative group">
                <span
                  className={`font-semibold transition-all duration-300 hover:text-[var(--kodro-accent)] ${
                    pathname === item.href
                      ? "text-[var(--kodro-accent)]"
                      : "text-[var(--navbar-text)]"
                  }`}
                >
                  {item.label}
                </span>
                {/* Underline for active route */}
                <div
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    pathname === item.href
                      ? "w-full bg-[var(--kodro-accent)]"
                      : "w-0 group-hover:w-full group-hover:bg-[var(--kodro-accent)]"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
