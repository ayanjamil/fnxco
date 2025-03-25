"use client";

import { CSSProperties, useEffect } from "react";
import { Check, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

export {};
declare global {
  interface Window {
    Calendly: unknown;
  }
}

// Define styles
const sectionStyle: CSSProperties = {
  backgroundColor: "#000",
  padding: "4rem 1.5rem",
  position: "relative",
  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  textAlign: "center",
};

const headingStyle: CSSProperties = {
  fontSize: "clamp(2.5rem, 5vw, 4rem)",
  fontWeight: 700,
  marginBottom: "1.5rem",
  fontFamily: "var(--font-display)",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  background: "linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.7))",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  position: "relative",
};

const subtitleStyle: CSSProperties = {
  fontSize: "1rem",
  lineHeight: 1.5,
  color: "rgba(255, 255, 255, 0.8)",
  margin: "0 auto 2rem auto",
  fontWeight: 300,
};

const boxStyle: CSSProperties = {
  padding: "3rem",
  backgroundColor: "rgba(255, 255, 255, 0.02)",
  position: "relative",
  overflow: "hidden",
  backdropFilter: "blur(5px)",
  borderRadius: "8px",
  margin: "1rem",
  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "2px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
  flex: "1 1 30%",
  minWidth: "250px",
};

const pointStyle: CSSProperties = {
  fontSize: "1.5rem",
  marginBottom: "1rem",
  textAlign: "center",
};

const hoverEffect = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0 8px 40px rgba(255, 255, 255, 0.3)",
    borderColor: "#4b9fff",
  },
};

const subtitleAccentStyle: CSSProperties = {
  color: "#7c3aed",
  fontWeight: 500,
};

// Main component
export default function WhyUs() {
  const features = [
    {
      id: 1,
      title: <strong>Identify Pain Points</strong>,
      description:
        "Uncover and fix inefficiencies that are holding you back, streamlining your path to growth.",
      icon: <Check size={50} color="#4b9fff" />,
    },
    {
      id: 2,
      title: <strong>Eliminate Bottlenecks</strong>,
      description:
        "Streamline your workflows for smooth, efficient, and hassle-free operations.",
      icon: <Shield size={50} color="#4b9fff" />,
    },
    {
      id: 3,
      title: <strong>High ROI & Scalability</strong>,
      description:
        "Grow confidently with flexible solutions that expand alongside your business.",
      icon: <Clock size={50} color="#4b9fff" />,
    },
  ];

  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/asset/production/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidgets();
      }
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script if the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="why-us" style={sectionStyle}>
      <h2 style={headingStyle}>Why Clients Prefer Us</h2>
      <motion.p
        style={subtitleStyle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        FNX Labs is Your Trusted Partner for{" "}
        <span style={subtitleAccentStyle}>AI-Powered Automation</span>. Want to
        spend less time on administrative tasks and more time building your
        business? Here&apos;s how we deliver on that promise: Discover how our{" "}
        <span style={subtitleAccentStyle}>cutting-edge solutions</span> can
        transform your business with these powerful features designed for the
        modern enterprise.
      </motion.p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {features.map((feature, index) => {
          console.log(`Rendering feature with key: ${feature.id}`);
          return (
            <motion.div
              key={feature.id} // Removed duplicate key assignment
              style={boxStyle}
              {...hoverEffect}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }} // Use index for delay
              viewport={{ once: true, amount: 0.3 }} // Added viewport for better animation performance
            >
              {feature.icon}
              <h3 style={pointStyle}>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
      <p>
        We craft a tailored action plan that fits your budget and needs—no
        guesswork, just solutions.
      </p>
    </section>
  );
}
