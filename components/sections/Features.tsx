"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {  Palette, Phone } from 'lucide-react';
import { CSSProperties } from 'react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

// Define the Feature interface
interface Feature {
  title: string;
  description: string;
  icon: keyof typeof featureIcons;
}

const FeatureItem = ({ icon, title, description, index }: FeatureItemProps) => {
  
  
  const featureBoxStyle: CSSProperties = {
    padding: '2.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    position: 'relative',
    overflow: 'hidden',
    backdropFilter: 'blur(5px)',
    borderRadius: '4px',
    margin: '0 auto',
    maxWidth: '1000px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    marginBottom: '2rem',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    // Responsive adjustments
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      padding: '1.5rem',
    }
  };

  const iconContainerStyle: CSSProperties = {
    width: '4rem',
    height: '4rem',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    color: 'var(--primary)',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    flexShrink: 0,
    marginRight: '2rem',
    overflow: 'hidden',
    position: 'relative',
    background: `linear-gradient(135deg, rgba(124, 58, 237, ${index % 3 * 0.05 + 0.1}) 0%, rgba(75, 159, 255, ${index % 3 * 0.03 + 0.08}) 100%)`
  };

  const iconGlowStyle: CSSProperties = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at center, rgba(var(--primary-rgb), 0.3) 0%, transparent 70%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 0
  };

  const iconWrapperStyle: CSSProperties = {
    position: 'relative',
    zIndex: 1
  };

  const contentStyle: CSSProperties = {
    flex: 1
  };

  const tagStyle: CSSProperties = {
    display: 'inline-block',
    padding: '0.35rem 0.75rem',
    fontSize: '0.7rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: '#000',
    background: `linear-gradient(45deg, var(--primary), ${index % 2 === 0 ? '#7c3aed' : '#4b9fff'})`,
    backgroundSize: '200% 200%',
    animation: 'gradientShift 4s ease infinite',
    borderRadius: '4px',
    marginBottom: '1rem'
  };

  const titleStyle: CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '1rem',
    fontFamily: 'var(--font-display)',
    letterSpacing: '0.02em',
    background: 'linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.7))',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    position: 'relative'
  };

  const descriptionStyle: CSSProperties = {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 1.7,
    fontWeight: 300
  };

  const overlayStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, rgba(124, 58, 237, 0.${index % 3 + 1}) 0%, rgba(75, 159, 255, 0.${index % 2 + 1}) 100%)`,
    opacity: 0,
    transition: 'opacity 0.4s ease, transform 0.4s ease',
    pointerEvents: 'none',
    zIndex: 0,
    mixBlendMode: 'overlay'
  };

  const highlightStyle: CSSProperties = {
    color: index % 2 === 0 ? '#7c3aed' : '#4b9fff',
    fontWeight: 500
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        style={featureBoxStyle}
        whileHover={{
          borderColor: index % 2 === 0 ? '#7c3aed' : 'var(--primary)',
          boxShadow: `0 10px 30px rgba(${index % 2 === 0 ? '124, 58, 237' : 'var(--primary-rgb)'}, 0.15)`
        }}
      >
        <motion.div
          style={overlayStyle}
          whileHover={{
            opacity: 0.1
          }}
        />

        <motion.div
          style={iconContainerStyle}
          whileHover={{
            borderColor: index % 2 === 0 ? '#7c3aed' : 'var(--primary)',
            transform: 'rotate(5deg)',
            boxShadow: `0 0 20px rgba(${index % 2 === 0 ? '124, 58, 237' : 'var(--primary-rgb)'}, 0.3)`
          }}
        >
          <motion.div
            style={iconGlowStyle}
            whileHover={{ opacity: 0.8 }}
          />
          <motion.div 
            style={iconWrapperStyle}
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, index % 2 === 0 ? 5 : -5, 0]
            }}
            transition={{ 
              duration: 3 + index,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            {icon}
          </motion.div>
        </motion.div>

        <div style={contentStyle}>
          <div style={tagStyle}>FEATURE</div>
          <h3 style={titleStyle}>{title}</h3>
          <p style={descriptionStyle}>
            {description.split(' ').map((word, i) => 
              i % 8 === index % 8 ? <span key={i} style={highlightStyle}>{word} </span> : word + ' '
            )}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const featureIcons = {
  palette: <Palette size={36} />,
  phone: <Phone size={36} />,
  'puzzle-piece': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="#4b9fff" />
        </linearGradient>
      </defs>
      <path d="M4 7H9V12H4V7Z" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 7V3.54C9 3.21 9.21 3 9.54 3H13.5" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5 3C14.5 4.1 15.4 5 16.5 5C17.6 5 18.5 4.1 18.5 3" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 16.5C18.9 16.5 18 15.6 18 14.5C18 13.4 18.9 12.5 20 12.5" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 12.5H16.54C16.21 12.5 16 12.29 16 11.96V7.5" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 7.5H20V12" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 16H15V20.5H11V16Z" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 16V12.5H7V16" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'expand': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="#4b9fff" />
        </linearGradient>
      </defs>
      <path d="M15 3H21V9" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 21H3V15" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 3L14 10" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 21L10 14" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'users': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="#4b9fff" />
        </linearGradient>
      </defs>
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="url(#gradient5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="url(#gradient5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="url(#gradient5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="url(#gradient5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'headset': (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="#4b9fff" />
        </linearGradient>
      </defs>
      <path d="M18 16.5H17.25C16.5596 16.5 16 17.0596 16 17.75V18.25C16 18.9404 16.5596 19.5 17.25 19.5H18.75C19.4404 19.5 20 18.9404 20 18.25V13" stroke="url(#gradient6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 13V18.25C4 18.9404 4.55964 19.5 5.25 19.5H6.75C7.44036 19.5 8 18.9404 8 18.25V17.75C8 17.0596 7.44036 16.5 6.75 16.5H6" stroke="url(#gradient6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 13C4 7.5 7.5 4 12 4C16.5 4 20 7.5 20 13" stroke="url(#gradient6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 19.5V21C15 21.5523 14.5523 22 14 22H10C9.44772 22 9 21.5523 9 21V19.5" stroke="url(#gradient6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

export default function Features() {
  const sectionStyle: CSSProperties = {
    backgroundColor: '#000',
    padding: '4rem 1.5rem 8rem',
    position: 'relative',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    marginTop: '-1px'
  };

  const containerStyle: CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const headerStyle: CSSProperties = {
    textAlign: 'center',
    marginBottom: '5rem'
  };

  const titleSectionStyle: CSSProperties = {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 700,
    marginBottom: '1.5rem',
    fontFamily: 'var(--font-display)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    background: 'linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.7))',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    position: 'relative'
  };
  
  const colorShiftGlowStyle: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '0',
    width: '100%',
    height: '120%',
    background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.1), rgba(75, 159, 255, 0.1), rgba(124, 58, 237, 0.1))',
    backgroundSize: '200% 100%',
    transform: 'translateY(-50%)',
    filter: 'blur(40px)',
    borderRadius: '100%',
    zIndex: 0,
    opacity: 0.7,
    animation: 'shiftGradient 8s ease infinite'
  };

  const subtitleStyle: CSSProperties = {
    fontSize: 'clamp(1rem, 3vw, 1.25rem)',
    lineHeight: 1.6,
    color: 'rgba(255, 255, 255, 0.7)',
    maxWidth: '700px',
    margin: '0 auto',
    fontWeight: 300,
    position: 'relative',
    zIndex: 1
  };

  const subtitleAccentStyle: CSSProperties = {
    color: '#7c3aed',
    fontWeight: 500
  };

  const backgroundElementsStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    overflow: 'hidden'
  };

  const diagonalConnectorStyle: CSSProperties = {
    position: 'absolute',
    top: '-50px',
    left: 0,
    width: '100%',
    height: '100px',
    backgroundColor: '#000',
    transform: 'skewY(-1.5deg)',
    transformOrigin: 'top left',
    zIndex: 0
  };

  // Fixed background particles for consistent server/client rendering
  const backgroundParticles = [
    { width: 3.75, height: 1.22, top: 95.37, left: 48.45 },
    { width: 1.65, height: 2.05, top: 21.17, left: 15.31 },
    { width: 2.24, height: 2.77, top: 44.52, left: 26.86 },
    { width: 2.36, height: 1.82, top: 61.54, left: 33.47 },
    { width: 2.20, height: 2.20, top: 66.07, left: 90.36 },
    { width: 2.59, height: 2.76, top: 47.77, left: 84.07 },
    { width: 1.53, height: 2.90, top: 65.98, left: 64.96 },
    { width: 3.88, height: 1.92, top: 28.67, left: 47.20 },
    { width: 1.57, height: 3.19, top: 58.23, left: 6.81 },
    { width: 2.22, height: 2.29, top: 94.55, left: 55.80 },
    { width: 1.13, height: 3.36, top: 46.99, left: 84.72 },
    { width: 2.44, height: 3.53, top: 85.26, left: 54.89 },
    { width: 1.33, height: 3.71, top: 48.22, left: 62.83 },
    { width: 2.84, height: 3.58, top: 35.59, left: 45.87 },
    { width: 1.68, height: 2.02, top: 14.34, left: 60.77 }
  ];

  // Create a static features list with updated content
  const featuresList: Feature[] = [
    {
      title: "Generative AI Content Automation",
      description: "Supercharge your content marketing with cutting-edge generative AI. Effortlessly create AI avatars, social media updates, all while maintaining a consistent brand voice and personalization.",
      icon: "palette"
    },
    {
      title: "AI Powered Conversational Agent",
      description: "Provide round-the-clock customer engagement with advanced LLMs. Our voice AI agents seamlessly handle FAQs, assist customers in navigating products or services, and capture leads.",
      icon: "phone"
    },
    {
      title: "Real-Time Collaboration",
      description: "Streamlined workflows that enable teams to work together effectively from anywhere in the world.",
      icon: "users"
    },
    {
      title: "24/7 Expert Support",
      description: "Dedicated technical assistance from our team of specialists whenever you need it, day or night.",
      icon: "headset"
    }
  ];

  return (
    <section id="features" style={sectionStyle}>
      <div style={diagonalConnectorStyle}></div>
      
      {/* Background */}
      <div style={backgroundElementsStyle}>
        {/* Background gradient */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          background: 'radial-gradient(circle at 50% 100%, rgba(var(--primary-rgb), 0.05) 0%, transparent 70%)'
        }}></div>
        
        {/* Animated particles */}
        {backgroundParticles.map((particle, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: particle.width,
              height: particle.height,
              borderRadius: '50%',
              backgroundColor: 'rgba(var(--primary-rgb), 0.3)',
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              pointerEvents: 'none'
            }}
            animate={{
              y: [0, 10, 0, -10, 0],
            }}
            transition={{
              duration: 8 + (i % 4) * 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
      
      <div style={containerStyle}>
        <div style={headerStyle}>
          <motion.h2
            style={{ position: 'relative' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div style={colorShiftGlowStyle}></div>
            <span style={titleSectionStyle}>Our Advanced Features</span>
          </motion.h2>
          <motion.p
            style={subtitleStyle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Discover how our <span style={subtitleAccentStyle}>cutting-edge solutions</span> can transform your business with these powerful features designed for the modern enterprise.
          </motion.p>
        </div>
        
        {/* Features List */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {featuresList.map((feature, index) => (
            <FeatureItem
              key={feature.title}
              icon={featureIcons[feature.icon as keyof typeof featureIcons]}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradientShift {
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
        
        @keyframes shiftGradient {
          0% {
            background-position: 0% 50%;
            opacity: 0.5;
          }
          50% {
            background-position: 100% 50%;
            opacity: 0.8;
          }
          100% {
            background-position: 0% 50%;
            opacity: 0.5;
          }
        }
        
        /* Icon hover effect */
        .icon-glow {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        *:hover > .icon-glow {
          opacity: 0.7;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}