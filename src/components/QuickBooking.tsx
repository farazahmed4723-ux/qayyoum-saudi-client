"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Sparkles, CheckCircle, ShieldCheck, MapPin } from "lucide-react";

const APPLIANCES = [
  { id: "washing-machine", name: "غسالة أوتوماتيك / عادية", icon: "🧺" },
  { id: "ac", name: "مكيف سبليت / شباك", icon: "❄️" },
  { id: "fridge", name: "ثلاجة / ديب فريزر", icon: "🧊" },
  { id: "pcb", name: "كارت إلكتروني / إنفرتر", icon: "⚡" },
  { id: "oven", name: "فرن أو موقد غاز", icon: "🔥" },
];

const ISSUES: Record<string, string[]> = {
  "washing-machine": [
    "عدم تصريف أو طرد المياه",
    "لا تعصر أو لا تدور الحلة",
    "صوت عالي أو اهتزاز شديد",
    "رمز عطل بالشاشة (Error Code)",
    "تسريب مياه من الأسفل",
    "الباب لا يفتح أو لا يغلق",
  ],
  "ac": [
    "ضعف التبريد أو خروج هواء حار",
    "تنقيط وتسريب مياه داخل الغرفة",
    "صوت مزعج من الوحدة الداخلية/الخارجية",
    "نقص أو تهريب فريون",
    "انبعاث روائح كريهة من المكيف",
    "المكيف يفصل تلقائياً",
  ],
  "fridge": [
    "الثلاجة لا تبرد والفريزر يعمل",
    "تجمع ثلج كثيف في الفريزر",
    "الكمبروسر لا يعمل أو يسخن بشدة",
    "تسريب مياه داخل الثلاجة",
    "صوت طقطقة أو اهتزاز متواصل",
    "تهريب غاز الفريون",
  ],
  "pcb": [
    "الجهاز لا يستجيب لأزرار التشغيل",
    "شاشة التحكم طافية تماماً",
    "احتراق مقاومات أو شورت كهربائي",
    "تذبذب في سرعة الموتور والإنفرتر",
    "فصل كهرباء القاطع عند التشغيل",
  ],
  "oven": [
    "الشعلات مسدودة وضعف نار الغاز",
    "الفرن لا يحافظ على الحرارة",
    "تسريب أو رائحة غاز غير طبيعية",
    "شواية الفرن لا تعمل",
    "صمام الأمان (الحساس) لا يستجيب",
  ],
};

const RIYADH_DISTRICTS = [
  "حي الزهرة (قريب من الورشة)",
  "حي السويدي",
  "حي الشفا",
  "حي العريجاء",
  "حي ظهرة البديعة",
  "حي نمار",
  "حي الدخل المحدود",
  "حي طويق",
  "حي ظهرة لبن",
  "حي شبرا",
  "حي الروضة والنسيم",
  "حي الملز والملز القديم",
  "شمال الرياض (النرجس، الياسمين، الملقا)",
  "حي آخر بالرياض",
];

export default function QuickBooking() {
  const [selectedAppliance, setSelectedAppliance] = useState("washing-machine");
  const [selectedIssue, setSelectedIssue] = useState(ISSUES["washing-machine"][0]);
  const [district, setDistrict] = useState(RIYADH_DISTRICTS[0]);
  const [notes, setNotes] = useState("");

  const handleApplianceChange = (id: string) => {
    setSelectedAppliance(id);
    setSelectedIssue(ISSUES[id][0]);
  };

  const getWhatsAppMessage = () => {
    const applianceObj = APPLIANCES.find((a) => a.id === selectedAppliance);
    const applianceName = applianceObj ? applianceObj.name : selectedAppliance;
    
    let text = `السلام عليكم ورحمة الله، أود حجز صيانة جهاز في الرياض:%0A`;
    text += `• نوع الجهاز: ${encodeURIComponent(applianceName)}%0A`;
    text += `• نوع المشكلة: ${encodeURIComponent(selectedIssue)}%0A`;
    text += `• الحي في الرياض: ${encodeURIComponent(district)}%0A`;
    if (notes.trim()) {
      text += `• تفاصيل إضافية: ${encodeURIComponent(notes.trim())}%0A`;
    }
    text += `أرجو التنسيق لتحديد موعد الفحص والاستلام المجاني مع الضمان 25 يوماً.`;
    return `https://wa.me/966571881029?text=${text}`;
  };

  return (
    <section id="booking" className="py-12 bg-white relative z-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>فحص وتحديد سريع للأعطال</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            حدد عطل جهازك واحصل على استلام مجاني وفحص فوري
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            اختر جهازك والمشكلة والحي في الرياض، وتواصل معنا مباشرة عبر واتساب لتأكيد الموعد وضمان 25 يوماً معتمد.
          </p>
        </div>

        {/* Booking Interactive Box */}
        <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
          
          {/* Subtle gold glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-8">
            
            {/* Step 1: Choose Appliance */}
            <div>
              <label className="block text-sm font-bold text-amber-400 mb-3 text-right">
                1. اختر نوع الجهاز المحتاج للصيانة:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {APPLIANCES.map((app) => (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => handleApplianceChange(app.id)}
                    className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border text-center transition-all ${
                      selectedAppliance === app.id
                        ? "bg-amber-500 text-slate-950 font-black border-amber-400 shadow-lg shadow-amber-500/20 scale-[1.02]"
                        : "bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700/80 font-medium"
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl mb-1.5">{app.icon}</span>
                    <span className="text-xs sm:text-sm leading-snug">{app.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Issue */}
            <div>
              <label className="block text-sm font-bold text-amber-400 mb-3 text-right">
                2. اختر المشكلة أو العطل التقريبي:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {ISSUES[selectedAppliance].map((issue) => (
                  <button
                    key={issue}
                    type="button"
                    onClick={() => setSelectedIssue(issue)}
                    className={`p-3 rounded-xl border text-right text-xs sm:text-sm transition-all flex items-center justify-between ${
                      selectedIssue === issue
                        ? "bg-slate-800 border-amber-400 text-amber-300 font-bold shadow-sm"
                        : "bg-slate-950/60 hover:bg-slate-800/60 text-slate-300 border-slate-800"
                    }`}
                  >
                    <span>{issue}</span>
                    {selectedIssue === issue && (
                      <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mr-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Choose District & Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-amber-400 mb-2 text-right">
                  3. الحي أو المنطقة بالرياض (استلام وتوصيل مجاناً):
                </label>
                <div className="relative">
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 px-4 pr-10 text-sm focus:outline-none focus:border-amber-400"
                    dir="rtl"
                  >
                    {RIYADH_DISTRICTS.map((dist) => (
                      <option key={dist} value={dist} className="bg-slate-900 text-white">
                        {dist}
                      </option>
                    ))}
                  </select>
                  <MapPin className="w-4 h-4 text-amber-400 absolute left-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-amber-400 mb-2 text-right">
                  ماركة الجهاز أو ملاحظة إضافية (اختياري):
                </label>
                <input
                  type="text"
                  placeholder="مثلاً: إل جي LG، سامسونج، جري، دايو..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
                  dir="rtl"
                />
              </div>
            </div>

            {/* Final Submission CTAs */}
            <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>ضمان معتمد 25 يوماً على كافة أعمال الإصلاح والفحص</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>إرسال تفاصيل العطل عبر واتساب</span>
                </a>

                <a
                  href="tel:0571881029"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 text-sm font-bold transition-all"
                  title="اتصال هاتفي سريع"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">اتصال فوري:</span>
                  <span className="font-mono">0571881029</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
