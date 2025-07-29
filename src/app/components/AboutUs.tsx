import React from "react";

const AboutUs = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technologies.",
      icon: "🌐",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
    },
    // {
    //   title: "Cloud Solutions",
    //   description:
    //     "Scalable cloud infrastructure and deployment solutions for your applications.",
    //   icon: "☁️",
    // },
    // {
    //   title: "API Development",
    //   description:
    //     "Robust and secure APIs to power your applications and integrate systems.",
    //   icon: "🔌",
    // },
    // {
    //   title: "UI/UX Design",
    //   description:
    //     "Beautiful, intuitive user interfaces that provide exceptional user experiences.",
    //   icon: "🎨",
    // },
    {
      title: "Consulting",
      description:
        "Technical consulting and architecture planning for your software projects.",
      icon: "💡",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 px-4 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--foreground)" }}
          >
            About <span className="gradient-text">Kodro</span>
          </h2>
          <div
            className="w-20 h-1 bg-gradient-to-r mx-auto mb-8"
            style={{
              background:
                "linear-gradient(to right, var(--kodro-accent), var(--kodro-cyan))",
            }}
          ></div>
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            We are a passionate software house dedicated to transforming your
            ideas into powerful, scalable digital solutions. Our team combines
            creativity with technical expertise to deliver exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: "var(--foreground)" }}
              >
                {service.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "30+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "var(--kodro-accent)" }}
              >
                {stat.number}
              </div>
              <div
                className="text-sm md:text-base"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
