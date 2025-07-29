import AboutUs from "./components/AboutUs";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section - Full screen */}
      <section
        className="min-h-screen w-full relative flex items-center justify-center px-4"
      >
        {/* Clean Background decorations without grid */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient overlays */}
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-30 blur-3xl"
            style={{ backgroundColor: "var(--kodro-accent)" }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: "var(--kodro-cyan)" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: "var(--kodro-accent)" }}
          ></div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating code snippets */}
          <div
            className="floating-code opacity-10"
            style={{ top: "10%", left: "5%", animationDelay: "0s" }}
          >
            const <span style={{ color: "var(--kodro-accent)" }}>kodro</span> =
            () =&gt; {"{"}
          </div>
          <div
            className="floating-code opacity-8"
            style={{ top: "15%", right: "10%", animationDelay: "2s" }}
          >
            &lt;<span style={{ color: "var(--kodro-cyan)" }}>App</span> /&gt;
          </div>
          <div
            className="floating-code opacity-10"
            style={{ top: "25%", left: "15%", animationDelay: "4s" }}
          >
            function <span style={{ color: "var(--kodro-accent)" }}>build</span>
            () {"{"}
          </div>
          <div
            className="floating-code opacity-8"
            style={{ top: "30%", right: "20%", animationDelay: "1s" }}
          >
            npm <span style={{ color: "var(--kodro-cyan)" }}>run</span> deploy
          </div>
          <div
            className="floating-code opacity-10"
            style={{ top: "40%", left: "8%", animationDelay: "3s" }}
          >
            git <span style={{ color: "var(--kodro-accent)" }}>commit</span> -m
          </div>
          <div
            className="floating-code opacity-8"
            style={{ top: "45%", right: "5%", animationDelay: "5s" }}
          >
            {"{"}
            <span style={{ color: "var(--kodro-cyan)" }}>innovation</span>
            {"}"}
          </div>
          <div
            className="floating-code opacity-10"
            style={{ top: "55%", left: "12%", animationDelay: "6s" }}
          >
            import <span style={{ color: "var(--kodro-accent)" }}>React</span>
          </div>
          <div
            className="floating-code opacity-8"
            style={{ top: "60%", right: "15%", animationDelay: "2.5s" }}
          >
            async <span style={{ color: "var(--kodro-cyan)" }}>function</span>
          </div>
          <div
            className="floating-code opacity-10"
            style={{ top: "70%", left: "20%", animationDelay: "4.5s" }}
          >
            export <span style={{ color: "var(--kodro-accent)" }}>default</span>
          </div>
          <div
            className="floating-code opacity-8"
            style={{ top: "75%", right: "8%", animationDelay: "1.5s" }}
          >
            &lt;<span style={{ color: "var(--kodro-cyan)" }}>Component</span>
            &gt;
          </div>
          <div
            className="floating-code opacity-5"
            style={{ top: "20%", left: "25%", animationDelay: "3.5s" }}
          >
            return (
            <span style={{ color: "var(--kodro-accent)" }}>success</span>)
          </div>
          <div
            className="floating-code opacity-5"
            style={{ top: "35%", right: "25%", animationDelay: "0.5s" }}
          >
            useState(
            <span style={{ color: "var(--kodro-cyan)" }}>
              &apos;ready&apos;
            </span>
            )
          </div>
          <div
            className="floating-code opacity-8"
            style={{ top: "65%", left: "3%", animationDelay: "5.5s" }}
          >
            console.<span style={{ color: "var(--kodro-accent)" }}>log</span>()
          </div>
          <div
            className="floating-code opacity-8"
            style={{ top: "80%", right: "12%", animationDelay: "2.8s" }}
          >
            {"{"} <span style={{ color: "var(--kodro-cyan)" }}>loading</span>:
            false {"}"}
          </div>
          <div
            className="floating-code opacity-5"
            style={{ top: "10%", left: "35%", animationDelay: "4.2s" }}
          >
            &lt;<span style={{ color: "var(--kodro-accent)" }}>div</span>{" "}
            className=&quot;&quot;&gt;
          </div>
          <div
            className="floating-code opacity-5"
            style={{ top: "50%", left: "28%", animationDelay: "1.8s" }}
          >
            props.<span style={{ color: "var(--kodro-cyan)" }}>children</span>
          </div>
          <div
            className="floating-code opacity-8"
            style={{ top: "85%", left: "10%", animationDelay: "3.2s" }}
          >
            if (<span style={{ color: "var(--kodro-accent)" }}>condition</span>){" "}
            {"{"}
          </div>
          <div
            className="floating-code opacity-8"
            style={{ top: "5%", right: "30%", animationDelay: "6.2s" }}
          >
            interface <span style={{ color: "var(--kodro-cyan)" }}>Props</span>
          </div>
          <div
            className="floating-code opacity-8"
            style={{ top: "90%", right: "25%", animationDelay: "0.8s" }}
          >
            {"}"} catch (
            <span style={{ color: "var(--kodro-accent)" }}>error</span>) {"{"}
          </div>
          <div
            className="floating-code opacity-8"
            style={{ top: "12%", left: "40%", animationDelay: "4.8s" }}
          >
            map((<span style={{ color: "var(--kodro-cyan)" }}>item</span>) =&gt;
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Building the{" "}
              <span className="gradient-text gradient-shift">Future</span>
              <br />
              One Line at a Time
            </h1>
          </div>

          <p
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            style={{ color: "var(--text-muted)" }}
          >
            Welcome to{" "}
            <span className="font-semibold gradient-text">Kodro</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="group px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2"
              style={{
                backgroundColor: "var(--kodro-accent)",
                borderColor: "var(--kodro-accent)",
                color: "white",
              }}
            >
              Start Your Project
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>

            <a
              href="#about"
              className="group px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border-2"
              style={{
                borderColor: "var(--kodro-accent)",
                color: "var(--kodro-accent)",
                backgroundColor: "transparent",
              }}
            >
              Learn More
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>

          {/* <div
            className="mt-16 flex justify-center space-x-8 text-sm font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            <div className="flex items-center">
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "var(--kodro-cyan)" }}
              ></div>
              50+ Projects Delivered
            </div>
            <div className="flex items-center">
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "var(--kodro-cyan)" }}
              ></div>
              5+ Years Experience
            </div>
            <div className="flex items-center">
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "var(--kodro-cyan)" }}
              ></div>
              24/7 Support
            </div>
          </div> */}
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Timeline Section */}
      <Timeline />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
