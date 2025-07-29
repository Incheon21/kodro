import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10"></div>

      {/* Hero section */}
      <section className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Floating code elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="floating-code top-10 left-10 opacity-30"
            style={{ color: "var(--kodro-accent)" }}
          >
            &lt;/&gt;
          </div>
          <div
            className="floating-code top-20 right-16 opacity-25"
            style={{ color: "var(--kodro-cyan)" }}
          >{`{}`}</div>
          <div
            className="floating-code bottom-32 left-20 opacity-20"
            style={{ color: "var(--kodro-accent)" }}
          >
            []
          </div>
          <div
            className="floating-code bottom-16 right-12 opacity-30"
            style={{ color: "var(--kodro-cyan)" }}
          >
            ( )
          </div>
          <div
            className="floating-code top-1/3 left-1/4 opacity-15"
            style={{ color: "var(--kodro-accent)" }}
          >
            console.log()
          </div>
          <div
            className="floating-code top-2/3 right-1/4 opacity-25"
            style={{ color: "var(--kodro-cyan)" }}
          >
            function()
          </div>
        </div>

        {/* Main hero content */}
        <div className="relative z-10">
          {/* Main title/tagline */}
          <div className="mb-12">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl flex flex-row gap-4 font-bold mb-6 leading-tight"
              style={{ color: "var(--foreground)" }}
            >
              <span className="gradient-text">Build.</span>
              <span className="gradient-text">Ship.</span>
              <span className="gradient-text">Scale.</span>
            </h1>
            <div
              className="w-24 h-1 bg-gradient-to-r mx-auto mb-8 animated-line"
              style={{
                background:
                  "linear-gradient(to right, var(--kodro-accent), var(--kodro-cyan))",
              }}
            ></div>
          </div>

          {/* CTA section */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="glow-button hover:cursor-pointer font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: "var(--kodro-accent)",
                  color: "var(--foreground)",
                }}
              >
                Start Your Project
              </button>
              <Link href="/gallery">
                <button
                  className="border-2 hover:cursor-pointer font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-opacity-10"
                  style={{
                    borderColor: "var(--text-muted)",
                    color: "var(--foreground)",
                  }}
                >
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
