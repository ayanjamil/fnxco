"use client";

import { motion } from 'framer-motion';
import { pricingData } from '@/data/pricingData';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-accent">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-100 dark:text-muted-200 max-w-xl mx-auto">
            Choose the plan that best fits your business needs. No hidden fees or surprises.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              className={`bg-background p-8 rounded-xl border ${
                plan.isMostPopular 
                  ? 'border-primary shadow-lg relative' 
                  : 'border-muted-200'
              }`}
            >
              {plan.isMostPopular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-white text-sm font-medium py-1 px-4 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-100 dark:text-muted-200 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-100 dark:text-muted-200">/month</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="ml-3 text-muted-100 dark:text-muted-200">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaLink}
                className={`block text-center w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.isMostPopular
                    ? 'bg-primary text-white hover:bg-primary-hover'
                    : 'btn-outline hover:bg-muted-100'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-100 dark:text-muted-200">
            Need a custom plan? <Link href="/#contact" className="text-primary font-medium">Contact us</Link> for a tailored solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 