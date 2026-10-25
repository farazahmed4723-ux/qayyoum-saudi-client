"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, CheckCircle2, Cpu, Wrench, Gauge, Snowflake } from "lucide-react";

export default function TechnicalExpertise() {
  return (
    <section className="py-16 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>فحص هندسي ومعايرة دقيقة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            نعتمد على التشخيص العلمي الدقيق قبل أي إصلاح
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            ورشة عمل مجهزة بأجهزة الملتيميتر الرقمية، قياس ضغوط الفريون، واختبار كفاءة دورات التبريد Multi Air Flow لضمان عودة جهازك بحالة المصنع.
          </p>
        </div>

        {/* 3 Showcase Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Clean Air Flow & Cooling Systems */}
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col group hover:shadow-lg transition-all">
            <div className="relative h-60 w-full overflow-hidden bg-slate-900">
              <Image
                src="/images/clean-fridge.jpg"
                alt="تنظيف وتعقيم دورة التبريد ونظام Multi Air Flow للثلاجات والفريزر بالرياض"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 right-3 text-right">
                <span className="text-amber-400 text-[11px] font-bold">نظام Multi Air Flow</span>
                <h4 className="text-white text-base font-bold">تنظيف وتعقيم دورات التبريد</h4>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between text-right space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                تنظيف فتحات التهوية وإزالة الروائح والرواسب العالقة في مسارات الهواء، وضبط حساسات No-Frost لمنع أي تراكم للجليد وتوزيع البرودة بتوازن كامل.
              </p>
              <div className="pt-2 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>تبريد متجانس يحافظ على نضارة الأطعمة</span>
              </div>
            </div>
          </div>

          {/* Card 2: PCB Board & Micro-circuit Repair */}
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col group hover:shadow-lg transition-all">
            <div className="relative h-60 w-full overflow-hidden bg-slate-900">
              <Image
                src="/images/pcb-repair.jpg"
                alt="فحص كارت التشغيل والإنفرتر بأجهزة القياس الرقمية"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 right-3 text-right">
                <span className="text-amber-400 text-[11px] font-bold">مختبر الكروت الذكية</span>
                <h4 className="text-white text-base font-bold">فحص دقيق للإنفرتر والكهرباء</h4>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between text-right space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                فحص المسارات الكهربائية الدقيقة، تبديل المكثفات والريليهات التالفة بدقة متناهية لتفادي التكلفة العالية لشراء كروت جديدة وتوفير أموال العميل.
              </p>
              <div className="pt-2 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>إصلاح احترافي مع ضمان 25 يوماً</span>
              </div>
            </div>
          </div>

          {/* Card 3: Compressor Diagnostics & Gas Testing */}
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex flex-col group hover:shadow-lg transition-all">
            <div className="relative h-60 w-full overflow-hidden bg-slate-900">
              <Image
                src="/images/refrigerator-compressor.jpg"
                alt="فحص كمبروسر Embraco VEGY 6H بملتيميتر احترافي"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 right-3 text-right">
                <span className="text-amber-400 text-[11px] font-bold">كمبروسرات Embraco العالمية</span>
                <h4 className="text-white text-base font-bold">كشف الضغط وملفات الموتور</h4>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between text-right space-y-3">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                قياس مقاومة ملفات الضاغط (Ohms)، اختبار الأوفرلود والريلاي، والتأكد من ضغط الغاز قبل اتخاذ قرار الاستبدال لضمان الحل الأكثر جدوى وأماناً.
              </p>
              <div className="pt-2 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>أعلى معايير الأمان الكهربائي المنزلي</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
