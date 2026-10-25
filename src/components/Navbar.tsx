"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, Menu, X, ShieldCheck, Wrench, MapPin } from "lucide-react";

interface NavbarProps {
  onOpenPhoneModal: () => void;
}

export default function Navbar({ onOpenPhoneModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Wrench className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <span className="text-lg sm:text-xl font-black text-white tracking-wide">
                    مؤسسة للتبريد والتكييف
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    حي الزهرة
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-medium">
                  صيانة الغسالات، الثلاجات، المكيفات، والكروت الإلكترونية
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">
              خدمات الصيانة
            </a>
            <a href="#owner-supervision" className="hover:text-amber-400 transition-colors flex items-center gap-1 text-amber-300 font-bold">
              <span>إشراف صاحب الورشة</span>
            </a>
            <a href="#pcb-section" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              الكروت الإلكترونية
            </a>
            <a href="#why-us" className="hover:text-amber-400 transition-colors">
              لماذا نحن؟
            </a>
            <a href="#warranty" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              الضمان 25 يوماً
            </a>
            <a href="#location" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <MapPin className="w-4 h-4 text-red-400" />
              موقع الورشة
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">
              الأسئلة الشائعة
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenPhoneModal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 text-sm font-bold transition-all shadow-sm active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>اتصال فوري</span>
            </button>

            <a
              href="https://wa.me/966571881029?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D8%AC%D9%87%D8%A7%D8%B2%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition-all shadow-md shadow-emerald-600/30 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب مباشر</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-900/98 px-4 pt-3 pb-6 space-y-3 text-right">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-800"
            >
              خدمات الصيانة
            </a>
            <a
              href="#pcb-section"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-800 text-amber-400"
            >
              صيانة الكروت الإلكترونية والإنفرتر
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-800"
            >
              لماذا يختارنا العملاء؟
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-800"
            >
              طلب فحص سريع
            </a>
            <a
              href="#warranty"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-800 text-emerald-400"
            >
              ضمان معتمد 25 يوماً
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-800"
            >
              موقع الورشة بحي الزهرة
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg hover:bg-slate-800"
            >
              الأسئلة الشائعة
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhoneModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-slate-800 text-amber-400 rounded-xl font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              اتصال فوري
            </button>
            <a
              href="https://wa.me/966571881029?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D8%AC%D9%87%D8%A7%D8%B2%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              واتساب
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
