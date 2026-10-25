"use client";

import React from "react";
import { AlertTriangle, Wrench, ShieldAlert } from "lucide-react";

export default function DisclaimerNotice() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div 
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-amber-500/15 border-2 border-amber-500/40 p-5 sm:p-6 shadow-md text-right"
        dir="rtl"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          
          {/* Warning Icon Badge */}
          <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
            <ShieldAlert className="w-6 h-6 stroke-[2.5]" />
          </div>

          {/* Text Content */}
          <div className="space-y-1 text-center sm:text-right">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500 text-slate-950">
                تنويه هام لعملائنا الكرام
              </span>
              <span className="text-xs font-bold text-amber-800">
                سياسة الورشة والخدمة
              </span>
            </div>
            
            <h4 className="text-base sm:text-lg font-black text-slate-900 pt-1">
              نحن مركز وورشة متخصصة في أعمال الصيانة والإصلاح والتركيب الفني فقط
            </h4>
            
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
              تنويه لعملائنا الكرام: نحن مركز متخصص في أعمال الصيانة والإصلاح فقط، ولا نقوم ببيع وتجارة قطع الغيار المستقلة منفردة دون تركيب وصيانة. جميع قطع الغيار التي نوفرها تُركب حصرياً أثناء خدمة الصيانة مع تقديم ضمان معتمد لمدة 25 يوماً.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
