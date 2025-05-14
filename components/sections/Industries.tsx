"use client";

import { CSSProperties } from "react";
import { GraduationCap, Home, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

// Reuse styles
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

const boxContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
};

const boxStyle: CSSProperties = {
    padding: "2rem",
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(5px)",
    borderRadius: "8px",
    margin: "0",
    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
    flex: "1 1 calc(33.333% - 1rem)",
    minWidth: "250px",
    maxWidth: "300px",
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

export default function Industries() {
    const industries = [
        {
            id: 1,
            title: <strong>EdTech & Universities</strong>,
            description:
                "Streamline admissions, answer student inquiries, and boost enrollment with 24/7 AI voice support that enhances admissions and provides quick access to course information.",
            icon: <GraduationCap size={50} color="#4b9fff" />,
        },
        {
            id: 2,
            title: <strong>Real Estate</strong>,
            description:
                "Qualify property inquiries, schedule viewings, and nurture leads with automated follow-ups, ensuring no opportunity is missed and improving client engagement.",
            icon: <Home size={50} color="#4b9fff" />,
        },
        {
            id: 3,
            title: <strong>Enterprise Teams</strong>,
            description:
                "Scale service operations with 24/7 support, automate sales qualification, and maintain consistent customer experiences through seamless process automation.",
            icon: <Briefcase size={50} color="#4b9fff" />,
        },
    ];

    return (
        <section id="industries" style={sectionStyle}>
            <h2 style={headingStyle}>Industries We Serve</h2>
            <motion.p
                style={subtitleStyle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                From education to real estate to enterprise support —{" "}
                <span style={subtitleAccentStyle}>FNX Labs</span> powers intelligent,
                scalable voice automation for every industry.
            </motion.p>
            <div style={boxContainerStyle}>
                {industries.map((industry, index) => (
                    <motion.div
                        key={industry.id}
                        style={boxStyle}
                        {...hoverEffect}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {industry.icon}
                        <h3 style={pointStyle}>{industry.title}</h3>
                        <p style={{ whiteSpace: "pre-line" }}>{industry.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
