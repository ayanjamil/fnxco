"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navigationLinks } from "@/data/navigationLinks";
import { Menu, X } from "lucide-react";
import { CSSProperties } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle: CSSProperties = {
    width: "100%",
    height: "60px",
    backgroundColor: scrolled ? "rgba(0, 0, 0, 0.97)" : "transparent",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    padding: "0 1rem",
    borderBottom: `1px solid ${
      scrolled ? "rgba(255, 255, 255, 0.05)" : "transparent"
    }`,
    display: "flex",
    alignItems: "center",
    zIndex: 100,
    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  const containerStyle: CSSProperties = {
    maxWidth: "1280px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoTextStyle: CSSProperties = {
    fontSize: "1.25rem",
    fontWeight: 800,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    fontFamily: "var(--font-display)",
    position: "relative",
    color: "#fff",
    paddingBottom: "4px",
    display: "inline-block",
    whiteSpace: "nowrap",
  };

  const logoUnderlineStyle: CSSProperties = {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, #7c3aed, #4b9fff)",
    borderRadius: "2px",
  };

  const logoHighlightStyle: CSSProperties = {
    color: "#7c3aed",
    fontWeight: 900,
  };

  const desktopNavStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "2.5rem",
  };

  const navLinkStyle: CSSProperties = {
    color: "var(--foreground)",
    transition: "color 0.3s, transform 0.3s",
    textDecoration: "none",
    fontSize: "0.85rem",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    fontWeight: "300",
    position: "relative",
    padding: "0.5rem 0",
    fontFamily: "var(--font-alt)",
  };

  const navLinkUnderlineStyle: CSSProperties = {
    content: '""',
    position: "absolute",
    bottom: "-2px",
    left: "50%",
    width: "0",
    height: "1px",
    background: "linear-gradient(90deg, #7c3aed, #4b9fff)",
    transition: "width 0.3s ease, left 0.3s ease",
    borderRadius: "2px",
  };

  const primaryButtonStyle: CSSProperties = {
    padding: "0.5rem 1.25rem",
    backgroundColor: "transparent",
    color: scrolled ? "#7c3aed" : "var(--primary)",
    border: `1px solid ${scrolled ? "#7c3aed" : "var(--primary)"}`,
    fontWeight: "300",
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: "0.95rem",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    fontFamily: "var(--font-alt)",
    position: "relative",
    overflow: "hidden",
  };

  const buttonHoverBgStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(75, 159, 255, 0.1))",
    opacity: 0,
    transition: "opacity 0.3s ease",
    zIndex: -1,
  };

  const arrowStyle: CSSProperties = {
    marginLeft: "0.5rem",
  };

  const mobileButtonStyle: CSSProperties = {
    color: "var(--foreground)",
    background: "none",
    border: "none",
    padding: "0.5rem",
    cursor: "pointer",
    display: isMobile ? "block" : "none",
  };

  const mobileMenuStyle: CSSProperties = {
    position: "absolute",
    top: "var(--nav-height)",
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.97)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    zIndex: 100,
  };

  const mobileNavLinksStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  };

  const mobileLinkStyle: CSSProperties = {
    color: "var(--foreground)",
    padding: "1rem 0",
    margin: 0,
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    textDecoration: "none",
    fontSize: "0.9rem",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: "var(--font-alt)",
  };

  const mobileButtonFullStyle: CSSProperties = {
    padding: "1rem 0",
    marginTop: "1rem",
    backgroundColor: "transparent",
    color: "var(--primary)",
    border: "1px solid var(--primary)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "0.85rem",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    fontWeight: "300",
    textDecoration: "none",
    fontFamily: "var(--font-alt)",
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontWeight: "bold",
            textDecoration: "none",
            position: "relative",
            zIndex: 10,
          }}
        >
          <span style={logoTextStyle}>
            FnX<span style={logoHighlightStyle}>Labs</span>
            <motion.div
              style={logoUnderlineStyle}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </span>
        </Link>

        <div className="desktop-nav" style={desktopNavStyle}>
          {navigationLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
            >
              <Link
                href={link.path}
                style={navLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--primary)";
                  const underline = e.currentTarget.querySelector(
                    ".nav-link-underline"
                  ) as HTMLElement;
                  if (underline) {
                    underline.style.width = "100%";
                    underline.style.left = "0";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--foreground)";
                  const underline = e.currentTarget.querySelector(
                    ".nav-link-underline"
                  ) as HTMLElement;
                  if (underline) {
                    underline.style.width = "0";
                    underline.style.left = "50%";
                  }
                }}
              >
                {link.name}
                <div className="nav-link-underline" style={navLinkUnderlineStyle}></div>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * (navigationLinks.length + 1) }}
          >
            <Link
              href="#contact"
              style={primaryButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(var(--primary-rgb), 0.15)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "#7c3aed";
                e.currentTarget.style.color = "#7c3aed";
                const bg = e.currentTarget.querySelector(
                  ".button-hover-bg"
                ) as HTMLElement;
                if (bg) bg.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = scrolled
                  ? "#7c3aed"
                  : "var(--primary)";
                e.currentTarget.style.color = scrolled
                  ? "#7c3aed"
                  : "var(--primary)";
                const bg = e.currentTarget.querySelector(
                  ".button-hover-bg"
                ) as HTMLElement;
                if (bg) bg.style.opacity = "0";
              }}
            >
              Get Started <span style={arrowStyle}>→</span>
              <div className="button-hover-bg" style={buttonHoverBgStyle}></div>
            </Link>
          </motion.div>
        </div>

        <motion.button
          style={mobileButtonStyle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {isMenuOpen && (
        <motion.div
          style={mobileMenuStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div style={mobileNavLinksStyle}>
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                <Link
                  href={link.path}
                  style={mobileLinkStyle}
                  onClick={() => setIsMenuOpen(false)}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link
                href="/#contact"
                style={mobileButtonFullStyle}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
                <span style={arrowStyle}>→</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}

      <style jsx global>{`
        @keyframes gradient {
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
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
        }
        @media (min-width: 768px) {
          nav {
            padding: 0 1.5rem;
          }
        }
      `}</style>
    </nav>
  );
}
