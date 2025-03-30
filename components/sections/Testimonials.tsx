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
    <section id="testimonials" className="section bg-background px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 md:mb-16 px-2 sm:px-4"
        >
          <h2 className="text-lg sm:text-xl md:text-4xl font-bold mb-2 md:mb-4">What Our Clients Say</h2>
          <p className="text-xs sm:text-sm md:text-lg text-muted-100 dark:text-muted-200 max-w-xs sm:max-w-md md:max-w-xl mx-auto">
            Hear from businesses who have experienced the FNXLabs difference
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-full sm:max-w-3xl mx-auto px-2"
        >
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-accent p-4 sm:p-8 md:p-10 rounded-xl shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-6">
                <div className="w-10 h-10 sm:w-16 sm:h-16 mb-4 md:mb-0 bg-muted-100 rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold text-primary">
                  {testimonialsData[activeIndex].name.charAt(0)}
                </div>
                <div className="md:ml-4 text-center md:text-left">
                  <h3 className="text-base sm:text-xl font-bold">{testimonialsData[activeIndex].name}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-100 dark:text-muted-200">{testimonialsData[activeIndex].position}</p>
                  <div className="flex justify-center md:justify-start mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 sm:w-5 sm:h-5 ${
                          i < testimonialsData[activeIndex].rating 
                            ? 'text-yellow-500 fill-current' 
                            : 'text-muted-200'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-base md:text-lg italic text-center md:text-left">&#34;{testimonialsData[activeIndex].testimonial}&#34;</p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex justify-center mt-4 sm:mt-8 space-x-2 sm:space-x-4"
          >
            <button 
              onClick={prevTestimonial}
              className="p-2 sm:p-3 rounded-full bg-accent hover:bg-muted-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="flex space-x-1 sm:space-x-2 items-center">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-muted-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 sm:p-3 rounded-full bg-accent hover:bg-muted-100 transition-colors"
              aria-label="Next testimonial"
            >
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}