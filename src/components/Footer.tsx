"use client";

import React from "react";
import { Wrench, Phone, MessageCircle, MapPin, Clock, ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  onOpenPhoneModal: () => void;
}

export default function Footer({ onOpenPhoneModal }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-md">
                <Wrench className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-lg font-black text-white block">
                  مؤسسة للتبريد والتكييف
                </span>
                <span className="text-xs text-amber-400 font-medium">
                  صيانة وتكييف الأجهزة المنزلية بالرياض
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              مركز وورشة متخصصة في صيانة وإصلاح الغسالات، الثلاجات، المكيفات، برمجة الكروت الإلكترونية، وأفران الغاز بأيدي فنيين محترفين مع استلام وتوصيل مجاناً وضمان معتمد 25 يوماً.
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="font-bold text-slate-300">
                مؤسسة خالد بن سعد بن سعود العصيمي للمقاولات العامة
              </p>
              <p className="text-[11px] text-slate-500">
                سجل صيانة وإصلاح الأجهزة المنزلية وأعمال التكييف والتبريد • الرياض
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
              خدمات الصيانة المعتمدة
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  صيانة الغسالات الأوتوماتيكية والعادية
                </a>
              </li>
              <li>
                <a href="#pcb-section" className="hover:text-amber-400 transition-colors">
                  برمجة وإصلاح الكروت الإلكترونية والإنفرتر
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  صيانة الثلاجات والفريزر وشحن الفريون
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  غسيل وصيانة المكيفات (سبليت وشباك)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  صيانة أفران ومواقد الغاز المنزلية
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  تفاصيل ضمان الـ 25 يوماً
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
              بيانات التواصل والموقع
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>6969 لبيد بن ربيعة، حي الزهرة، الرياض 12987</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>يومياً: من 8:00 صباحاً حتى 11:00 مساءً</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>الرقم الأساسي: </span>
                <a href="tel:0571881029" className="font-mono font-bold text-amber-400 hover:underline">
                  0571881029
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>الرقم الإضافي: </span>
                <a href="tel:0597942690" className="font-mono font-bold text-slate-200 hover:underline">
                  0597942690
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>واتساب مباشر: </span>
                <a 
                  href="https://wa.me/966571881029" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-emerald-400 hover:underline font-bold"
                >
                  966571881029+
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="https://maps.app.goo.gl/T19ncfinjYBDfpck9?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold underline underline-offset-4"
              >
                <span>عرض موقع الورشة على Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-right">
          <p>
            جميع الحقوق محفوظة © 2026 مؤسسة للتبريد والتكييف وصيانة الأجهزة المنزلية - الرياض.
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ضمان 25 يوماً معتمد • استلام وتوصيل مجاني في الرياض</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
