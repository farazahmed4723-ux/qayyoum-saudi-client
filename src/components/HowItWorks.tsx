"use client";

import React from "react";
import { PhoneCall, Truck, Wrench, ShieldCheck, ArrowLeft } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: PhoneCall,
      title: "تواصل سريع",
      desc: "اتصل بنا أو راسلنا واتساب مع ذكر نوع الجهاز والعطل والحي بالرياض.",
    },
    {
      num: "02",
      icon: Truck,
      title: "فحص أو استلام مجاني",
      desc: "نصلك لفحص الجهاز في المنزل أو استلامه إلى ورشتنا مجاناً بدون رسوم نقل.",
    },
    {
      num: "03",
      icon: Wrench,
      title: "صيانة دقيقة واختبار",
      desc: "إصلاح احترافي، برمجة الكروت، واختبار تشغيل كامل بأحدث أجهزة القياس.",
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "تسليم مع ضمان 25 يوماً",
      desc: "نعيد الجهاز لمنزلك ونختبره معك مع فاتورة وضمان معتمد لمدة 25 يوماً.",
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            خطوات مريحة وسلسة
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            كيف تتم خدمة صيانة أجهزتك معنا؟
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            4 خطوات واضحة ومباشرة تضمن لك راحة البال وسرعة استعادة جهازك
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="relative bg-slate-50 p-6 rounded-2xl border border-slate-200/80 text-right group hover:bg-slate-900 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-amber-400 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 group-hover:text-white mb-2 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed transition-colors">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
