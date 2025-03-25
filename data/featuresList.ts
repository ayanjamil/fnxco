import { Shield, Clock, Zap, Users, Layers, Check } from 'lucide-react';

// Define the features data structure
export interface FeatureItem {
  icon: any; // Using any for simplicity, represents a Lucide icon component
  title: string;
  description: string;
}

// Export the features list
export const featuresList: FeatureItem[] = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data is protected with state-of-the-art encryption and security protocols that meet industry standards."
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    description: "Our AI systems work around the clock, ensuring continuous processing and monitoring without interruption."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Experience unprecedented speed with our optimized algorithms designed for maximum efficiency."
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Enhance team productivity with collaborative AI tools that integrate seamlessly with your workflow."
  },
  {
    icon: Layers,
    title: "Scalable",
    description: "Our solutions grow with your business, scaling effortlessly to meet increasing demands."
  },
  {
    icon: Check,
    title: "Custom Integration",
    description: "Tailor-made solutions that integrate perfectly with your existing systems and processes."
  }
];