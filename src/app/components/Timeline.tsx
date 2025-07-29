import React from "react";
const Timeline = () => {
  const steps = [
    {
      step: "01",
      title: "Initial Contact",
      description: "Reach out through our contact form, email, or WhatsApp.",
      icon: "📞",
    },
    {
      step: "02",
      title: "Project Planning",
      description:
        "We analyze requirements and create a detailed project plan.",
      icon: "📋",
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Our team works on your project with regular updates.",
      icon: "⚙️",
    },
    {
      step: "04",
      title: "Testing & Review",
      description: "Comprehensive testing and quality assurance.",
      icon: "🧪",
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "Deploy to production with ongoing support.",
      icon: "🚀",
    },
  ];
  return (
    <section
      id="timeline"
      className="w-full py-16 px-4 transition-colors duration-300"
    >
      {" "}
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* Section Header */}{" "}
        <div className="text-center mb-12">
          {" "}
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            {" "}
            How We <span className="gradient-text">Work</span>{" "}
          </h2>{" "}
          <div
            className="w-16 h-1 bg-gradient-to-r mx-auto mb-6"
            style={{
              background:
                "linear-gradient(to right, var(--kodro-accent), var(--kodro-cyan))",
            }}
          ></div>{" "}
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            {" "}
            Our streamlined 5-step process ensures your project is delivered
            efficiently.{" "}
          </p>{" "}
        </div>{" "}
        {/* Compact Timeline - Horizontal on larger screens */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {" "}
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {" "}
              {/* Step Card */}{" "}
              <div
                className="p-6 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg h-full"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                {" "}
                {/* Step Number & Icon */}{" "}
                <div className="flex items-center justify-between mb-4">
                  {" "}
                  <div
                    className="text-sm font-bold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "var(--kodro-accent)",
                      color: "white",
                    }}
                  >
                    {" "}
                    {step.step}{" "}
                  </div>{" "}
                  <div className="text-2xl">{step.icon}</div>{" "}
                </div>{" "}
                {/* Content */}{" "}
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: "var(--foreground)" }}
                >
                  {" "}
                  {step.title}{" "}
                </h3>{" "}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {" "}
                  {step.description}{" "}
                </p>{" "}
              </div>{" "}
              {/* Arrow connector (desktop only) */}{" "}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  {" "}
                  <div
                    className="w-6 h-6 flex items-center justify-center rounded-full text-xs"
                    style={{
                      backgroundColor: "var(--background)",
                      color: "var(--kodro-accent)",
                    }}
                  >
                    {" "}
                    →{" "}
                  </div>{" "}
                </div>
              )}{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* CTA */}{" "}
        <div className="text-center mt-12">
          {" "}
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: "var(--kodro-accent)", color: "white" }}
          >
            {" "}
            Start Your Project <span className="ml-2">→</span>{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Timeline;
