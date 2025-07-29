import React from "react";
import Link from "next/link";
import CodingSoon from "./components/CodingSoon";

const NotFound = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0"></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 style={{ color: "var(--text-muted)" }} className="text-8xl md:text-9xl font-bold text-[#3B82F6] mb-4 opacity-50">
            404
          </h1>
        </div>

        {/* Main message with custom typing animation */}
        <CodingSoon style={{ color: "var(--foreground)" }} text="Oops sorry, I think you are lost" className="mb-12" />
        {/* Call to action button */}
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-block bg-[#3B82F6] hover:bg-[#06B6D4] text-[#F9FAFB] font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;