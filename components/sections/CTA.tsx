// "use client";


// import { motion } from 'framer-motion';
// import { CSSProperties,  useEffect } from 'react';

// export default function CTA() {


 

//   const sectionStyle: CSSProperties = {
//     backgroundColor: '#000',
//     padding: '8rem 1.5rem',
//     position: 'relative',
//     marginTop: '-1px',
//     overflow: 'hidden'
//   };

//   const containerStyle: CSSProperties = {
//     maxWidth: '1280px',
//     margin: '0 auto',
//     position: 'relative',
//     zIndex: 2
//   };

//   const contentStyle: CSSProperties = {
//     textAlign: 'center',
//     maxWidth: '800px',
//     margin: '0 auto'
//   };

//   const titleStyle: CSSProperties = {
//     fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
//     fontWeight: 700,
//     marginBottom: '1.5rem',
//     fontFamily: 'var(--font-display)',
//     letterSpacing: '0.02em',
//     background: 'linear-gradient(45deg, var(--primary), #fff)',
//     backgroundSize: '200% 200%',
//     backgroundClip: 'text',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     animation: 'gradientText 6s ease infinite'
//   };

//   const descriptionStyle: CSSProperties = {
//     fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
//     lineHeight: 1.6,
//     marginBottom: '3rem',
//     color: 'rgba(255, 255, 255, 0.8)',
//     fontWeight: 300
//   };

 

//   const backgroundElementsStyle: CSSProperties = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 0
//   };

//   const diagonalConnectorStyle: CSSProperties = {
//     position: 'absolute',
//     top: '-50px',
//     left: 0,
//     width: '100%',
//     height: '100px',
//     backgroundColor: '#000',
//     transform: 'skewY(-1.5deg)',
//     transformOrigin: 'top left',
//     zIndex: 0
//   };

//   // Fixed particles for consistent rendering between server and client
//   const ctaParticles = [
//     { width: 3.80, height: 3.75, top: 22.08, left: 9.56 },
//     { width: 2.15, height: 4.59, top: 47.68, left: 41.78 },
//     { width: 3.41, height: 3.59, top: 36.08, left: 2.24 },
//     { width: 3.72, height: 5.98, top: 64.63, left: 39.96 },
//     { width: 2.11, height: 4.93, top: 37.97, left: 20.89 },
//     { width: 3.06, height: 3.94, top: 85.71, left: 31.85 },
//     { width: 3.39, height: 5.28, top: 27.39, left: 25.91 },
//     { width: 4.17, height: 2.53, top: 87.16, left: 72.08 },
//     { width: 3.46, height: 4.69, top: 73.56, left: 88.07 },
//     { width: 5.00, height: 3.02, top: 16.11, left: 13.60 },
//     { width: 2.99, height: 3.57, top: 43.56, left: 1.93 },
//     { width: 2.54, height: 5.52, top: 93.77, left: 70.96 },
//     { width: 3.54, height: 2.57, top: 34.26, left: 54.65 },
//     { width: 3.88, height: 2.38, top: 79.33, left: 62.10 },
//     { width: 5.92, height: 4.21, top: 11.02, left: 77.86 },
//     { width: 2.60, height: 2.49, top: 64.66, left: 85.22 },
//     { width: 3.76, height: 3.49, top: 2.19, left: 67.28 },
//     { width: 5.22, height: 5.97, top: 0.50, left: 25.37 },
//     { width: 4.65, height: 5.05, top: 36.26, left: 1.82 },
//     { width: 3.29, height: 3.44, top: 76.29, left: 23.08 }
//   ];

//   return (
//     <section id="contact" style={sectionStyle}>
//       <div style={diagonalConnectorStyle}></div>
      
//       {/* Background Elements */}
//       <div style={backgroundElementsStyle}>
//         <div style={{
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           width: '100%',
//           height: '50%',
//           background: 'radial-gradient(circle at 50% 100%, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)',
//           zIndex: 0
//         }}></div>
        
//         {/* Animated particles with fixed positions */}
//         {ctaParticles.map((particle, i) => (
//           <motion.div
//             key={i}
//             style={{
//               position: 'absolute',
//               width: particle.width,
//               height: particle.height,
//               borderRadius: '50%',
//               background: 'rgba(var(--primary-rgb), 0.2)',
//               top: `${particle.top}%`,
//               left: `${particle.left}%`,
//               zIndex: 0
//             }}
//             animate={{
//               y: [0, 15, 0, -15, 0],
//               opacity: [0.2, 0.5, 0.2]
//             }}
//             transition={{
//               duration: 8 + (i % 5) * 2,
//               repeat: Infinity,
//               ease: 'easeInOut'
//             }}
//           />
//         ))}
//       </div>
      
//       <div style={containerStyle}>
//         <motion.div
//           style={{...contentStyle, maxWidth: '1000px'}}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <motion.h2
//             style={titleStyle}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             Schedule a Consultation
//           </motion.h2>
          
//           <motion.p
//             style={descriptionStyle}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             Book a 30-minute call with our team to discuss how our solutions can transform your business
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true, amount: 0.2 }}
//             style={{
//               background: 'rgba(255, 255, 255, 0.03)',
//               borderRadius: '16px',
//               border: '1px solid rgba(var(--primary-rgb), 0.15)',
//               padding: '1.5rem',
//               boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
//               position: 'relative',
//               zIndex: 2,
//               marginTop: '2rem',
//               overflow: 'hidden',
//               maxWidth: '900px',
//               margin: '2rem auto 0'
//             }}
//           >
//             {/* Decorative elements for Calendly container */}
//             <div style={{
//               position: 'absolute',
//               top: '-50px',
//               right: '-50px',
//               width: '200px',
//               height: '200px',
//               borderRadius: '50%',
//               background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.2) 0%, transparent 70%)',
//               zIndex: 0
//             }}></div>
            
