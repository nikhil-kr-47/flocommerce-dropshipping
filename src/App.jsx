import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProofSection from './components/ProofSection';
import ComparisonSection from './components/ComparisonSection';
import EconomicsSection from './components/EconomicsSection';
import DeliveryPayoutsSection from './components/DeliveryPayoutsSection';
import PricingOfferSection from './components/PricingOfferSection';
import Footer from './components/Footer';
import QualificationModal from './components/QualificationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicantData, setApplicantData] = useState({ name: '', phone: '' });

  // When user clicks "Get Started" in Hero section with name & phone
  const handleStartApplication = ({ name, phone }) => {
    setApplicantData({ name, phone });
    setIsModalOpen(true);
  };

  const scrollToHero = () => {
    const el = document.getElementById('hero-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const input = el.querySelector('input');
      if (input) input.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#070d1e] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Name & Phone Inputs directly on page */}
        <HeroSection 
          onStartApplication={handleStartApplication} 
        />

        {/* 01 Results & Proofs */}
        <ProofSection 
          onOpenModal={scrollToHero} 
        />

        {/* 02 Why The Gulf (India vs GCC) */}
        <ComparisonSection 
          onOpenModal={scrollToHero} 
        />

        {/* 03 The Economics (What You Earn on Every Order) */}
        <EconomicsSection 
          onOpenModal={scrollToHero} 
        />

        {/* 04 Delivery & Payouts (7 Countries + Monday Remittance) */}
        <DeliveryPayoutsSection 
          onOpenModal={scrollToHero} 
        />

        {/* 05 Investment & 06 What's Covered & 07 Zambeel Gold Bonus */}
        <PricingOfferSection 
          onOpenModal={scrollToHero} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Qualification Modal (The 4 Dropdown Questions & Evoc CRM Submission) */}
      <QualificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={applicantData}
      />
    </div>
  );
}
