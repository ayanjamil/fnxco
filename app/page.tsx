import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import WhyUs from "@/components/sections/WhyUs";

import CTA from "@/components/sections/CTA";
// import VoiceAgent from "@/components/VoiceAgent";
import Industries from "@/components/sections/Industries";
// import VoiceWidget from "@/components/VoiceWidget";


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Industries />
      <WhyUs />
      <CTA />
      {/* <VoiceAgent /> */}
      {/* <VoiceWidget /> */}

    </>
  );
}
