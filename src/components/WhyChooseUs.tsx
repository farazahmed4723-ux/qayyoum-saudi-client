"use client";

import React from "react";
import { ShieldCheck, Truck, Zap, Award, CheckCircle2, Clock, ThumbsUp, Wrench } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      color: "amber",
      bgGradient: "from-amber-500/10 to-amber-500/5",
      border: "border-amber-400/40",
      iconBg: "bg-amber-500/20 text-amber-500",
      title: "ضمان استرجاع وإعادة فحص 25 يوماً",
      description:
        "نمنحك ضماناً معتمداً وموثقاً لمدة 25 يوماً كاملاً على أعمال الصيانة وقطع الغيار المستبدلة. في حال تكرار العطل خلال فترة الضمان، نعيد الفحص والإصلاح فوراً ومجاناً دون أي تكلفة إضافية.",
      highlight: "ضمان 25 يوماً كتابي موثق",
    },
    {
      icon: Truck,
      color: "blue",
      bgGradient: "from-blue-500/10 to-blue-500/5",
      border: "border-blue-400/30",
      iconBg: "bg-blue-500/20 text-blue-500",
      title: "خدمة استلام وتوصيل مجانية بالرياض",
      description:
        "لا داعي للقلق بشأن نقل أجهزتك الثقيلة. فريقنا مجهز بسيارات مخصصة لاستلام الأجهزة من باب منزلك في أي حي بالرياض، وإعادتها بعد إتمام الصيانة والفحص بدون أي رسوم توصيل.",
      highlight: "0 ريال تكاليف نقل وتوصيل",
    },
    {
      icon: Zap,
      color: "emerald",
      bgGradient: "from-emerald-500/10 to-emerald-500/5",
      border: "border-emerald-400/30",
      iconBg: "bg-emerald-500/20 text-emerald-500",
      title: "فحص وتصليح في نفس اليوم",
      description:
        "ندرك أهمية الغسالة والمكيف والثلاجة في حياتك اليومية، لذلك نركز على سرعة الاستجابة وتشخيص العطل والبدء في الإصلاح الفوري لإعادة جهازك في أسرع وقت ممكن.",
      highlight: "سرعة قياسية لتقليل تعطل منزلك",
    },
    {
      icon: Award,
      color: "purple",
      bgGradient: "from-purple-500/10 to-purple-500/5",
      border: "border-purple-400/30",
      iconBg: "bg-purple-500/20 text-purple-400",
      title: "فنيون متخصصون وخبرة طويلة في الرياض",
      description:
        "فريقنا الفني يمتلك خبرة عملية عريقة في التعامل مع كافة الموديلات العالمية، التكنولوجيا الذكية، وكروت الإنفرتر الحديثة بأعلى معايير الحرفية والأمانة المهنية.",
      highlight: "كوادر فنية متمرسة في سوق الرياض",
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold mb-3">
            <ThumbsUp className="w-4 h-4 text-amber-400" />
            <span>ثقة وراحة بال لعملاء الرياض</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            لماذا يختارنا العملاء لصيانة أجهزتهم؟
          </h2>
          <p className="text-base text-slate-300 mt-3 leading-relaxed">
            نجمع بين الضمان الحقيقي، وسرعة الخدمة، ومجانية النقل، والخبرة الفنية المتخصصة التي تمنحك راحة البال التامة.
          </p>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-8 bg-gradient-to-br ${pillar.bgGradient} bg-slate-800/80 border ${pillar.border} backdrop-blur-md flex flex-col justify-between hover:scale-[1.01] transition-transform text-right shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-slate-300 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-700">
                      {pillar.highlight}
                    </span>
                    <div className={`w-14 h-14 rounded-2xl ${pillar.iconBg} flex items-center justify-center shrink-0`}>
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    خدمة متوفرة يومياً
                  </span>
                  <span>الرياض • حي الزهرة وكافة الأحياء</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="mt-12 pt-10 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">25</div>
            <div className="text-xs sm:text-sm font-bold text-slate-300 mt-1">يوماً ضمان معتمد</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">0 ر.س</div>
            <div className="text-xs sm:text-sm font-bold text-slate-300 mt-1">استلام وتوصيل مجاناً</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono">+12 عاماً</div>
            <div className="text-xs sm:text-sm font-bold text-slate-300 mt-1">خبرة فنية بالرياض</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <div className="text-3xl sm:text-4xl font-black text-amber-300 font-mono">100%</div>
            <div className="text-xs sm:text-sm font-bold text-slate-300 mt-1">فحص إلكتروني دقيق</div>
          </div>
        </div>

      </div>
    </section>
  );
}
