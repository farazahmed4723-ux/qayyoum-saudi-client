"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, ShieldCheck, Truck, Cpu, MapPin, CheckCircle2, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenPhoneModal: () => void;
}

export default function Hero({ onOpenPhoneModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Right Column: Hero Content (RTL first column) */}
          <div className="lg:col-span-7 text-right space-y-6">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>نستقبل طلبات الصيانة الآن بالرياض - فحص منزلي واستلام فوري</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight sm:leading-tight">
              خبراء صيانة وتكييف{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-300 via-amber-400 to-amber-500 underline decoration-amber-500/40 underline-offset-8">
                الأجهزة المنزلية بالرياض
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              إصلاح فوري للمكيفات، الغسالات، الثلاجات، وأفران الغاز بأيدي فنيين محترفين مع ضمان 25 يوماً على كافة الأعطال. نوفر خدمة الفحص المنزلي والاستلام والتوصيل مجاناً بدون أي تكاليف نقل إضافية.
            </p>

            {/* 3 Highlight Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              
              {/* Badge 1: 25 Days Warranty */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/70 border border-slate-700/80 backdrop-blur-sm shadow-sm hover:border-amber-400/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="block text-xs text-slate-400">معتمد وموثق</span>
                  <span className="text-sm font-bold text-white">ضمان 25 يوماً</span>
                </div>
              </div>

              {/* Badge 2: Free Pick & Drop */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/70 border border-slate-700/80 backdrop-blur-sm shadow-sm hover:border-amber-400/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400 shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="block text-xs text-slate-400">لكافة أحياء الرياض</span>
                  <span className="text-sm font-bold text-white">استلام وتوصيل مجاناً</span>
                </div>
              </div>

              {/* Badge 3: Electronic PCB & Multi-tester Diagnostic */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/70 border border-slate-700/80 backdrop-blur-sm shadow-sm hover:border-amber-400/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="block text-xs text-slate-400">أجهزة قياس متقدمة</span>
                  <span className="text-sm font-bold text-white">فحص إلكتروني دقيق</span>
                </div>
              </div>

            </div>

            {/* Dual CTAs & Quick Micro-commitments */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Primary WhatsApp Button */}
                <a
                  href="https://wa.me/966571881029?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D8%AC%D9%87%D8%A7%D8%B2%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>راسلنا واتساب الآن (فحص فوري)</span>
                </a>

                {/* Call Button */}
                <button
                  onClick={onOpenPhoneModal}
                  className="flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-base shadow-lg shadow-amber-500/25 transition-all active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5 fill-current text-slate-950" />
                  <span>اتصال مباشر: 0571881029</span>
                </button>
              </div>

              {/* Trust Indicators line */}
              <div className="flex items-center gap-4 text-xs text-slate-400 justify-start flex-wrap pt-1">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  لا تدفع شيئاً قبل الفحص والاتفاق
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  تغطية شاملة لكل أحياء الرياض
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  خدمات صيانة وإصلاح احترافية
                </span>
              </div>
            </div>

          </div>

          {/* Left Column: Real Workshop Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Card Container */}
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-amber-400/40 via-slate-800 to-slate-900 border-2 border-amber-400/60 shadow-2xl neon-box-glow">
              
              {/* Neon Storefront Label mirroring actual sign */}
              <div className="absolute -top-3.5 right-6 z-20 px-4 py-1 rounded-full bg-slate-950 border border-amber-400 text-amber-400 text-xs font-black tracking-wide shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                <span>ورشة للتبريد والتكييف - حي الزهرة</span>
              </div>

              {/* Main Image */}
              <div className="relative h-[340px] sm:h-[420px] rounded-xl overflow-hidden bg-slate-950 group">
                <Image
                  src="/images/shop-front.jpg"
                  alt="مؤسسة للتبريد والتكييف وصيانة الأجهزة المنزلية بالرياض حي الزهرة"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Overlay Badge 1: Warranty Tag */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-amber-400/40 rounded-xl p-2.5 text-right shadow-lg">
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-0.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>ضمان صيانة معتمد</span>
                  </div>
                  <p className="text-white text-xs font-black">25 يوماً على كافة الأعطال</p>
                </div>

                {/* Overlay Badge 2: Workshop Location Tag */}
                <div className="absolute bottom-4 right-4 left-4 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-slate-300 text-xs font-medium">
                        <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                        <span>6969 لبيد بن ربيعة، حي الزهرة، الرياض</span>
                      </div>
                      <p className="text-amber-400 text-xs font-bold mt-0.5">
                        فحص فوري في الورشة أو استلام مجاني من منزلك
                      </p>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/T19ncfinjYBDfpck9?g_st=ac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black shrink-0 transition-colors"
                    >
                      الموقع
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
