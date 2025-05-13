import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import WhyUs from "@/components/sections/WhyUs";

import CTA from "@/components/sections/CTA";
// import VoiceAgent from "@/components/VoiceAgent";
import VoiceWidget from "@/components/VoiceWidget";


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhyUs />
      <CTA />
      {/* <VoiceAgent /> */}
      <VoiceWidget />

    </>
  );
}