//             <div style={{
//               position: 'absolute',
//               bottom: '-30px',
//               left: '-30px',
//               width: '150px',
//               height: '150px',
//               borderRadius: '50%',
//               background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%)',
//               zIndex: 0
//             }}></div>
            
//             {/* Calendly inline widget */}
//             <div 
//               className="calendly-inline-widget" 
//               data-url="https://calendly.com/nishit-findingniche/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=6366f1&hide_event_type_details=1" 
//               style={{
//                 width: '100%',
//                 height: '780px',
//                 position: 'relative',
//                 zIndex: 1
//               }}
//             ></div>
            
//             {/* Load Calendly script using useEffect to ensure it's client-side only */}
//             <CalendlyScript />
//           </motion.div>
//         </motion.div>
//       </div>
      
//       <style jsx global>{`
//         @keyframes gradientText {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
//         @keyframes gradientShift {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
        
//         /* Custom Calendly Styling */
//         .calendly-inline-widget {
//           overflow: hidden !important;
//           min-height: 780px !important;
//           width: 100% !important;
//         }
        
//         .calendly-inline-widget iframe {
//           border-radius: 12px;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//           width: 100% !important;
//           min-width: 100% !important;
//           height: 780px !important;
//           min-height: 780px !important;
//           background-color: transparent !important;
//           transform: scale(1.01);
//           transform-origin: top center;
//         }
        
//         /* Hide scrollbars */
//         .calendly-inline-widget iframe::-webkit-scrollbar {
//           display: none;
//         }
        
//         .calendly-inline-widget iframe {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
        
//         /* Calendly popup styling */
//         .calendly-overlay .calendly-popup {
//           border-radius: 16px !important;
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important;
//           max-width: 900px !important;
//           background-color: rgba(0, 0, 0, 0.9) !important;
//         }
        
//         .calendly-overlay .calendly-popup .calendly-popup-content {
//           border-radius: 16px !important;
//           background-color: transparent !important;
//         }
        
//         /* Make Calendly fit our theme better */
//         .calendly-inline-widget iframe body {
//           background-color: transparent !important;
//         }
        
//         /* Remove any padding that might cause scrolling */
//         .calendly-inline-widget .calendar-wrapper,
//         .calendly-inline-widget .calendar-body {
//           padding: 0 !important;
//           margin: 0 !important;
//         }
//       `}</style>
//     </section>
//   );
// }

// // Component to load Calendly script client-side only
// function CalendlyScript() {
//   useEffect(() => {
//     // Add type definition for Calendly
//     interface CalendlyWindow extends Window {
//       Calendly?: {
//         initInlineWidgets: () => void;
//         customizeSettings: (settings: {
//           hideEventTypeDetails?: boolean;
//           hideLandingPageDetails?: boolean;
//           primaryColor?: string;
//           textColor?: string;
//           backgroundColor?: string;
//         }) => void;
//       }
//     }

//     // Create and add the script tag
//     const script = document.createElement('script');
//     script.src = 'https://assets.calendly.com/assets/external/widget.js';
//     script.async = true;
    
//     // When script loads, initialize with custom settings
//     script.onload = () => {
//       const win = window as CalendlyWindow;
//       if (win.Calendly) {
//         // Initialize widgets
//         win.Calendly.initInlineWidgets();
        
//         // Apply custom settings
//         try {
//           win.Calendly.customizeSettings({
//             hideEventTypeDetails: true,
//             hideLandingPageDetails: false,
//             primaryColor: '6366f1',
//             textColor: 'ffffff',
//             backgroundColor: '000000'
//           });
//         } catch (e) {
//           console.log('Calendly customization error:', e);
//         }
        
//         // Add mutation observer to remove scrollbars from Calendly iframe when it loads
//         const observer = new MutationObserver(() => {
//           const calendlyIframe = document.querySelector('.calendly-inline-widget iframe');
//           if (calendlyIframe) {
//             // Apply additional styles to iframe content when it loads
//             calendlyIframe.addEventListener('load', () => {
//               try {
//                 const iframeDoc = (calendlyIframe as HTMLIFrameElement).contentDocument;
//                 if (iframeDoc) {
//                   // Create a style element in the iframe
//                   const style = iframeDoc.createElement('style');
//                   style.textContent = `
//                     body, html { overflow: hidden !important; height: 100% !important; }
//                     .calendar-wrapper { padding: 0 !important; }
//                     .main { background-color: transparent !important; }
//                   `;
//                   iframeDoc.head.appendChild(style);
//                 }
//               } catch (e) {
//                 // Cross-origin errors may occur, which is fine
//                 console.log('Could not inject styles into iframe:', e);
//               }
//             });
            
//             // Disconnect once we find the iframe
//             observer.disconnect();
//           }
//         });
        
//         // Start observing
//         observer.observe(document.body, { childList: true, subtree: true });
//       }
//     };
    
//     document.body.appendChild(script);
    
//     // Clean up on unmount
//     return () => {
//       document.body.removeChild(script);
//       // Remove any observer
//       const calendlyIframe = document.querySelector('.calendly-inline-widget iframe');
//       if (calendlyIframe) {
//         (calendlyIframe as HTMLIFrameElement).remove();
//       }
//     };
//   }, []);
  
//   return null;
// }

