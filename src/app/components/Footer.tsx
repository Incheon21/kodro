import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full border-t mt-auto transition-colors duration-300"
      style={{
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div
            className="text-sm mb-4 md:mb-0"
            style={{ color: "var(--foreground)" }}
          >
            © 2025 Kodro. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
