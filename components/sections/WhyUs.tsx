"use client";

import { CSSProperties } from "react";
import { Check, Shield, MessageSquare, Mic } from "lucide-react";
import { motion } from "framer-motion";

// Styles
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
    maxWidth: "1000px",
    margin: "0 auto 2rem",
    fontWeight: 300,
};

const boxContainerStyle: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
    marginTop: "2rem",
};

const boxStyle: CSSProperties = {
    flex: "1 1 280px",
    maxWidth: "320px",
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    padding: "2rem",
    borderRadius: "10px",
    backdropFilter: "blur(5px)",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
    cursor: "default",
    textAlign: "center",
};

const pointStyle: CSSProperties = {
    fontSize: "1.5rem",
    marginTop: "1rem",
    marginBottom: "0.75rem",
    fontWeight: 600,
    color: "#fff",
};

const hoverEffect = {
    whileHover: {
        scale: 1.05,
        boxShadow: "0 8px 40px rgba(75, 159, 255, 0.5)",
        borderColor: "#4b9fff",
        cursor: "pointer",
    },
};

const subtitleAccentStyle: CSSProperties = {
    color: "#7c3aed",
    fontWeight: 500,
};

// Component
export default function WhyUs() {
    const features = [
        {
            id: 1,
            title: "10x Follow-up Speed",
            description:
                "Instantly respond to leads and inquiries without delay, ensuring no opportunity is missed.",
            icon: <Check size={50} color="#4b9fff" />,
        },
        {
            id: 2,
            title: "Zero Drop-offs",
            description:
                "Never lose another lead due to delayed response or follow-up fatigue.",
            icon: <Shield size={50} color="#4b9fff" />,
        },
        {
            id: 3,
            title: "Conversations at Scale",
            description:
                "Handle thousands of simultaneous conversations with consistent quality and personalization.",
            icon: <MessageSquare size={50} color="#4b9fff" />,
        },
        {
            id: 4,
            title: "Custom-trained AI Voice",
            description:
                "Tailor your AI voice to match your brand personality and customer expectations.",
            icon: <Mic size={50} color="#4b9fff" />,
        },
    ];

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
                FNX Labs is your trusted partner for <span style={subtitleAccentStyle}>AI-Powered Automation</span>. Spend less time on admin tasks and more on growing your business. See how our <span style={subtitleAccentStyle}>cutting-edge solutions</span> can transform your enterprise with powerful, modern features.
            </motion.p>

            <div style={boxContainerStyle}>
                {features.map((feature, i) => (
                    <motion.div
                        key={feature.id}
                        style={boxStyle}
                        {...hoverEffect}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {feature.icon}
                        <h3 style={pointStyle}>{feature.title}</h3>
                        <p style={{ color: "rgba(255, 255, 255, 0.75)", fontWeight: 400 }}>
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
