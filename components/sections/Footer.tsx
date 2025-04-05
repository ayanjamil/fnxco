"use client";

import Link from 'next/link';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import { CSSProperties, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer({ scheduleRef }: { scheduleRef?: React.RefObject<HTMLElement> }) {
    const [isMediumScreen, setIsMediumScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMediumScreen(window.innerWidth >= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const scrollToSchedule = () => {
        if (scheduleRef?.current) {
            scheduleRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const footerStyle: CSSProperties = {
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95))',
        color: '#fff',
        padding: '2.5rem 1.5rem',
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
    };

    const gridStyle: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: isMediumScreen ? 'repeat(3, 1fr)' : '1fr',
        gap: '2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        textAlign: isMediumScreen ? 'left' : 'center',
    };

    const headingStyle: CSSProperties = {
        fontSize: '1.25rem',
        fontWeight: 700,
        marginBottom: '0.75rem',
    };

    const subheadingStyle: CSSProperties = {
        fontSize: '1rem',
        fontWeight: 400,
        color: 'rgba(255, 255, 255, 0.8)',
        marginBottom: '0.5rem',
    };

    const linkStyle: CSSProperties = {
        color: '#4b9fff',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.4rem',
    };

    return (
        <>
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '2rem' }} />
            <footer style={footerStyle}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>FNX Labs</h2>
                    <p style={subheadingStyle}>AI-powered automation for personalized outreach and workflow efficiency.</p>
                    <p style={subheadingStyle}>nishit@fnxlabs.co</p>
                </div>

                <div style={gridStyle}>
                    <div>
                        <h3 style={headingStyle}>Solutions</h3>
                        <p style={subheadingStyle}>AI Avatar Videos</p>
                        <p style={subheadingStyle}>Workflow Automation</p>
                    </div>
                    <div>
                        <h3 style={headingStyle}>Company</h3>
                        <motion.p
                            whileHover={{ scale: 1.05, color: '#7c3aed' }}
                            style={{ ...subheadingStyle, cursor: 'pointer' }}
                            onClick={scrollToTop}
                        >
                            About Us
                        </motion.p>
                    </div>
                    <div>
                        <h3 style={headingStyle}>Get Started</h3>
                        <motion.p
                            whileHover={{ scale: 1.05, color: '#7c3aed' }}
                            style={{ ...subheadingStyle, cursor: 'pointer' }}
                            onClick={scrollToSchedule}
                        >
                            Book a Demo | Talk to Sales
                        </motion.p>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginTop: '2rem' }}>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Link href="https://www.linkedin.com/company/finding-niche/" target="_blank" style={linkStyle}>
                            <Linkedin size={22} />
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Link href="https://x.com/fnxlabsco" target="_blank" style={linkStyle}>
                            <Twitter size={22} />
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <Link href="mailto:nishit@fnxlabs.co" style={linkStyle}>
                            <Mail size={22} />
                        </Link>
                    </motion.div>
                </div>

                <p style={{ ...subheadingStyle, marginTop: '2rem', fontSize: '0.85rem' }}>
                    2025 FNX Labs, Inc. All rights reserved.
                </p>
            </footer>
        </>
    );
}
