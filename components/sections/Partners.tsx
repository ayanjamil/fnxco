"use client";

import { motion } from 'framer-motion';
import { partnersData } from '@/data/partnersData';
import { useState, useEffect } from 'react';

export default function Partners() {
  // For client-side rendering
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="partners" className="section py-8 sm:py-12 bg-background px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
          style={{ 
            position: 'relative',
            zIndex: 1 
          }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-100 dark:text-muted-200 max-w-xl mx-auto">
            Join hundreds of businesses that rely on FNXLabs for their technology needs
          </p>
        </motion.div>
        
        {isMounted && (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center"
            style={{ 
              position: 'relative',
              zIndex: 1 
            }}
          >
            {partnersData.map((partner) => (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="w-24 h-12 sm:w-32 sm:h-16 bg-accent rounded-lg flex items-center justify-center shadow-sm"
                style={{ 
                  position: 'relative',
                  zIndex: 1 
                }}
              >
                <div className="text-lg font-semibold text-primary">{partner.name}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}