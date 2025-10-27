import ChatCTASection from "@/components/ui/site/ChatCTASection";
import FreeTrialCTASection from "@/components/ui/site/FreeTrialCTASection";
import Hero from "@/components/ui/site/Hero";
import LandingAIChat from "@/components/ui/site/LandingAIChat";
import TrustMetricsSection from "@/components/ui/site/TrustMetricsSection";
import WhatLikeToDo from "@/components/ui/site/WhatLikeToDo";


function Home() {
  return (
    <div>
      <Hero />
      <LandingAIChat />
      <WhatLikeToDo />
      <ChatCTASection />
      <TrustMetricsSection />
      <FreeTrialCTASection />
    </div>
  )
}


export default Home;