"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle2, UserCheck } from "lucide-react";

const REVIEWS = [
  {
    name: "أبو فهد القحطاني",
    district: "حي الزهرة - الرياض",
    device: "صيانة غسالة دايو أوتوماتيك",
    text: "ما شاء الله قمة في الأمانة والسرعة، الغسالة كانت ما تعصر وبابها مقفل. جو واستلموها مجاناً من البيت ورجعوها بالليل شغالة مثل الجديدة مع ضمان 25 يوم معتمد وفاتورة واضحة.",
    rating: 5,
    tag: "خدمة استلام منزلي",
  },
  {
    name: "مهندس خالد العتيبي",
    district: "حي السويدي - الرياض",
    device: "إصلاح كارت إلكتروني لمكيف سبليت",
    text: "كل الفنيين قالوا لي الكارت محترق ولازم تشتري بوردة جديدة بـ 600 ريال. الإخوان بالورشة فحصوا البوردة وأصلحوا العطل بمهارة عالية ووفروا عليّ تكلفة كبيرة، شغل فنيين محترفين حقاً.",
    rating: 5,
    tag: "إصلاح كارت وبرمجة",
  },
  {
    name: "سعد بن ناصر الشمري",
    district: "حي الشفا - الرياض",
    device: "صيانة ثلاجة سامسونج No-Frost",
    text: "الثلاجة كانت تجمع ثلج في الفريزر والتبريد تحت ضعيف. فحصوا الحساسات وعملوا تنظيف لدورة الهواء وشحنوا فريون أصلي، والحمد لله التبريد صار ممتاز جداً. تعامل راقي وأنصح بهم بشدة.",
    rating: 5,
    tag: "تبريد وفريون أصلي",
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>تقييمات وتجارب العملاء بالرياض</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            ثقة ورضا عملائنا في مختلف أحياء الرياض
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            شهادات حقيقية من عملاء استفادوا من سرعة الاستجابة، الفحص الدقيق، والضمان المعتمد
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 flex flex-col justify-between text-right hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Stars & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                    {rev.tag}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-5">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    {rev.name}
                  </h4>
                  <span className="text-xs text-slate-500">{rev.district}</span>
                </div>
                <span className="text-[11px] font-medium text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                  {rev.device}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
