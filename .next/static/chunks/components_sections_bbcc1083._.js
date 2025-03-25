(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_sections_bbcc1083._.js", {

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
    var _s1 = __turbopack_context__.k.signature();
    // Initialize responsive state
    const [isLargeScreen, setIsLargeScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Move window checks to useEffect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_s1({
        "Hero.useEffect": ()=>{
            _s1();
            // Remove these lines if not used anywhere
            const [isLargeScreen, setIsLargeScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        }
    }["Hero.useEffect"], "1nZzQT4UnxQKeXjL4OhJ4146nOo="), [
        setIsLargeScreen
    ]); // Add 'setIsLargeScreen' if it's a dependency
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
        className: "jsx-a62041b82cf41749",
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
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: diagonalGradientStyle,
                className: "jsx-a62041b82cf41749"
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: gridOverlayStyle,
                className: "jsx-a62041b82cf41749"
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: glowEffectStyle,
                className: "jsx-a62041b82cf41749"
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: secondGlowEffectStyle,
                className: "jsx-a62041b82cf41749"
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: floatingElementsStyle,
                className: "jsx-a62041b82cf41749",
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
                        lineNumber: 300,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: containerStyle,
                className: "jsx-a62041b82cf41749",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: heroContentStyle,
                    className: "jsx-a62041b82cf41749",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: heroTextContainerStyle,
                        className: "jsx-a62041b82cf41749",
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
                                            lineNumber: 343,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "jsx-a62041b82cf41749"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 352,
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
                                            children: letter === " " ? "\u00A0" : letter
                                        }, `second_${index}`, false, {
                                            fileName: "[project]/components/sections/Hero.tsx",
                                            lineNumber: 361,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 330,
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
                                        className: "jsx-a62041b82cf41749",
                                        children: "cutting-edge solutions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 379,
                                        columnNumber: 52
                                    }, this),
                                    " designed to enhance operational efficiency and drive ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: secondaryHighlightStyle,
                                        className: "jsx-a62041b82cf41749",
                                        children: "growth"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 380,
                                        columnNumber: 42
                                    }, this),
                                    " in today's digital landscape."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 373,
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
                                                className: "jsx-a62041b82cf41749",
                                                children: "Explore Features"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Hero.tsx",
                                                lineNumber: 401,
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
                                                lineNumber: 402,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 390,
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
                                                className: "jsx-a62041b82cf41749",
                                                children: "Get Started"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Hero.tsx",
                                                lineNumber: 424,
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
                                                lineNumber: 425,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 328,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a62041b82cf41749",
                children: "@keyframes shimmer{0%{background-position:-200% 0}to{background-position:200% 0}}@keyframes gradientText{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Hero.tsx",
        lineNumber: 279,
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
"[project]/components/sections/Features.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Features)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
"use client";
;
;
;
;
const FeatureItem = ({ icon, title, description, index })=>{
    const featureBoxStyle = {
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
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    };
    const iconContainerStyle = {
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
    const iconGlowStyle = {
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
    const iconWrapperStyle = {
        position: 'relative',
        zIndex: 1
    };
    const contentStyle = {
        flex: 1
    };
    const tagStyle = {
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
    const titleStyle = {
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
    const descriptionStyle = {
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: 1.7,
        fontWeight: 300
    };
    const overlayStyle = {
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
    const highlightStyle = {
        color: index % 2 === 0 ? '#7c3aed' : '#4b9fff',
        fontWeight: 500
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.6,
            delay: index * 0.1
        },
        viewport: {
            once: true,
            amount: 0.3
        },
        whileHover: {
            y: -5,
            transition: {
                duration: 0.3
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            style: featureBoxStyle,
            whileHover: {
                borderColor: index % 2 === 0 ? '#7c3aed' : 'var(--primary)',
                boxShadow: `0 10px 30px rgba(${index % 2 === 0 ? '124, 58, 237' : 'var(--primary-rgb)'}, 0.15)`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: overlayStyle,
                    whileHover: {
                        opacity: 0.1
                    }
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: iconContainerStyle,
                    whileHover: {
                        borderColor: index % 2 === 0 ? '#7c3aed' : 'var(--primary)',
                        transform: 'rotate(5deg)',
                        boxShadow: `0 0 20px rgba(${index % 2 === 0 ? '124, 58, 237' : 'var(--primary-rgb)'}, 0.3)`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            style: iconGlowStyle,
                            whileHover: {
                                opacity: 0.8
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Features.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            style: iconWrapperStyle,
                            animate: {
                                scale: [
                                    1,
                                    1.1,
                                    1
                                ],
                                rotate: [
                                    0,
                                    index % 2 === 0 ? 5 : -5,
                                    0
                                ]
                            },
                            transition: {
                                duration: 3 + index,
                                repeat: Infinity,
                                ease: "easeInOut"
                            },
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Features.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: contentStyle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: tagStyle,
                            children: "FEATURE"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Features.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: titleStyle,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Features.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: descriptionStyle,
                            children: description.split(' ').map((word, i)=>i % 8 === index % 8 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: highlightStyle,
                                    children: [
                                        word,
                                        " "
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/sections/Features.tsx",
                                    lineNumber: 194,
                                    columnNumber: 37
                                }, this) : word + ' ')
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Features.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Features.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Features.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
};
_c = FeatureItem;
function Features() {
    const sectionStyle = {
        backgroundColor: '#000',
        padding: '4rem 1.5rem 8rem',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        marginTop: '-1px'
    };
    const containerStyle = {
        maxWidth: '1280px',
        margin: '0 auto'
    };
    const headerStyle = {
        textAlign: 'center',
        marginBottom: '5rem'
    };
    const titleSectionStyle = {
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
    const colorShiftGlowStyle = {
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
    const subtitleStyle = {
        fontSize: 'clamp(1rem, 3vw, 1.25rem)',
        lineHeight: 1.6,
        color: 'rgba(255, 255, 255, 0.7)',
        maxWidth: '700px',
        margin: '0 auto',
        fontWeight: 300,
        position: 'relative',
        zIndex: 1
    };
    const subtitleAccentStyle = {
        color: '#7c3aed',
        fontWeight: 500
    };
    const backgroundElementsStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        overflow: 'hidden'
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
    // Fixed background particles for consistent server/client rendering
    const backgroundParticles = [
        {
            width: 3.75,
            height: 1.22,
            top: 95.37,
            left: 48.45
        },
        {
            width: 1.65,
            height: 2.05,
            top: 21.17,
            left: 15.31
        },
        {
            width: 2.24,
            height: 2.77,
            top: 44.52,
            left: 26.86
        },
        {
            width: 2.36,
            height: 1.82,
            top: 61.54,
            left: 33.47
        },
        {
            width: 2.20,
            height: 2.20,
            top: 66.07,
            left: 90.36
        },
        {
            width: 2.59,
            height: 2.76,
            top: 47.77,
            left: 84.07
        },
        {
            width: 1.53,
            height: 2.90,
            top: 65.98,
            left: 64.96
        },
        {
            width: 3.88,
            height: 1.92,
            top: 28.67,
            left: 47.20
        },
        {
            width: 1.57,
            height: 3.19,
            top: 58.23,
            left: 6.81
        },
        {
            width: 2.22,
            height: 2.29,
            top: 94.55,
            left: 55.80
        },
        {
            width: 1.13,
            height: 3.36,
            top: 46.99,
            left: 84.72
        },
        {
            width: 2.44,
            height: 3.53,
            top: 85.26,
            left: 54.89
        },
        {
            width: 1.33,
            height: 3.71,
            top: 48.22,
            left: 62.83
        },
        {
            width: 2.84,
            height: 3.58,
            top: 35.59,
            left: 45.87
        },
        {
            width: 1.68,
            height: 2.02,
            top: 14.34,
            left: 60.77
        }
    ];
    // Create a static features list with updated content
    const featuresList = [
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
    // SVG icons for each feature - enhance with color gradients
    const featureIcons = {
        'palette': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
            size: 36
        }, void 0, false, {
            fileName: "[project]/components/sections/Features.tsx",
            lineNumber: 337,
            columnNumber: 7
        }, this),
        'phone': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
            size: 36
        }, void 0, false, {
            fileName: "[project]/components/sections/Features.tsx",
            lineNumber: 340,
            columnNumber: 7
        }, this),
        'puzzle-piece': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "gradient3",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "var(--primary)"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Features.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#4b9fff"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Features.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Features.tsx",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 344,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 7H9V12H4V7Z",
                    stroke: "url(#gradient3)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 350,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 7V3.54C9 3.21 9.21 3 9.54 3H13.5",
                    stroke: "url(#gradient3)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 351,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14.5 3C14.5 4.1 15.4 5 16.5 5C17.6 5 18.5 4.1 18.5 3",
                    stroke: "url(#gradient3)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 352,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 16.5C18.9 16.5 18 15.6 18 14.5C18 13.4 18.9 12.5 20 12.5",
                    stroke: "url(#gradient3)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 353,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 12.5H16.54C16.21 12.5 16 12.29 16 11.96V7.5",
                    stroke: "url(#gradient3)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 7.5H20V12",
                    stroke: "url(#gradient3)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 355,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11 16H15V20.5H11V16Z",
                    stroke: "url(#gradient3)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 356,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11 16V12.5H7V16",
                    stroke: "url(#gradient3)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Features.tsx",
            lineNumber: 343,
            columnNumber: 7
        }, this),
        'expand': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "gradient4",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "var(--primary)"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Features.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#4b9fff"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Features.tsx",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Features.tsx",
                        lineNumber: 363,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 362,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M15 3H21V9",
                    stroke: "url(#gradient4)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 21H3V15",
                    stroke: "url(#gradient4)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 369,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 3L14 10",
                    stroke: "url(#gradient4)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 370,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 21L10 14",
                    stroke: "url(#gradient4)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Features.tsx",
            lineNumber: 361,
            columnNumber: 7
        }, this),
        'users': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "gradient5",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "var(--primary)"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Features.tsx",
                                lineNumber: 378,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#4b9fff"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Features.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Features.tsx",
                        lineNumber: 377,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21",
                    stroke: "url(#gradient5)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 382,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",
                    stroke: "url(#gradient5)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13",
                    stroke: "url(#gradient5)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 384,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88",
                    stroke: "url(#gradient5)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 385,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Features.tsx",
            lineNumber: 375,
            columnNumber: 7
        }, this),
        'headset': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "36",
            height: "36",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "gradient6",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "var(--primary)"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Features.tsx",
                                lineNumber: 392,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#4b9fff"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Features.tsx",
                                lineNumber: 393,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Features.tsx",
                        lineNumber: 391,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 16.5H17.25C16.5596 16.5 16 17.0596 16 17.75V18.25C16 18.9404 16.5596 19.5 17.25 19.5H18.75C19.4404 19.5 20 18.9404 20 18.25V13",
                    stroke: "url(#gradient6)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 396,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 13V18.25C4 18.9404 4.55964 19.5 5.25 19.5H6.75C7.44036 19.5 8 18.9404 8 18.25V17.75C8 17.0596 7.44036 16.5 6.75 16.5H6",
                    stroke: "url(#gradient6)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 13C4 7.5 7.5 4 12 4C16.5 4 20 7.5 20 13",
                    stroke: "url(#gradient6)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M15 19.5V21C15 21.5523 14.5523 22 14 22H10C9.44772 22 9 21.5523 9 21V19.5",
                    stroke: "url(#gradient6)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Features.tsx",
                    lineNumber: 399,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Features.tsx",
            lineNumber: 389,
            columnNumber: 7
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "features",
        style: sectionStyle,
        className: "jsx-a7752b8a144c88cf",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: diagonalConnectorStyle,
                className: "jsx-a7752b8a144c88cf"
            }, void 0, false, {
                fileName: "[project]/components/sections/Features.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: backgroundElementsStyle,
                className: "jsx-a7752b8a144c88cf",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '50%',
                            background: 'radial-gradient(circle at 50% 100%, rgba(var(--primary-rgb), 0.05) 0%, transparent 70%)'
                        },
                        className: "jsx-a7752b8a144c88cf"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Features.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this),
                    backgroundParticles.map((particle, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            style: {
                                position: 'absolute',
                                width: particle.width,
                                height: particle.height,
                                borderRadius: '50%',
                                backgroundColor: 'rgba(var(--primary-rgb), 0.3)',
                                top: `${particle.top}%`,
                                left: `${particle.left}%`,
                                pointerEvents: 'none'
                            },
                            animate: {
                                y: [
                                    0,
                                    10,
                                    0,
                                    -10,
                                    0
                                ]
                            },
                            transition: {
                                duration: 8 + i % 4 * 2,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }
                        }, i, false, {
                            fileName: "[project]/components/sections/Features.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Features.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: containerStyle,
                className: "jsx-a7752b8a144c88cf",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: headerStyle,
                        className: "jsx-a7752b8a144c88cf",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                style: {
                                    position: 'relative'
                                },
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
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: colorShiftGlowStyle,
                                        className: "jsx-a7752b8a144c88cf"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Features.tsx",
                                        lineNumber: 455,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: titleSectionStyle,
                                        className: "jsx-a7752b8a144c88cf",
                                        children: "Our Advanced Features"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Features.tsx",
                                        lineNumber: 456,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Features.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                style: subtitleStyle,
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
                                children: [
                                    "Discover how our ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: subtitleAccentStyle,
                                        className: "jsx-a7752b8a144c88cf",
                                        children: "cutting-edge solutions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Features.tsx",
                                        lineNumber: 465,
                                        columnNumber: 30
                                    }, this),
                                    " can transform your business with these powerful features designed for the modern enterprise."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Features.tsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Features.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            zIndex: 1
                        },
                        className: "jsx-a7752b8a144c88cf",
                        children: featuresList.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                icon: featureIcons[feature.icon],
                                title: feature.title,
                                description: feature.description,
                                index: index
                            }, feature.title, false, {
                                fileName: "[project]/components/sections/Features.tsx",
                                lineNumber: 472,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Features.tsx",
                        lineNumber: 470,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Features.tsx",
                lineNumber: 446,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a7752b8a144c88cf",
                children: "@keyframes gradientShift{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}@keyframes shiftGradient{0%{opacity:.5;background-position:0%}50%{opacity:.8;background-position:100%}to{opacity:.5;background-position:0%}}.icon-glow{opacity:0;transition:opacity .3s}:hover>.icon-glow{opacity:.7;animation:2s infinite pulse}@keyframes pulse{0%{opacity:.5;transform:scale(.95)}50%{opacity:.8;transform:scale(1.05)}to{opacity:.5;transform:scale(.95)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Features.tsx",
        lineNumber: 405,
        columnNumber: 5
    }, this);
}
_c1 = Features;
var _c, _c1;
__turbopack_context__.k.register(_c, "FeatureItem");
__turbopack_context__.k.register(_c1, "Features");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/sections/WhyUs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>WhyUs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Define styles
const sectionStyle = {
    backgroundColor: "#000",
    padding: "4rem 1.5rem",
    position: "relative",
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    textAlign: "center"
};
const headingStyle = {
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
    position: "relative"
};
const subtitleStyle = {
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "rgba(255, 255, 255, 0.8)",
    margin: "0 auto 2rem auto",
    fontWeight: 300
};
const boxStyle = {
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
    minWidth: "250px"
};
const pointStyle = {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    textAlign: "center"
};
const hoverEffect = {
    whileHover: {
        scale: 1.05,
        boxShadow: "0 8px 40px rgba(255, 255, 255, 0.3)",
        borderColor: "#4b9fff"
    }
};
const subtitleAccentStyle = {
    color: "#7c3aed",
    fontWeight: 500
};
function WhyUs() {
    _s();
    const features = [
        {
            id: 1,
            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Identify Pain Points"
            }, void 0, false, {
                fileName: "[project]/components/sections/WhyUs.tsx",
                lineNumber: 88,
                columnNumber: 14
            }, this),
            description: "Uncover and fix inefficiencies that are holding you back, streamlining your path to growth.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                size: 50,
                color: "#4b9fff"
            }, void 0, false, {
                fileName: "[project]/components/sections/WhyUs.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this)
        },
        {
            id: 2,
            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "Eliminate Bottlenecks"
            }, void 0, false, {
                fileName: "[project]/components/sections/WhyUs.tsx",
                lineNumber: 95,
                columnNumber: 14
            }, this),
            description: "Streamline your workflows for smooth, efficient, and hassle-free operations.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                size: 50,
                color: "#4b9fff"
            }, void 0, false, {
                fileName: "[project]/components/sections/WhyUs.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this)
        },
        {
            id: 3,
            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: "High ROI & Scalability"
            }, void 0, false, {
                fileName: "[project]/components/sections/WhyUs.tsx",
                lineNumber: 102,
                columnNumber: 14
            }, this),
            description: "Grow confidently with flexible solutions that expand alongside your business.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                size: 50,
                color: "#4b9fff"
            }, void 0, false, {
                fileName: "[project]/components/sections/WhyUs.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this)
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhyUs.useEffect": ()=>{
            // Load the Calendly script
            const script = document.createElement("script");
            script.src = "https://assets.calendly.com/asset/production/embed.js";
            script.async = true;
            script.onload = ({
                "WhyUs.useEffect": ()=>{
                    if (window.Calendly) {
                        window.Calendly.initInlineWidgets();
                    }
                }
            })["WhyUs.useEffect"];
            document.body.appendChild(script);
            // Cleanup function to remove the script if the component unmounts
            return ({
                "WhyUs.useEffect": ()=>{
                    document.body.removeChild(script);
                }
            })["WhyUs.useEffect"];
        }
    }["WhyUs.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "why-us",
        style: sectionStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: headingStyle,
                children: "Why Clients Prefer Us"
            }, void 0, false, {
                fileName: "[project]/components/sections/WhyUs.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                style: subtitleStyle,
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
                children: [
                    "FNX Labs is Your Trusted Partner for",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: subtitleAccentStyle,
                        children: "AI-Powered Automation"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/WhyUs.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    ". Want to spend less time on administrative tasks and more time building your business? Here's how we deliver on that promise: Discover how our",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: subtitleAccentStyle,
                        children: "cutting-edge solutions"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/WhyUs.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    " can transform your business with these powerful features designed for the modern enterprise."
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/WhyUs.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap"
                },
                children: features.map((feature, index)=>{
                    console.log(`Rendering feature with key: ${feature.id}`);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: boxStyle,
                        ...hoverEffect,
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            delay: index * 0.1
                        },
                        viewport: {
                            once: true,
                            amount: 0.3
                        },
                        children: [
                            feature.icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: pointStyle,
                                children: feature.title
                            }, void 0, false, {
                                fileName: "[project]/components/sections/WhyUs.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: feature.description
                            }, void 0, false, {
                                fileName: "[project]/components/sections/WhyUs.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this)
                        ]
                    }, feature.id, true, {
                        fileName: "[project]/components/sections/WhyUs.tsx",
                        lineNumber: 157,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/sections/WhyUs.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "We craft a tailored action plan that fits your budget and needs—no guesswork, just solutions."
            }, void 0, false, {
                fileName: "[project]/components/sections/WhyUs.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/WhyUs.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(WhyUs, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = WhyUs;
var _c;
__turbopack_context__.k.register(_c, "WhyUs");
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
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CTA() {
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
        className: "jsx-dc15ad2912ea4e62",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: diagonalConnectorStyle,
                className: "jsx-dc15ad2912ea4e62"
            }, void 0, false, {
                fileName: "[project]/components/sections/CTA.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: backgroundElementsStyle,
                className: "jsx-dc15ad2912ea4e62",
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
                        className: "jsx-dc15ad2912ea4e62"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/CTA.tsx",
                        lineNumber: 108,
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
                            lineNumber: 120,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/CTA.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: containerStyle,
                className: "jsx-dc15ad2912ea4e62",
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
                            lineNumber: 153,
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
                            lineNumber: 163,
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
                                    className: "jsx-dc15ad2912ea4e62"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/CTA.tsx",
                                    lineNumber: 193,
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
                                    className: "jsx-dc15ad2912ea4e62"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/CTA.tsx",
                                    lineNumber: 204,
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
                                    className: "jsx-dc15ad2912ea4e62" + " " + "calendly-inline-widget"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/CTA.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalendlyScript, {}, void 0, false, {
                                    fileName: "[project]/components/sections/CTA.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/CTA.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/CTA.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/CTA.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "dc15ad2912ea4e62",
                children: "@keyframes gradientText{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}@keyframes gradientShift{0%{background-position:0%}50%{background-position:100%}to{background-position:0%}}.calendly-inline-widget{width:100%!important;min-height:780px!important;overflow:hidden!important}.calendly-inline-widget iframe{transform-origin:top;border-radius:12px;transform:scale(1.01);box-shadow:0 10px 30px #0000001a;background-color:#0000!important;width:100%!important;min-width:100%!important;height:780px!important;min-height:780px!important}.calendly-inline-widget iframe::-webkit-scrollbar{display:none}.calendly-inline-widget iframe{-ms-overflow-style:none;scrollbar-width:none}.calendly-overlay .calendly-popup{background-color:#000000e6!important;border-radius:16px!important;max-width:900px!important;box-shadow:0 25px 50px -12px #00000080!important}.calendly-overlay .calendly-popup .calendly-popup-content{background-color:#0000!important;border-radius:16px!important}.calendly-inline-widget iframe body{background-color:#0000!important}.calendly-inline-widget .calendar-wrapper,.calendly-inline-widget .calendar-body{margin:0!important;padding:0!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/CTA.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_c = CTA;
// Component to load Calendly script client-side only
function CalendlyScript() {
    _s();
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
                            "CalendlyScript.useEffect": ()=>{
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
_s(CalendlyScript, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c1 = CalendlyScript;
var _c, _c1;
__turbopack_context__.k.register(_c, "CTA");
__turbopack_context__.k.register(_c1, "CalendlyScript");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_sections_bbcc1083._.js.map