(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_sections_ca81204f._.js", {

"[project]/components/sections/Hero.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Hero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Hero() {
    _s();
    // Initialize responsive state
    const [isLargeScreen, setIsLargeScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Move window checks to useEffect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const handleResize = {
                "Hero.useEffect.handleResize": ()=>{
                    setIsLargeScreen(window.innerWidth >= 1024);
                }
            }["Hero.useEffect.handleResize"];
            // Set initial value
            handleResize();
            // Add event listener
            window.addEventListener('resize', handleResize);
            // Clean up
            return ({
                "Hero.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    // Animation variants
    const headingVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05
            }
        }
    };
    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4
            }
        }
    };
    // Split the hero title into arrays for letter-by-letter animation
    const heroTitle = "Smarter Systems,".split("");
    const secondLine = "Stronger Businesses".split("");
    // Styles
    const primaryButtonStyle = {
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
    const outlineButtonStyle = {
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
    const buttonHoverGlowStyle = {
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
    const heroStyle = {
        backgroundColor: '#000',
        minHeight: '80vh',
        padding: '7rem 1.5rem 2rem',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    };
    // Interactive floating elements
    const floatingElementsStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0
    };
    // More engaging background with animated gradients
    const backgroundGradientStyle = {
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
    const diagonalGradientStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, transparent 50%, rgba(75, 159, 255, 0.2) 100%)',
        zIndex: 0
    };
    const glowEffectStyle = {
        position: 'absolute',
        top: '30%',
        left: '10%',
        width: '50%',
        height: '40%',
        background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0
    };
    const secondGlowEffectStyle = {
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '40%',
        height: '30%',
        background: 'radial-gradient(circle at center, rgba(75, 159, 255, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0
    };
    const containerStyle = {
        maxWidth: '1280px',
        width: '100%',
        margin: '0 auto'
    };
    const heroContentStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: '3rem',
        alignItems: 'center'
    };
    const heroTextContainerStyle = {
        gridColumn: '1 / -1'
    };
    // Enhanced gradient text style
    const gradientTextStyle = {
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
    const shimmerStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 2s infinite',
        zIndex: 1,
        pointerEvents: 'none'
    };
    const headingOneStyle = {
        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
        lineHeight: 1.1,
        margin: '0 0 2rem 0',
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        color: 'rgba(255, 255, 255, 0.9)'
    };
    const headingAccentStyle = {
        color: '#4b9fff',
        textShadow: '0 0 20px rgba(75, 159, 255, 0.3)'
    };
    const secondLineStyle = {
        color: 'rgba(255, 255, 255, 0.95)',
        fontWeight: 700
    };
    const paragraphStyle = {
        fontSize: 'clamp(1rem, 4vw, 1.25rem)',
        lineHeight: 1.6,
        marginBottom: '2.5rem',
        color: 'rgba(255, 255, 255, 0.7)',
        maxWidth: '700px',
        fontWeight: 300
    };
    const highlightedTextStyle = {
        color: '#7c3aed',
        fontWeight: 500
    };
    const secondaryHighlightStyle = {
        color: '#4b9fff',
        fontWeight: 400
    };
    const buttonGroupStyle = {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
    };
    // Create a fixed set of particles with predefined positions
    const particles = [
        {
            width: 20.06,
            height: 22.08,
            top: 98.35,
            left: 96.49
        },
        {
            width: 13.57,
            height: 23.53,
            top: 94.90,
            left: 71.40
        },
        {
            width: 12.17,
            height: 24.09,
            top: 83.20,
            left: 73.30
        },
        {
            width: 19.68,
            height: 22.48,
            top: 66.21,
            left: 86.83
        },
        {
            width: 20.08,
            height: 20.27,
            top: 38.95,
            left: 14.94
        },
        {
            width: 23.33,
            height: 21.19,
            top: 47.32,
            left: 34.79
        },
        {
            width: 25.80,
            height: 29.62,
            top: 7.25,
            left: 47.57
        },
        {
            width: 25.03,
            height: 23.92,
            top: 92.55,
            left: 71.27
        },
        {
            width: 23.84,
            height: 21.61,
            top: 9.79,
            left: 56.68
        },
        {
            width: 13.16,
            height: 23.92,
            top: 56.02,
            left: 0.39
        }
    ];
    const gridOverlayStyle = {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: heroStyle,
        className: "jsx-28efe89bb51e8f72",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: backgroundGradientStyle,
                animate: {
                    opacity: [
                        0.9,
                        1,
                        0.9
                    ]
                },
                transition: {
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: diagonalGradientStyle,
                className: "jsx-28efe89bb51e8f72"
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: gridOverlayStyle,
                className: "jsx-28efe89bb51e8f72"
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: glowEffectStyle,
                className: "jsx-28efe89bb51e8f72"
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 313,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: secondGlowEffectStyle,
                className: "jsx-28efe89bb51e8f72"
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: floatingElementsStyle,
                className: "jsx-28efe89bb51e8f72",
                children: particles.map((particle, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            position: 'absolute',
                            width: particle.width,
                            height: particle.height,
                            borderRadius: '50%',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            background: 'rgba(var(--primary-rgb), 0.05)',
                            top: `${particle.top}%`,
                            left: `${particle.left}%`,
                            pointerEvents: 'none'
                        },
                        animate: {
                            y: [
                                Math.random() * 10,
                                Math.random() * -10
                            ],
                            x: [
                                Math.random() * 10,
                                Math.random() * -10
                            ]
                        },
                        transition: {
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut'
                        }
                    }, i, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: containerStyle,
                className: "jsx-28efe89bb51e8f72",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: heroContentStyle,
                    className: "jsx-28efe89bb51e8f72",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: heroTextContainerStyle,
                        className: "jsx-28efe89bb51e8f72",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                style: headingOneStyle,
                                variants: headingVariants,
                                initial: "hidden",
                                animate: "visible",
                                children: [
                                    heroTitle.map((letter, index)=>{
                                        // Apply different styles to specific letters
                                        let letterStyle = {};
                                        if (index === 0) letterStyle = headingAccentStyle;
                                        if (letter === "S" && index > 0) letterStyle = {
                                            color: '#7c3aed'
                                        };
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            variants: letterVariants,
                                            style: letterStyle,
                                            children: letter === " " ? "\u00A0" : letter
                                        }, index, false, {
                                            fileName: "[project]/components/sections/Hero.tsx",
                                            lineNumber: 362,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "jsx-28efe89bb51e8f72"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this),
                                    secondLine.map((letter, index)=>{
                                        // Apply different styles to specific letters
                                        let letterStyle = {};
                                        if (index === 0) letterStyle = gradientTextStyle;
                                        else if (letter === "B") letterStyle = {
                                            color: '#7c3aed'
                                        };
                                        else letterStyle = secondLineStyle;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            variants: letterVariants,
                                            style: letterStyle,
                                            children: [
                                                letter === " " ? "\u00A0" : letter,
                                                index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: shimmerStyle,
                                                    className: "jsx-28efe89bb51e8f72"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/Hero.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, `second_${index}`, true, {
                                            fileName: "[project]/components/sections/Hero.tsx",
                                            lineNumber: 380,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                style: paragraphStyle,
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.4
                                },
                                children: [
                                    "Revolutionize your business with our ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: highlightedTextStyle,
                                        className: "jsx-28efe89bb51e8f72",
                                        children: "cutting-edge solutions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 398,
                                        columnNumber: 52
                                    }, this),
                                    " designed to enhance operational efficiency and drive ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: secondaryHighlightStyle,
                                        className: "jsx-28efe89bb51e8f72",
                                        children: "growth"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 399,
                                        columnNumber: 56
                                    }, this),
                                    " in today's digital landscape."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 392,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                style: buttonGroupStyle,
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        href: "#features",
                                        style: primaryButtonStyle,
                                        whileHover: {
                                            scale: 1.05,
                                            boxShadow: '0 0 25px rgba(75, 159, 255, 0.5)',
                                            borderColor: '#7c3aed',
                                            color: '#ffffff'
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    position: 'relative',
                                                    zIndex: 2
                                                },
                                                className: "jsx-28efe89bb51e8f72",
                                                children: "Explore Features"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Hero.tsx",
                                                lineNumber: 419,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                style: buttonHoverGlowStyle,
                                                initial: {
                                                    opacity: 0
                                                },
                                                whileHover: {
                                                    opacity: 1,
                                                    background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(75, 159, 255, 0.8))'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Hero.tsx",
                                                lineNumber: 420,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        href: "#contact",
                                        style: outlineButtonStyle,
                                        whileHover: {
                                            scale: 1.05,
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            borderColor: 'rgba(124, 58, 237, 0.8)',
                                            color: '#7c3aed',
                                            boxShadow: '0 0 15px rgba(124, 58, 237, 0.3)'
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    position: 'relative',
                                                    zIndex: 2
                                                },
                                                className: "jsx-28efe89bb51e8f72",
                                                children: "Get Started"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Hero.tsx",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                style: {
                                                    ...buttonHoverGlowStyle,
                                                    background: 'rgba(255, 255, 255, 0.03)'
                                                },
                                                initial: {
                                                    height: '0%'
                                                },
                                                whileHover: {
                                                    height: '100%'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Hero.tsx",
                                                lineNumber: 443,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 430,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 348,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 347,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "28efe89bb51e8f72",
                children: "@keyframes shimmer{0%{background-position:-200% 0}to{background-position:200% 0}}@keyframes gradientText{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Hero.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
_s(Hero, "wPZYqC6UUPv5twGNVUdFoPVsF/c=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/sections/Impact.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Impact)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Impact() {
    const sectionStyle = {
        backgroundColor: '#000',
        color: '#fff',
        padding: '4rem 1.5rem',
        textAlign: 'center'
    };
    const headingStyle = {
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '2rem'
    };
    const advantageStyle = {
        marginBottom: '2rem'
    };
    const pointStyle = {
        fontSize: '1.25rem',
        marginBottom: '1rem'
    };
    const whyUsStyle = {
        marginTop: '4rem'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: sectionStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: headingStyle,
                children: "Our Advantage"
            }, void 0, false, {
                fileName: "[project]/components/sections/Impact.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: advantageStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: pointStyle,
                        children: "Generative AI Content Automation"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Impact.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Supercharge your content marketing with cutting-edge generative AI. Effortlessly create AI avatars and social media updates while maintaining a consistent brand voice and personalization."
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Impact.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: pointStyle,
                        children: "AI Powered Conversational Agent"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Impact.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Provide round-the-clock customer engagement with advanced LLMs. Our voice AI agents seamlessly handle FAQs, assist customers in navigating products or services, and capture leads."
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Impact.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: pointStyle,
                        children: "Real-Time Collaboration"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Impact.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "24/7 support."
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Impact.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Impact.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: headingStyle,
                children: "Why Us"
            }, void 0, false, {
                fileName: "[project]/components/sections/Impact.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: pointStyle,
                children: "WHY CLIENTS PREFER US"
            }, void 0, false, {
                fileName: "[project]/components/sections/Impact.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: pointStyle,
                children: "FNX Labs is Your Trusted Partner for AI-Powered Automation. Want to spend less time on administrative tasks and more time building your business? Here's how we deliver on that promise:"
            }, void 0, false, {
                fileName: "[project]/components/sections/Impact.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    textAlign: 'left',
                    margin: '0 auto',
                    maxWidth: '600px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Identify Pain Points:"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Impact.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            " Uncover and fix inefficiencies that are holding you back, streamlining your path to growth."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Impact.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Eliminate Bottlenecks:"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Impact.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            " Streamline your workflows for smooth, efficient, and hassle-free operations."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Impact.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "High ROI & Scalability:"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Impact.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            " Grow confidently with flexible solutions that expand alongside your business."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Impact.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Impact.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: pointStyle,
                children: "We craft a tailored action plan that fits your budget and needs—no guesswork, just solutions."
            }, void 0, false, {
                fileName: "[project]/components/sections/Impact.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Impact.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = Impact;
var _c;
__turbopack_context__.k.register(_c, "Impact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/sections/CTA.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CTA)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function CTA() {
    _s();
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormState((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formState);
        alert('Thank you for your message. We will be in touch shortly.');
    };
    const sectionStyle = {
        backgroundColor: '#000',
        padding: '8rem 1.5rem',
        position: 'relative',
        marginTop: '-1px',
        overflow: 'hidden'
    };
    const containerStyle = {
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
    };
    const contentStyle = {
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
    };
    const titleStyle = {
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
        animation: 'gradientText 6s ease infinite'
    };
    const descriptionStyle = {
        fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
        lineHeight: 1.6,
        marginBottom: '3rem',
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: 300
    };
    const primaryButtonStyle = {
        padding: '1rem 2.5rem',
        background: 'linear-gradient(45deg, var(--primary), #4b9fff)',
        backgroundSize: '200% 200%',
        color: '#000',
        fontWeight: '500',
        border: 'none',
        borderRadius: '4px',
        display: 'inline-block',
        textDecoration: 'none',
        fontSize: '1rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s',
        zIndex: 1,
        animation: 'gradientShift 6s ease infinite'
    };
    const backgroundElementsStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
    };
    const diagonalConnectorStyle = {
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
    // Fixed particles for consistent rendering between server and client
    const ctaParticles = [
        {
            width: 3.80,
            height: 3.75,
            top: 22.08,
            left: 9.56
        },
        {
            width: 2.15,
            height: 4.59,
            top: 47.68,
            left: 41.78
        },
        {
            width: 3.41,
            height: 3.59,
            top: 36.08,
            left: 2.24
        },
        {
            width: 3.72,
            height: 5.98,
            top: 64.63,
            left: 39.96
        },
        {
            width: 2.11,
            height: 4.93,
            top: 37.97,
            left: 20.89
        },
        {
            width: 3.06,
            height: 3.94,
            top: 85.71,
            left: 31.85
        },
        {
            width: 3.39,
            height: 5.28,
            top: 27.39,
            left: 25.91
        },
        {
            width: 4.17,
            height: 2.53,
            top: 87.16,
            left: 72.08
        },
        {
            width: 3.46,
            height: 4.69,
            top: 73.56,
            left: 88.07
        },
        {
            width: 5.00,
            height: 3.02,
            top: 16.11,
            left: 13.60
        },
        {
            width: 2.99,
            height: 3.57,
            top: 43.56,
            left: 1.93
        },
        {
            width: 2.54,
            height: 5.52,
            top: 93.77,
            left: 70.96
        },
        {
            width: 3.54,
            height: 2.57,
            top: 34.26,
            left: 54.65
        },
        {
            width: 3.88,
            height: 2.38,
            top: 79.33,
            left: 62.10
        },
        {
            width: 5.92,
            height: 4.21,
            top: 11.02,
            left: 77.86
        },
        {
            width: 2.60,
            height: 2.49,
            top: 64.66,
            left: 85.22
        },
        {
            width: 3.76,
            height: 3.49,
            top: 2.19,
            left: 67.28
        },
        {
            width: 5.22,
            height: 5.97,
            top: 0.50,
            left: 25.37
        },
        {
            width: 4.65,
            height: 5.05,
            top: 36.26,
            left: 1.82
        },
        {
            width: 3.29,
            height: 3.44,
            top: 76.29,
            left: 23.08
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        style: sectionStyle,
        className: "jsx-921dc5ec732a2439",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: diagonalConnectorStyle,
                className: "jsx-921dc5ec732a2439"
            }, void 0, false, {
                fileName: "[project]/components/sections/CTA.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: backgroundElementsStyle,
                className: "jsx-921dc5ec732a2439",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '50%',
                            background: 'radial-gradient(circle at 50% 100%, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)',
                            zIndex: 0
                        },
                        className: "jsx-921dc5ec732a2439"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CTA.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    ctaParticles.map((particle, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            style: {
                                position: 'absolute',
                                width: particle.width,
                                height: particle.height,
                                borderRadius: '50%',
                                background: 'rgba(var(--primary-rgb), 0.2)',
                                top: `${particle.top}%`,
                                left: `${particle.left}%`,
                                zIndex: 0
                            },
                            animate: {
                                y: [
                                    0,
                                    15,
                                    0,
                                    -15,
                                    0
                                ],
                                opacity: [
                                    0.2,
                                    0.5,
                                    0.2
                                ]
                            },
                            transition: {
                                duration: 8 + i % 5 * 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }
                        }, i, false, {
                            fileName: "[project]/components/sections/CTA.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/CTA.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: containerStyle,
                className: "jsx-921dc5ec732a2439",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: {
                        ...contentStyle,
                        maxWidth: '1000px'
                    },
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    viewport: {
                        once: true,
                        amount: 0.3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                            style: titleStyle,
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            viewport: {
                                once: true,
                                amount: 0.3
                            },
                            children: "Schedule a Consultation"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/CTA.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            style: descriptionStyle,
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.2
                            },
                            viewport: {
                                once: true,
                                amount: 0.3
                            },
                            children: "Book a 30-minute call with our team to discuss how our solutions can transform your business"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/CTA.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.3
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            style: {
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
                                margin: '2rem auto 0'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        top: '-50px',
                                        right: '-50px',
                                        width: '200px',
                                        height: '200px',
                                        borderRadius: '50%',
                                        background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.2) 0%, transparent 70%)',
                                        zIndex: 0
                                    },
                                    className: "jsx-921dc5ec732a2439"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/CTA.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        bottom: '-30px',
                                        left: '-30px',
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '50%',
                                        background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%)',
                                        zIndex: 0
                                    },
                                    className: "jsx-921dc5ec732a2439"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/CTA.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-url": "https://calendly.com/nishit-findingniche/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=6366f1&hide_event_type_details=1",
                                    style: {
                                        width: '100%',
                                        height: '780px',
                                        position: 'relative',
                                        zIndex: 1
                                    },
                                    className: "jsx-921dc5ec732a2439" + " " + "calendly-inline-widget"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/CTA.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendlyScript, {}, void 0, false, {
                                    fileName: "[project]/components/sections/CTA.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/CTA.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/CTA.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/CTA.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "921dc5ec732a2439",
                children: "@keyframes gradientText{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}@keyframes gradientShift{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}.calendly-inline-widget{width:100%!important;min-height:780px!important;overflow:hidden!important}.calendly-inline-widget iframe{transform-origin:top;border-radius:12px;transform:scale(1.01);box-shadow:0 10px 30px #0000001a;background-color:#0000!important;width:100%!important;min-width:100%!important;height:780px!important;min-height:780px!important}.calendly-inline-widget iframe::-webkit-scrollbar{display:none}.calendly-inline-widget iframe{-ms-overflow-style:none;scrollbar-width:none}.calendly-overlay .calendly-popup{background-color:#000000e6!important;border-radius:16px!important;max-width:900px!important;box-shadow:0 25px 50px -12px #00000080!important}.calendly-overlay .calendly-popup .calendly-popup-content{background-color:#0000!important;border-radius:16px!important}.calendly-inline-widget iframe body{background-color:#0000!important}.calendly-inline-widget .calendar-wrapper,.calendly-inline-widget .calendar-body{margin:0!important;padding:0!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/CTA.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(CTA, "sfcT2UnTfLeBN1w8RwbVRH8Mr14=");
_c = CTA;
// Component to load Calendly script client-side only
function CalendlyScript() {
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CalendlyScript.useEffect": ()=>{
            // Create and add the script tag
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            // When script loads, initialize with custom settings
            script.onload = ({
                "CalendlyScript.useEffect": ()=>{
                    const win = window;
                    if (win.Calendly) {
                        // Initialize widgets
                        win.Calendly.initInlineWidgets();
                        // Apply custom settings
                        try {
                            win.Calendly.customizeSettings({
                                hideEventTypeDetails: true,
                                hideLandingPageDetails: false,
                                primaryColor: '6366f1',
                                textColor: 'ffffff',
                                backgroundColor: '000000'
                            });
                        } catch (e) {
                            console.log('Calendly customization error:', e);
                        }
                        // Add mutation observer to remove scrollbars from Calendly iframe when it loads
                        const observer = new MutationObserver({
                            "CalendlyScript.useEffect": (mutations)=>{
                                const calendlyIframe = document.querySelector('.calendly-inline-widget iframe');
                                if (calendlyIframe) {
                                    // Apply additional styles to iframe content when it loads
                                    calendlyIframe.addEventListener('load', {
                                        "CalendlyScript.useEffect": ()=>{
                                            try {
                                                const iframeDoc = calendlyIframe.contentDocument;
                                                if (iframeDoc) {
                                                    // Create a style element in the iframe
                                                    const style = iframeDoc.createElement('style');
                                                    style.textContent = `
                    body, html { overflow: hidden !important; height: 100% !important; }
                    .calendar-wrapper { padding: 0 !important; }
                    .main { background-color: transparent !important; }
                  `;
                                                    iframeDoc.head.appendChild(style);
                                                }
                                            } catch (e) {
                                                // Cross-origin errors may occur, which is fine
                                                console.log('Could not inject styles into iframe:', e);
                                            }
                                        }
                                    }["CalendlyScript.useEffect"]);
                                    // Disconnect once we find the iframe
                                    observer.disconnect();
                                }
                            }
                        }["CalendlyScript.useEffect"]);
                        // Start observing
                        observer.observe(document.body, {
                            childList: true,
                            subtree: true
                        });
                    }
                }
            })["CalendlyScript.useEffect"];
            document.body.appendChild(script);
            // Clean up on unmount
            return ({
                "CalendlyScript.useEffect": ()=>{
                    document.body.removeChild(script);
                    // Remove any observer
                    const calendlyIframe = document.querySelector('.calendly-inline-widget iframe');
                    if (calendlyIframe) {
                        calendlyIframe.remove();
                    }
                }
            })["CalendlyScript.useEffect"];
        }
    }["CalendlyScript.useEffect"], []);
    return null;
}
_s1(CalendlyScript, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c1 = CalendlyScript;
var _c, _c1;
__turbopack_context__.k.register(_c, "CTA");
__turbopack_context__.k.register(_c1, "CalendlyScript");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_sections_ca81204f._.js.map