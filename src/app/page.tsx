"use client";

import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DisclaimerNotice from "@/components/DisclaimerNotice";
import OwnerSection from "@/components/OwnerSection";
import QuickBooking from "@/components/QuickBooking";
import ServicesSection from "@/components/ServicesSection";
import TechnicalExpertise from "@/components/TechnicalExpertise";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrandsSection from "@/components/BrandsSection";
import HowItWorks from "@/components/HowItWorks";
import CustomerReviews from "@/components/CustomerReviews";
import LocationAndContact from "@/components/LocationAndContact";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingMobileActionBar from "@/components/FloatingMobileActionBar";
import DualPhoneModal from "@/components/DualPhoneModal";

export default function Home() {
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);

  const handleOpenPhoneModal = () => {
    setPhoneModalOpen(true);
  };

  const handleClosePhoneModal = () => {
    setPhoneModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col relative selection:bg-amber-400 selection:text-slate-950">
      {/* Top Banner & Emergency Numbers */}
      <TopBar />

      {/* Main Sticky Navigation */}
      <Navbar onOpenPhoneModal={handleOpenPhoneModal} />

      {/* Hero Section with Workshop Image & Key CTAs */}
      <Hero onOpenPhoneModal={handleOpenPhoneModal} />

      {/* Disclaimer Notice: Services Only, Not Selling Spare Parts */}
      <DisclaimerNotice />

      {/* Dedicated Owner Supervision & Personal Guarantee Section */}
      <OwnerSection onOpenPhoneModal={handleOpenPhoneModal} />

      {/* Interactive Quick Diagnostic & WhatsApp Booking Tool */}
      <QuickBooking />

      {/* Detailed Services Section with Real Work Images */}
      <ServicesSection onOpenPhoneModal={handleOpenPhoneModal} />

      {/* Technical Diagnostics & Clean Air Flow Highlights */}
      <TechnicalExpertise />

      {/* Why Choose Us & The 4 Pillars of Trust */}
      <WhyChooseUs />

      {/* Supported Appliance Brands in Saudi Arabia */}
      <BrandsSection />

      {/* 4-Step How It Works Journey */}
      <HowItWorks />

      {/* Riyadh Customer Reviews & Trust Badges */}
      <CustomerReviews />

      {/* Location, Google Maps Iframe, Workshop Storefront & Owner Profile */}
      <LocationAndContact onOpenPhoneModal={handleOpenPhoneModal} />

      {/* FAQ Accordion Section */}
      <FAQSection />

      {/* Comprehensive Footer */}
      <Footer onOpenPhoneModal={handleOpenPhoneModal} />

      {/* Floating Action Bar for Mobile Screens */}
      <FloatingMobileActionBar onOpenPhoneModal={handleOpenPhoneModal} />

      {/* Dual Phone Selection Modal */}
      <DualPhoneModal
        isOpen={phoneModalOpen}
        onClose={handleClosePhoneModal}
      />
    </main>
  );
}
