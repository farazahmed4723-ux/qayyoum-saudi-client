"use client";

import React from "react";
import Image from "next/image";
import { 
  Wrench, 
  Cpu, 
  Wind, 
  Flame, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle, 
  Phone,
  Sparkles,
  Zap,
  Snowflake
} from "lucide-react";

interface ServicesSectionProps {
  onOpenPhoneModal: () => void;
}

export default function ServicesSection({ onOpenPhoneModal }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold mb-3">
            <Wrench className="w-4 h-4 text-amber-500" />
            <span>خدمات صيانة وإصلاح احترافية بالرياض</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            خدمات متكاملة لأجهزة منزلك بأيدي فنيين متخصصين
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            نصلك أينما كنت في أحياء الرياض، فحص دقيق بأحدث الأجهزة الإلكترونية، استلام وتوصيل مجاني، وضمان معتمد 25 يوماً على الصيانة.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Washing Machine Repair */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
              <Image
                src="/images/washing-machine-repair.jpg"
                alt="صيانة الغسالات الأوتوماتيكية والعادية بالرياض - فحص الموتور والحلة"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
              
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black shadow-md">
                  <Wrench className="w-3.5 h-3.5" />
                  أوتوماتيك وعادي
                </span>
              </div>

              <div className="absolute bottom-4 right-4 left-4 text-right">
                <span className="text-amber-400 text-xs font-bold block mb-1">خدمة معتمدة 25 يوماً</span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  صيانة الغسالات الأوتوماتيكية والعادية
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 text-right">
              <div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  تصليح مواتير، معالجة عدم تصريف المياه أو التنشيف، وتبديل القطع التالفة، فحص طلمبات الطرد، رولمان البلي، المساعدين، ومفتاح الأمان لكافة ماركات الغسالات (إل جي، سامسونج، دايو، ويرلبول، توشيبا، وغيرها).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>إصلاح وتجديد مواتير الغسيل والعصر</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>معالجة عدم تصريف المياه والانسداد</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>تبديل رولمان البلي والمساعدين</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>استلام وتوصيل مجاناً بالرياض</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://wa.me/966571881029?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D8%BA%D8%B3%D8%A7%D9%84%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>اطلب صيانة غسالتك الآن</span>
                </a>
                <button
                  onClick={onOpenPhoneModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>اتصال مباشر</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: PCB & Electronic Board Diagnostics (Featured prominently) */}
          <div id="pcb-section" className="bg-slate-900 rounded-3xl overflow-hidden border-2 border-amber-400/70 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group relative">
            
            {/* Top gold banner */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-4 py-1.5 flex items-center justify-between text-xs font-black">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                تخصص إلكتروني دقيق بالرياض
              </span>
              <span>مختبر فحص متقدم</span>
            </div>

            <div className="relative h-64 sm:h-72 w-full bg-slate-950 overflow-hidden">
              <Image
                src="/images/pcb-repair.jpg"
                alt="برمجة وإصلاح الكروت الإلكترونية وبوردة الإنفرتر للغسالات والأجهزة بالرياض"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 border border-amber-400 text-amber-400 text-xs font-black shadow-md">
                  <Zap className="w-3.5 h-3.5" />
                  بوردات & إنفرتر (Inverter)
                </span>
              </div>

              <div className="absolute bottom-4 right-4 left-4 text-right">
                <span className="text-amber-300 text-xs font-bold block mb-1">أحدث أجهزة القياس والفحص</span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  برمجة وإصلاح الكروت الإلكترونية
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 text-right text-slate-200">
              <div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  فحص وصيانة كروت التشغيل والإنفرتر لجميع الماركات بأحدث أجهزة القياس والملتيميتر، إصلاح الدوائر الكهربائية المحترقة، حل شورت الباور، وإعادة برمجة لمعالجة رموز الأعطال المستعصية (Error Codes) بدلاً من شراء كارت جديد بتكلفة باهظة.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>فحص دوائر القدرة والإنفرتر IPM</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>معالجة الرموز وأعطال الشاشات</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>توفير كبير مقارنة بشراء كارت جديد</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>ضمان 25 يوماً على سلامة التشغيل</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://wa.me/966571881029?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%B9%D9%86%D8%AF%D9%8A%20%D9%83%D8%A7%D8%B1%D8%AA%20%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%20%D9%8A%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%81%D8%AD%D8%B5%20%D9%88%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>فحص كارت إلكتروني عبر واتساب</span>
                </a>
                <button
                  onClick={onOpenPhoneModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-sm border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصال بالفني</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Refrigerator & Freezer Repair */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
              <Image
                src="/images/refrigerator-compressor.jpg"
                alt="صيانة الثلاجات والفريزر بالرياض - كشف كمبروسر Embraco وشحن فريون"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
              
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-black shadow-md">
                  <Snowflake className="w-3.5 h-3.5" />
                  تبريد وتجميد فائق
                </span>
              </div>

              <div className="absolute bottom-4 right-4 left-4 text-right">
                <span className="text-amber-400 text-xs font-bold block mb-1">فحص كمبروسر وفريون</span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  صيانة الثلاجات والفريزر (No-Frost)
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 text-right">
              <div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  كشف أعطال الكمبروسر (Embraco ومختلف الأنواع العالمية)، فحص الدوائر الكهربائية والحساسات، شحن غاز الفريون الأصلي بالوزن المناسب، وحل مشاكل تسريبات المياه وتراكم الثلج ونظام توزيع الهواء المتطور Multi Air Flow.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>فحص وضبط كمبروسر الثلاجة المعتمد</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>تعبئة فريون أصلي بأعلى كفاءة</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>معالجة عدم التبريد وتراكم الثلوج</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ضمان 25 يوماً على التبريد</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://wa.me/966571881029?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D8%AB%D9%84%D8%A7%D8%AC%D8%A9%20%D8%A3%D9%88%20%D9%81%D8%B1%D9%8A%D8%B2%D8%B1%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>طلب صيانة ثلاجة وفحص فريون</span>
                </a>
                <button
                  onClick={onOpenPhoneModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>اتصال فوري</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: AC Cleaning & Maintenance (Split & Window) */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
              <Image
                src="/images/ac-repair.jpg"
                alt="غسيل وصيانة المكيفات بالرياض سبليت وشباك - تنظيف بضغط الماء وتعبئة فريون"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
              
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-600 text-white text-xs font-black shadow-md">
                  <Wind className="w-3.5 h-3.5" />
                  سبليت وشباك
                </span>
              </div>

              <div className="absolute bottom-4 right-4 left-4 text-right">
                <span className="text-amber-400 text-xs font-bold block mb-1">غسيل متطور بدون فوضى</span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  غسيل وصيانة المكيفات (سبليت وشباك)
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 text-right">
              <div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                  تنظيف عميق بضغط الماء مع عوازل خاصة لمنع تسرب الماء على الأثاث، تعبئة فريون أصلي (R410A / R22)، حل مشكلة تنقيط المياه داخل الغرفة، إزالة الروائح الكريهة، وصيانة مراوح البلاور والمكثفات لتحقيق تبريد قطبي قوي.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>غسيل بالضغط وحقائب خاصة بدون تلويث</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>تعبئة فريون هندي/أمريكي مضمون</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>حل تسريب المياه والروائح نهائياً</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ضمان 25 يوماً على التبريد وجودة العمل</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://wa.me/966571881029?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%BA%D8%B3%D9%8A%D9%84%20%D9%88%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D9%85%D9%83%D9%8A%D9%81%D8%A7%D8%AA%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>حجز صيانة وغسيل مكيفات</span>
                </a>
                <button
                  onClick={onOpenPhoneModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>اتصال مباشر</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 5: Gas Oven & Cooking Stove Maintenance */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group lg:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative h-64 sm:h-72 lg:h-auto min-h-[280px] bg-slate-900 overflow-hidden">
                <Image
                  src="/images/gas-oven-repair.jpg"
                  alt="صيانة أفران ومواقد الغاز بالرياض - تسليك العيون وفحص التسريبات"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-black shadow-md">
                    <Flame className="w-3.5 h-3.5" />
                    أمان واحترافية
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 text-right">
                <div>
                  <span className="text-amber-600 text-xs font-bold block mb-1">أمان منزلي فائق</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                    صيانة أفران ومواقد الغاز المنزلية
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5 font-normal">
                    تسليك العيون والشعلات المسدودة، معايرة ضغط الغاز وتوزيع اللهب الأزرق النقي، فحص تسريبات الغاز المنزلية بأمان عالي بأحدث أجهزة الكشف الحساسة، ضبط حرارة الفرن، وتبديل حساسات الأمان والثرموكبل (Thermocouple).
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>تسليك وتنظيف عيون الغاز وتعديل النار</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>كشف إلكتروني لتسريبات الغاز المنزلية</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>ضبط ثرموستات وحرارة الفرن والشواية</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>ضمان معتمد 25 يوماً على الأمان والجودة</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="https://wa.me/966571881029?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D9%81%D8%B1%D9%86%20%D8%A3%D9%88%20%D9%85%D9%88%D9%82%D8%AF%20%D8%BA%D8%A7%D8%B2%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>طلب صيانة فرن غاز الآن</span>
                  </a>
                  <button
                    onClick={onOpenPhoneModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span>اتصال بالرقم الأساسي</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
