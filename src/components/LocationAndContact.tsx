"use client";

import React from "react";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Navigation, 
  ShieldCheck, 
  Truck,
  ExternalLink 
} from "lucide-react";

interface LocationAndContactProps {
  onOpenPhoneModal: () => void;
}

export default function LocationAndContact({ onOpenPhoneModal }: LocationAndContactProps) {
  return (
    <section id="location" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold mb-3">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>موقعنا في قلب الرياض - حي الزهرة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            تفضل بزيارة ورشتنا أو اطلب استلاماً مجانياً من منزلك
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            مستعدون لاستقبال أجهزتكم يومياً، أو إرسال مندوبنا لاستلام جهازك المعطل من باب بيتك في أي حي من أحياء الرياض.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column (7 cols): Address details, phone numbers, and workshop photo */}
          <div className="lg:col-span-6 space-y-6 text-right">
            
            {/* Visual Photos Grid: Storefront and Owner Technician */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Workshop Front Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-xl group h-64">
                <Image
                  src="/images/shop-front.jpg"
                  alt="واجهة ورشة ومؤسسة للتبريد والتكييف وصيانة الأجهزة بحي الزهرة بالرياض"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-3 right-3 left-3">
                  <span className="text-[11px] font-bold text-amber-400 block">لوحة المحل المضيئة</span>
                  <h4 className="text-sm font-black text-white">
                    مؤسسة للتبريد والتكييف
                  </h4>
                  <p className="text-[10px] text-slate-300">حي الزهرة - شارع لبيد بن ربيعة</p>
                </div>
              </div>

              {/* Owner Technician Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-amber-400/50 bg-slate-950 shadow-xl group h-64">
                <Image
                  src="/images/owner.jpg"
                  alt="صاحب وفني الورشة المسؤول عن الصيانة الميدانية في الرياض"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-3 right-3 left-3">
                  <span className="text-[11px] font-bold text-amber-400 block">الفني المسؤول المعتمد</span>
                  <h4 className="text-sm font-black text-white">
                    صاحب الورشة وإشراف مباشر
                  </h4>
                  <p className="text-[10px] text-slate-300">متواجد لخدمتكم يومياً بالرياض</p>
                </div>
              </div>
            </div>

            {/* Address Details Card */}
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-4">
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-base font-bold text-white">عنوان الورشة بالرياض:</h5>
                  <p className="text-sm text-slate-300 leading-relaxed mt-1">
                    6969 لبيد بن ربيعة، حي الزهرة، الرياض 12987، المملكة العربية السعودية
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-700/60">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-base font-bold text-white">أوقات العمل واستقبال الأجهزة:</h5>
                  <p className="text-sm text-slate-300 mt-1">
                    طوال أيام الأسبوع: من الساعة 8:00 صباحاً حتى 11:00 مساءً (خدمة مستمرة)
                  </p>
                </div>
              </div>

              {/* Google Maps Direct Button */}
              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/T19ncfinjYBDfpck9?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01]"
                >
                  <Navigation className="w-4 h-4 fill-slate-950" />
                  <span>فتح الموقع المباشر على خرائط جوجل (Google Maps)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Direct Dual Call Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Primary Contact */}
              <div className="p-4 rounded-xl bg-slate-800/90 border border-amber-400/40 text-right">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded">
                    الرقم الأساسي
                  </span>
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-lg font-black font-mono text-white tracking-wider my-1">
                  0571881029
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <a
                    href="tel:0571881029"
                    className="flex-1 py-1.5 px-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg text-center transition-colors"
                  >
                    اتصال
                  </a>
                  <a
                    href="https://wa.me/966571881029?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D8%AC%D9%87%D8%A7%D8%B2%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg text-center transition-colors"
                  >
                    واتساب
                  </a>
                </div>
              </div>

              {/* Secondary Contact */}
              <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-right">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-slate-300 bg-slate-700 px-2 py-0.5 rounded">
                    الرقم الإضافي / المناوب
                  </span>
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-lg font-black font-mono text-white tracking-wider my-1">
                  0597942690
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <a
                    href="tel:0597942690"
                    className="flex-1 py-1.5 px-2 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold rounded-lg text-center transition-colors"
                  >
                    اتصال
                  </a>
                  <a
                    href="https://wa.me/966597942690?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D8%AC%D9%87%D8%A7%D8%B2%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg text-center transition-colors"
                  >
                    واتساب
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Left Column (6 cols): Interactive Google Maps Iframe */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-950 shadow-2xl h-[420px] lg:h-[520px] relative">
              <iframe
                title="موقع ورشة صيانة الأجهزة والتكييف بالرياض حي الزهرة شارع لبيد بن ربيعة"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.541243171822!2d46.685362!3d24.593645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f056d6dc22b79%3A0xcb3df16eec28d495!2sLubaid%20Ibn%20Rabihah%2C%20Az%20Zahrah%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1711234567890!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-125 contrast-105"
              ></iframe>

              {/* Map Floating Location Card */}
              <div className="absolute top-4 right-4 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-xl border border-amber-400/50 shadow-xl text-right max-w-xs">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>موقع الورشة بحي الزهرة</span>
                </div>
                <p className="text-xs text-white font-medium leading-snug">
                  6969 شارع لبيد بن ربيعة، بالقرب من كافة محاور جنوب وغرب الرياض
                </p>
                <div className="mt-2 pt-2 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="text-emerald-400 font-bold">مفتوح الآن</span>
                  <span>حتى 11:00 م</span>
                </div>
              </div>
            </div>

            {/* Neighborhoods badge cloud */}
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/70 text-right">
              <span className="text-xs font-bold text-amber-400 block mb-2">
                أبرز الأحياء المشمولة بخدمة الاستلام والتوصيل المجاني:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                حي الزهرة، السويدي، الشفا، العريجاء الوسطى والغربية، ظهرة البديعة، نمار، الدخل المحدود، حي طويق، ظهرة لبن، شبرا، الدريهمية، العقيق، النرجس، الياسمين، وكافة مناطق مدينة الرياض.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
