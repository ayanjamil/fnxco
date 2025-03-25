"use client";

import { motion } from 'framer-motion';
import { testimonialsData } from '@/data/testimonialsData';
import { useState } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="section bg-background">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-100 dark:text-muted-200 max-w-xl mx-auto">
            Hear from businesses who have experienced the FNXLabs difference
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-accent p-8 md:p-10 rounded-xl shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="w-16 h-16 mb-4 md:mb-0 bg-muted-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary">
                  {testimonialsData[activeIndex].name.charAt(0)}
                </div>
                <div className="md:ml-4">
                  <h3 className="text-xl font-bold">{testimonialsData[activeIndex].name}</h3>
                  <p className="text-muted-100 dark:text-muted-200">{testimonialsData[activeIndex].position}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < testimonialsData[activeIndex].rating 
                            ? 'text-yellow-500 fill-yellow-500' 
                            : 'text-muted-200'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg italic">&#34;{testimonialsData[activeIndex].testimonial}&#34;</p>
              </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex justify-center mt-8 space-x-4"
          >
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-accent hover:bg-muted-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="flex space-x-2 items-center">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-muted-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-accent hover:bg-muted-100 transition-colors"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 