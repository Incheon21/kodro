"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppClick = () => {
    const message = `Hi Kodro Team! I'm interested in discussing a project.
    
Name: ${formData.name || "Not provided"}
Email: ${formData.email || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Project Type: ${formData.projectType || "Not specified"}
Budget: ${formData.budget || "Not specified"}
Message: ${formData.message || "Not provided"}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6285121096113?text=${encodedMessage}`; // Replace with actual WhatsApp number
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Email sent successfully! We'll get back to you soon.");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        toast.error(result.error || "Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Email submission error:", error);
      toast.error(
        "Failed to send email. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-4 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--foreground)" }}
          >
            Let&apos;s <span className="gradient-text">Connect</span>
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
            Ready to bring your ideas to life? Get in touch with us and
            let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className="p-8 rounded-2xl border"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border-color)",
            }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "var(--foreground)" }}
            >
              Tell Us About Your Project
            </h3>

            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border-color)",
                      color: "var(--foreground)",
                    }}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border-color)",
                      color: "var(--foreground)",
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border-color)",
                      color: "var(--foreground)",
                    }}
                    placeholder="+62 851-2109-6113"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border-color)",
                      color: "var(--foreground)",
                    }}
                  >
                    <option value="">Select project type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="api-development">API Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border-color)",
                    color: "var(--foreground)",
                  }}
                >
                  <option value="">Select budget range</option>
                  <option value="under-2k">Under Rp2.000.000</option>
                  <option value="2k-5k">Rp2.000.001 - Rp5.000.000</option>
                  <option value="5k-10k">Rp5.000.001 - Rp10.000.000</option>
                  <option value="10k-plus">Rp10.000.000+</option>
                  <option value="discuss">Let&apos;s discuss</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Project Description *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 resize-vertical"
                  style={{
                    backgroundColor: "var(--background)",
                    borderColor: "var(--border-color)",
                    color: "var(--foreground)",
                  }}
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  style={{
                    backgroundColor: "var(--kodro-accent)",
                    color: "white",
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Email"}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  disabled={isSubmitting}
                  className="flex-1 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  style={{
                    backgroundColor: "#25D366",
                    color: "white",
                  }}
                >
                  WhatsApp Us
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div
              className="p-8 rounded-2xl border"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--foreground)" }}
              >
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <h4
                      className="font-semibold mb-1"
                      style={{ color: "var(--foreground)" }}
                    >
                      Email
                    </h4>
                    <a
                      href="mailto:hello@kodro.com"
                      className="transition-colors duration-200 hover:opacity-75"
                      style={{ color: "var(--kodro-accent)" }}
                    >
                      kodrodev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">📱</div>
                  <div>
                    <h4
                      className="font-semibold mb-1"
                      style={{ color: "var(--foreground)" }}
                    >
                      WhatsApp
                    </h4>
                    <a
                      href="https://wa.me/6285121096113"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200 hover:opacity-75"
                      style={{ color: "var(--kodro-accent)" }}
                    >
                      +62 851-2109-6113
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl mr-4">🕒</div>
                  <div>
                    <h4
                      className="font-semibold mb-1"
                      style={{ color: "var(--foreground)" }}
                    >
                      Response Time
                    </h4>
                    <p style={{ color: "var(--text-muted)" }}>
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-8 rounded-2xl border"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--foreground)" }}
              >
                Why Choose Kodro?
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: "var(--kodro-cyan)" }}
                  ></div>
                  <span style={{ color: "var(--text-muted)" }}>
                    Expert and experienced team
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: "var(--kodro-cyan)" }}
                  ></div>
                  <span style={{ color: "var(--text-muted)" }}>
                    24/7 support and maintenance
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: "var(--kodro-cyan)" }}
                  ></div>
                  <span style={{ color: "var(--text-muted)" }}>
                    Transparent pricing and timeline
                  </span>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: "var(--kodro-cyan)" }}
                  ></div>
                  <span style={{ color: "var(--text-muted)" }}>
                    Modern tech stack and best practices
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
