// "use client";

// import Link from 'next/link';


// import { Twitter, Linkedin,  Mail } from 'lucide-react';
// import { CSSProperties, useState, useEffect} from 'react';
// import { motion } from 'framer-motion';

// export default function Footer({ scheduleRef }) {
//   const [isMediumScreen, setIsMediumScreen] = useState(false);
  
//   // Use useEffect for responsive design
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMediumScreen(window.innerWidth >= 768);
//     };
    
//     // Set initial value
//     handleResize();
    
//     // Add event listener
//     window.addEventListener('resize', handleResize);
    
//     // Clean up
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Scroll to schedule function
//   const scrollToSchedule = () => {
//     if (scheduleRef.current) {
//       scheduleRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Footer styles
//   const footerStyle: CSSProperties = {
//     background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9))',
//     color: '#fff',
//     padding: '3rem 1.5rem',
//     textAlign: 'center',
//     position: 'relative',
//     zIndex: 1,
//     boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.5)',
//   };

//   const footerContainerStyle: CSSProperties = {
//     display: 'flex',
//     flexDirection: isMediumScreen ? 'row' : 'column',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     gap: '2rem',
//     marginBottom: '1.5rem',
//   };

//   const columnStyle: CSSProperties = {
//     flex: 1,
//     minWidth: '200px',
//   };

//   const headingStyle: CSSProperties = {
//     fontSize: '1.5rem',
//     fontWeight: 700,
//     marginBottom: '0.5rem',
//   };

//   const subheadingStyle: CSSProperties = {
//     fontSize: '1.0rem',
//     fontWeight: 400,
//     marginBottom: '1rem',
//     color: 'rgba(255, 255, 255, 0.8)',
//   };

//   const linkStyle: CSSProperties = {
//     padding: '0.5rem 1rem',
//     backgroundColor: 'transparent',
//     color: '#4b9fff',
//     border: '2px solid transparent',
//     borderRadius: '4px',
//     textDecoration: 'none',
//     transition: 'color 0.3s ease, border-color 0.3s ease',
//     display: 'inline-block',
//   };

  

//   return (
//     <>
//       <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '2rem' }} />
//       <footer style={footerStyle}>
//         <h2 style={headingStyle}>FNX Labs</h2>
//         <p style={subheadingStyle}>AI-powered automation for personalized outreach and workflow efficiency.</p>
//         <p style={subheadingStyle}>nishit@fnxlabs.co</p>
//         <div style={footerContainerStyle}>
//           <div style={columnStyle}>
//             <h3 style={headingStyle}>Solutions</h3>
//             <p style={subheadingStyle}>AI Avatar Videos | Workflow Automation</p>
//           </div>
//           <div style={columnStyle}>
//             <h3 style={headingStyle}>Company</h3>
//             <motion.p 
//               style={{ ...subheadingStyle, cursor: 'pointer' }}
//               onClick={scrollToTop} 
//               whileHover={{ scale: 1.05, color: '#7c3aed' }}
//             >
//               About Us
//             </motion.p>
//           </div>
//           <div style={columnStyle}>
//             <h3 style={headingStyle}>Get Started</h3>
//             <p 
//               style={{ ...subheadingStyle, cursor: 'pointer' }} 
//               onClick={scrollToSchedule}
//             >
//               Book a Demo | Talk to Sales
//             </p>
//           </div>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
//           <motion.div whileHover={{ scale: 1.05 }}>
//             <Link href="https://www.linkedin.com/company/finding-niche/" target="_blank" style={linkStyle}>
//               <Linkedin size={20} />
//             </Link>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.05 }}>
//             <Link href="https://x.com/fnxlabsco" target="_blank" style={linkStyle}>
//               <Twitter size={20} />
//             </Link>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.05 }}>
//             <Link href="mailto:nishit@fnxlabs.co" style={linkStyle}>
//               <Mail size={20} />
//             </Link>
//           </motion.div>
//         </div>
//         <p style={subheadingStyle}>2025 FNX Labs, Inc. All rights reserved.</p>
//       </footer>
//     </>
//   );
// } 