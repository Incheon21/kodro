"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when navbar hides
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        !(event.target as Element).closest("nav") &&
        !(event.target as Element).closest("[data-mobile-menu]")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
    <>
      <nav
        className={`z-20 w-full p-4 bg-transparent fixed transition-transform duration-300 ease-in-out ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Navigation Links */}
            <div className="flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group"
                >
                  <span
                    className={`font-semibold transition-all duration-300 hover:text-[var(--kodro-accent)] ${
                      item.href === "/" && pathname === "/"
                        ? "text-[var(--kodro-accent)]"
                        : "text-[var(--navbar-text)]"
                    }`}
                  >
                    {item.label}
                  </span>
                  {/* Underline for active route */}
                  <div
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      item.href === "/" && pathname === "/"
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

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 transition-all duration-300 relative"
              aria-label="Toggle mobile menu"
            >
              <div
                className={`w-6 h-0.5 transition-all duration-300 absolute ${
                  isMobileMenuOpen ? "rotate-45" : "transform -translate-y-1.5"
                }`}
                style={{ backgroundColor: "var(--navbar-text)" }}
              />
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
                style={{ backgroundColor: "var(--navbar-text)" }}
              />
              <div
                className={`w-6 h-0.5 transition-all duration-300 absolute ${
                  isMobileMenuOpen ? "-rotate-45" : "transform translate-y-1.5"
                }`}
                style={{ backgroundColor: "var(--navbar-text)" }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-20 z-10 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-40" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        data-mobile-menu
        className={`fixed top-0 left-0 p-4 right-0 z-30 md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
        style={{
          marginTop: isVisible ? "80px" : "0px",
          transform: isMobileMenuOpen
            ? isVisible
              ? "translateY(0)"
              : "translateY(-88px)"
            : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out, margin-top 0.3s ease-in-out",
        }}
      >
        <div
          className="px-6 py-8 rounded-xl"
          style={{ backgroundColor: "var(--navbar-bg)" }}
        >
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span
                  className={`text-lg font-semibold transition-all duration-300 hover:text-[var(--kodro-accent)] ${
                    item.href === "/" && pathname === "/"
                      ? "text-[var(--kodro-accent)]"
                      : "text-[var(--navbar-text)]"
                  }`}
                >
                  {item.label}
                </span>
                {/* Active indicator */}
                {item.href === "/" && pathname === "/" && (
                  <div
                    className="absolute -bottom-1 left-0 w-full h-0.5"
                    style={{ backgroundColor: "var(--kodro-accent)" }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
