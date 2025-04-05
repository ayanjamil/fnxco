"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navigationLinks } from "@/data/navigationLinks";
import { Menu, X } from "lucide-react";
import { CSSProperties } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const navStyle: CSSProperties = {
    width: "100%",
    height: "var(--nav-height)",
    backgroundColor: scrolled ? "rgba(0, 0, 0, 0.97)" : "transparent",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    padding: "0 1.5rem",
    borderBottom: `1px solid ${scrolled ? "rgba(255, 255, 255, 0.05)" : "transparent"}`,
    display: "flex",
    alignItems: "center",
    zIndex: 1000,
    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  const containerStyle: CSSProperties = {
    maxWidth: "1280px",
    width: "100%",
    margin: "0 auto",
    paddingInline: "4rem",
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
    fontSize: "0.85rem",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    fontFamily: "var(--font-alt)",
    position: "relative",
    overflow: "hidden",
  };

  const arrowStyle: CSSProperties = {
    marginLeft: "0.5rem",
  };

  return (
    <div className="mx-4 bg-red-900">
      <nav style={navStyle} >
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

          {/* Desktop Navigation */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
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
                      const underline = e.currentTarget.querySelector(".nav-link-underline") as HTMLElement;
                      if (underline) {
                        underline.style.width = "100%";
                        underline.style.left = "0";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--foreground)";
                      const underline = e.currentTarget.querySelector(".nav-link-underline") as HTMLElement;
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

              <Link href="#contact" style={primaryButtonStyle}>
                Get Started <span style={arrowStyle}>→</span>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                zIndex: 1001,
              }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="mx-4">
            <motion.div
              style={{
                position: "absolute",
                top: "var(--nav-height)",
                left: 0,
                right: 0,
                backgroundColor: "rgba(0,0,0,0.95)",
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                zIndex: 999,
                gap: "1rem",
                transition: "all 0.3s ease",
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "1rem",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    paddingBottom: "0.75rem",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                style={{
                  marginTop: "1rem",
                  padding: "0.75rem",
                  textAlign: "center",
                  color: "#7c3aed",
                  border: "1px solid #7c3aed",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </motion.div>

          </div>

        )}
      </nav>

    </div>

  );
}
