"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

const BRANDS = [
  { name: "LG", ar: "إل جي" },
  { name: "Samsung", ar: "سامسونج" },
  { name: "Daewoo", ar: "دايو" },
  { name: "Whirlpool", ar: "ويرلبول" },
  { name: "Midea", ar: "ميديا" },
  { name: "Gree", ar: "جري" },
  { name: "Super General", ar: "سوبر جنرال" },
  { name: "Ariston", ar: "أريستون" },
  { name: "Beko", ar: "بيكو" },
  { name: "Kelvinator", ar: "كلفينيتور" },
  { name: "Hitachi", ar: "هيتاشي" },
  { name: "Siemens", ar: "سيمنز" },
  { name: "Gibson", ar: "جيبسون" },
  { name: "Carrier", ar: "كارير" },
  { name: "Haier", ar: "هاير" },
  { name: "Toshiba", ar: "توشيبا" },
];

export default function BrandsSection() {
  return (
    <section className="py-12 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
          متخصصون في صيانة وبرمجة كبرى الماركات العالمية والمحلية في المملكة
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs hover:border-amber-400 hover:shadow-sm transition-all flex flex-col items-center justify-center text-center"
            >
              <span className="text-xs sm:text-sm font-black text-slate-800 tracking-tight">
                {brand.name}
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                {brand.ar}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-600 flex-wrap">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            خبرة في الموديلات الذكية Smart & Inverter
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            فحص الكروت الإلكترونية الأصلية
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            ضمان 25 يوماً على كافة الماركات
          </span>
        </div>

      </div>
    </section>
  );
}
