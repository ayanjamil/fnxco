"use client";

import { useState, useEffect, CSSProperties } from "react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headingVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
      }
    }
  };

  const heroTitle = "Smarter Systems,".split("");
  const secondLine = "Stronger Businesses".split("");

  const primaryButtonStyle: CSSProperties = {
    padding: '0.75rem 2rem',
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '500',
    border: '2px solid var(--primary)',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: '0.9rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    fontFamily: 'var(--font-alt)',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1
  };

  const outlineButtonStyle: CSSProperties = {
    padding: '0.75rem 2rem',
    backgroundColor: 'transparent',
    color: 'var(--foreground)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: '0.9rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    fontFamily: 'var(--font-alt)',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1
  };

  const buttonHoverGlowStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.5), rgba(75, 159, 255, 0.5))',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: -1
  };

  const heroStyle: CSSProperties = {
    backgroundColor: '#000',
    minHeight: '80vh',
    padding: '4rem 1rem',
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  };

  const floatingElementsStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 0
  };

  const backgroundGradientStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 10% 10%, rgba(124, 58, 237, 0.25) 0%, transparent 60%),
      radial-gradient(circle at 90% 20%, rgba(75, 159, 255, 0.28) 0%, transparent 70%),
      radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.12) 0%, transparent 70%)
    `,
    zIndex: 0,
    opacity: 1
  };

  const diagonalGradientStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, transparent 50%, rgba(75, 159, 255, 0.2) 100%)',
    zIndex: 0
  };

  const glowEffectStyle: CSSProperties = {
    position: 'absolute',
    top: '30%',
    left: '10%',
    width: '50%',
    height: '40%',
    background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
    filter: 'blur(60px)',
    zIndex: 0
  };
  
  const secondGlowEffectStyle: CSSProperties = {
    position: 'absolute',
    top: '20%',
    right: '10%',
    width: '40%',
    height: '30%',
    background: 'radial-gradient(circle at center, rgba(75, 159, 255, 0.15) 0%, transparent 70%)',
    filter: 'blur(60px)',
    zIndex: 0
  };

  const containerStyle: CSSProperties = {
    maxWidth: '1280px',
    width: '100%',
    margin: '0 auto'
  };

  const heroContentStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '3rem',
    alignItems: 'center'
  };

  const heroTextContainerStyle: CSSProperties = {
    gridColumn: '1 / -1'
  };

  const gradientTextStyle: CSSProperties = {
    backgroundImage: 'linear-gradient(45deg, var(--primary), #7c3aed, #4b9fff)',
    backgroundSize: '300% 300%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    position: 'relative',
    display: 'inline-block',
    animation: 'gradientText 6s ease infinite',
    fontWeight: 800
  };

  const headingOneStyle: CSSProperties = {
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    lineHeight: 1.1,
    margin: '0 0 2rem 0',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
    color: 'rgba(255, 255, 255, 0.9)',
  };

  const headingAccentStyle: CSSProperties = {
    color: '#4b9fff',
    textShadow: '0 0 20px rgba(75, 159, 255, 0.3)'
  };

  const secondLineStyle: CSSProperties = {
    color: 'rgba(255, 255, 255, 0.95)',
    fontWeight: 700
  };

  const paragraphStyle: CSSProperties = {
    fontSize: 'clamp(0.9rem, 4vw, 1.1rem)',
    lineHeight: 1.6,
    marginBottom: '2.5rem',
    color: 'rgba(255, 255, 255, 0.7)',
    maxWidth: '700px',
    fontWeight: 300,
  };

  const highlightedTextStyle: CSSProperties = {
    color: '#7c3aed',
    fontWeight: 500
  };

  const secondaryHighlightStyle: CSSProperties = {
    color: '#4b9fff',
    fontWeight: 400
  };

  const buttonGroupStyle: CSSProperties = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap'
  };

  const particles = [
    { width: 20.06, height: 22.08, top: 98.35, left: 96.49 },
    { width: 13.57, height: 23.53, top: 94.90, left: 71.40 },
    { width: 12.17, height: 24.09, top: 83.20, left: 73.30 },
    { width: 19.68, height: 22.48, top: 66.21, left: 86.83 },
    { width: 20.08, height: 20.27, top: 38.95, left: 14.94 },
    { width: 23.33, height: 21.19, top: 47.32, left: 34.79 },
    { width: 25.80, height: 29.62, top: 7.25, left: 47.57 },
    { width: 25.03, height: 23.92, top: 92.55, left: 71.27 },
    { width: 23.84, height: 21.61, top: 9.79, left: 56.68 },
    { width: 13.16, height: 23.92, top: 56.02, left: 0.39 }
  ];

  const gridOverlayStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    zIndex: 0,
    opacity: 0.7
  };

  return (
    <section className="hero" style={heroStyle}>
      <motion.div 
        style={backgroundGradientStyle}
        animate={{ 
          opacity: [0.9, 1, 0.9],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: 'reverse' 
        }}
      />
      
      <div style={diagonalGradientStyle}></div>
      <div style={gridOverlayStyle}></div>
      <div style={glowEffectStyle}></div>
      <div style={secondGlowEffectStyle}></div>

      <div style={floatingElementsStyle}>
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: particle.width,
              height: particle.height,
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(var(--primary-rgb), 0.05)',
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              pointerEvents: 'none'
            }}
            animate={{
              y: [Math.random() * 10, Math.random() * -10],
              x: [Math.random() * 10, Math.random() * -10]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div style={containerStyle}>
        <div style={heroContentStyle}>
          <div style={heroTextContainerStyle}>
            <motion.h1 
              className="heading-one"
              style={headingOneStyle}
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              {heroTitle.map((letter, index) => {
                let letterStyle: CSSProperties = {};
                if (index === 0) letterStyle = headingAccentStyle;
                if (letter === "S" && index > 0) letterStyle = { color: '#7c3aed' };
                
                return (
                  <motion.span 
                    key={index} 
                    variants={letterVariants}
                    style={letterStyle}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                );
              })}
              <br />
              {secondLine.map((letter, index) => {
                let letterStyle: CSSProperties = {};
                if (index === 0) letterStyle = gradientTextStyle;
                else if (letter === "B") letterStyle = { color: '#7c3aed' };
                else letterStyle = secondLineStyle;
                
                return (
                  <motion.span 
                    key={`second_${index}`} 
                    variants={letterVariants}
                    style={letterStyle}
                  >
                    {letter === " " ? "\u00A0" : letter}
                   
                  </motion.span>
                );
              })}
            </motion.h1>
            
            <motion.p
              style={paragraphStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Revolutionize your business with our <span style={highlightedTextStyle}>cutting-edge solutions</span> designed to 
enhance operational efficiency and drive <span style={secondaryHighlightStyle}>growth</span> in today&apos;s digital landscape.

            </motion.p>
            
            <motion.div
              style={buttonGroupStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="#features"
                style={primaryButtonStyle}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 25px rgba(75, 159, 255, 0.5)',
                  borderColor: '#7c3aed',
                  color: '#ffffff'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span style={{position: 'relative', zIndex: 2}}>Explore Features</span>
                <motion.div 
                  style={buttonHoverGlowStyle}
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(75, 159, 255, 0.8))'
                  }}
                />
              </motion.a>
              
              <motion.a
                href="#contact"
                style={outlineButtonStyle}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(124, 58, 237, 0.8)',
                  color: '#7c3aed',
                  boxShadow: '0 0 15px rgba(124, 58, 237, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span style={{position: 'relative', zIndex: 2}}>Get Started</span>
                <motion.div 
                  style={{...buttonHoverGlowStyle, background: 'rgba(255, 255, 255, 0.03)'}}
                  initial={{ height: '0%' }}
                  whileHover={{ height: '100%' }}
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes gradientText {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 768px) {
          .hero {
            padding: 7rem 1.5rem 2rem;
          }
          .heading-one {
            font-size: clamp(2.5rem, 8vw, 4.5rem);
          }
        }
      `}</style>
    </section>
  );
}