"use client";

import React from "react";
import { Phone, Truck, ShieldCheck, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-slate-950 text-slate-200 text-xs border-b border-slate-800 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-right">
          
          {/* Urgent Announcement Banner */}
          <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30 text-[11px] animate-pulse">
              <Truck className="w-3.5 h-3.5" />
              خدمة سريعة
            </span>
            <span className="font-semibold text-slate-100">
              استلام وتوصيل مجاني لجميع أحياء الرياض
            </span>
            <span className="hidden sm:inline-block text-slate-500">•</span>
            <span className="inline-flex items-center gap-1 text-slate-300 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              ضمان معتمد 25 يوماً
            </span>
            <span className="hidden lg:inline-block text-slate-500">•</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400 text-[11px]">
              <MapPin className="w-3 h-3 text-red-400" />
              الرياض - حي الزهرة
            </span>
          </div>

          {/* Dual Click-to-Call Buttons */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span className="text-slate-400 text-[11px] hidden sm:inline">اتصال فوري:</span>
            
            {/* Primary Phone */}
            <a
              href="tel:0571881029"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 hover:bg-amber-500/25 text-amber-400 font-mono font-bold tracking-wider border border-amber-500/40 transition-colors shadow-sm"
              title="اتصال بالرقم الأساسي 0571881029"
            >
              <Phone className="w-3 h-3 text-amber-400 animate-bounce" />
              <span>0571881029</span>
            </a>

            {/* Secondary Phone */}
            <a
              href="tel:0597942690"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono font-medium tracking-wider border border-slate-700 transition-colors"
              title="اتصال بالرقم الإضافي 0597942690"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>0597942690</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
