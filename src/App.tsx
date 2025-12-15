import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PartnersSection from "./components/PartnersSection";
import AgeGate from "./components/AgeGate";
import BookWebinarButton from "./components/BookWebinarButton";
import MouseParticles from "./components/MouseParticles";
import Particles from "./components/Particles";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import OurStory from "./pages/OurStory";
import DigitalKeys from "./pages/DigitalKeys";
import OurStrains from "./pages/OurStrains";
import Universe from "./pages/Universe";
import NFTs from "./pages/NFTs";
import Process from "./pages/Process";
import Whitepaper from "./pages/Whitepaper";
import Webinars from "./pages/Webinars";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [ageVerified, setAgeVerified] = useState<boolean | null>(null);

  useEffect(() => {
    const verified = localStorage.getItem('drgreen-age-verified');
    setAgeVerified(verified === 'true');
  }, []);

  const handleAgeAccept = () => {
    setAgeVerified(true);
  };

  // Don't render anything until we check localStorage
  if (ageVerified === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <span className="logo-script text-4xl animate-pulse">Dr. Green</span>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {!ageVerified && <AgeGate onAccept={handleAgeAccept} />}
          
          <div className={`min-h-screen bg-background ${!ageVerified ? 'overflow-hidden h-screen' : ''}`}>
            <Particles />
            <MouseParticles particleCount={40} sensitivity={0.08} />
            <Header />
            <BookWebinarButton />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path="/digital-keys" element={<DigitalKeys />} />
                <Route path="/our-strains" element={<OurStrains />} />
                <Route path="/universe" element={<Universe />} />
                <Route path="/nfts" element={<NFTs />} />
                <Route path="/the-process" element={<Process />} />
                <Route path="/whitepaper" element={<Whitepaper />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms-conditions" element={<NotFound />} />
                <Route path="/privacy-policy" element={<NotFound />} />
                <Route path="/cookie-policy" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <PartnersSection />
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
