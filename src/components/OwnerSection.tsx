"use client";

import React from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  Award, 
  CheckCircle2, 
  UserCheck, 
  Wrench,
  Sparkles,
  MapPin
} from "lucide-react";

interface OwnerSectionProps {
  onOpenPhoneModal: () => void;
}

export default function OwnerSection({ onOpenPhoneModal }: OwnerSectionProps) {
  return (
    <section id="owner-supervision" className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute top-0 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Owner Photo Showcase (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glowing Frame */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-amber-400 via-amber-600/40 to-slate-800 shadow-2xl neon-box-glow">
                
                {/* Real Photo */}
                <div className="relative h-[440px] sm:h-[500px] w-full rounded-2xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/owner.jpg"
                    alt="صاحب وفني مؤسسة للتبريد والتكييف وصيانة الأجهزة المنزلية بالرياض"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                  />

                  {/* Gradient bottom shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent"></div>

                  {/* Top Badge: Verified Master Technician */}
                  <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md border border-amber-400/60 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-lg">
                    <UserCheck className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-black text-amber-300">صاحب الورشة والفني المعتمد</span>
                  </div>

                  {/* Bottom Float Card */}
                  <div className="absolute bottom-4 right-4 left-4 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 shadow-xl text-right">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5 text-amber-400 text-xs font-black">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>ضمان شخصي مباشر</span>
                      </div>
                      <span className="text-[11px] text-slate-400">حي الزهرة - الرياض</span>
                    </div>
                    <p className="text-white text-sm font-bold leading-snug">
                      &ldquo;أشرف بنفسي على فحص وصيانة كل جهاز لضمان أعلى جودة ورضا العميل&rdquo;
                    </p>
                  </div>

                </div>

              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-amber-500/20 rounded-full blur-xl pointer-events-none"></div>
            </div>
          </div>

          {/* Text Content & Guarantees (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-right space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>إشراف فني مباشر ومسؤولية كاملة</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
              جهازك بين أيدٍ أمينة مع{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-amber-300 via-amber-400 to-amber-500">
                إشراف مباشر من صاحب الورشة
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              <p>
                في <strong className="text-white">مؤسسة للتبريد والتكييف</strong> بحي الزهرة، نؤمن بأن الصيانة ليست مجرد استبدال قطع، بل هي أمانة ومهارة هندسية دقيقة.
              </p>
              <p className="bg-slate-800/60 p-4 rounded-2xl border-r-4 border-amber-400 text-slate-200">
                &ldquo;أحرص شخصياً على فحص أجهزة التكييف، الغسالات، الثلاجات، وبوردات الإنفرتر بأحدث أجهزة القياس قبل وبعد الإصلاح، ولا نسلم أي جهاز للعميل إلا بعد التأكد التام من عمله بكفاءة 100% مع ضمان معتمد لمدة 25 يوماً.&rdquo;
              </p>
            </div>

            {/* Commitments checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white">
                  فحص دقيق لتحديد سبب العطل الحقيقي
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white">
                  استلام وتوصيل مجاني من باب بيتك
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white">
                  ضمان كتابي موثق 25 يوماً على كافة الأعطال
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white">
                  أمانة مهنية وأسعار عادلة بدون مبالغة
                </span>
              </div>
            </div>

            {/* Direct Action Buttons with Owner Contact */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://wa.me/966571881029?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D8%A3%D8%AE%D9%8A%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%88%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D8%AC%D9%87%D8%A7%D8%B2%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>تواصل مع صاحب الورشة عبر واتساب</span>
              </a>

              <a
                href="tel:0571881029"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>اتصال مباشر: 0571881029</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
