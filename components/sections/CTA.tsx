"use client";

import { motion } from "framer-motion";
import { CSSProperties, useEffect } from "react";

export default function CTA() {
    const sectionStyle: CSSProperties = {
        backgroundColor: '#000',
        padding: '8rem 1.5rem',
        position: 'relative',
        marginTop: '-1px',
        overflow: 'hidden',
    };

    const containerStyle: CSSProperties = {
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
    };

    const contentStyle: CSSProperties = {
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
    };

    const titleStyle: CSSProperties = {
        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
        fontWeight: 700,
        marginBottom: '1.5rem',
        fontFamily: 'var(--font-display)',
        letterSpacing: '0.02em',
        background: 'linear-gradient(45deg, var(--primary), #fff)',
        backgroundSize: '200% 200%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'gradientText 6s ease infinite',
    };

    const descriptionStyle: CSSProperties = {
        fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
        lineHeight: 1.6,
        marginBottom: '3rem',
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: 300,
    };

    return (
        <section id="contact" style={sectionStyle}>
            <div style={containerStyle}>
                <motion.div
                    style={contentStyle}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2 style={titleStyle}>Schedule a Consultation</motion.h2>
                    <motion.p style={descriptionStyle}>
                        Book a 30-minute call with our team to discuss how our solutions can transform your business.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '16px',
                            border: '1px solid rgba(var(--primary-rgb), 0.15)',
                            padding: '1.5rem',
                            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
                            position: 'relative',
                            zIndex: 2,
                            marginTop: '2rem',
                            overflow: 'hidden',
                            maxWidth: '900px',
                            margin: '2rem auto 0',
                        }}
                    >
                        <div
                            className="calendly-inline-widget"
                            data-url="https://calendly.com/nishit-findingniche/30min?hide_gdpr_banner=1"
                            style={{ width: '100%', height: '780px', position: 'relative', zIndex: 1 }}
                        ></div>
                        <CalendlyScript />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

declare global {
    interface Window {
        Calendly: {
            initInlineWidgets: () => void;
        };
    }
}

function CalendlyScript() {
    useEffect(() => {
        const scriptId = "calendly-script";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://assets.calendly.com/assets/external/widget.js";
            script.async = true;
            script.onload = () => {
                if (window.Calendly && typeof window.Calendly.initInlineWidgets === "function") {
                    window.Calendly.initInlineWidgets();
                }
            };
            document.head.appendChild(script);
        } else if (window.Calendly && typeof window.Calendly.initInlineWidgets === "function") {
            window.Calendly.initInlineWidgets();
        }
    }, []);

    return null;
}
