"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, PhoneCall, MessageCircle } from "lucide-react";

const FAQS = [
  {
    q: "ما هي تفاصيل ضمان الـ 25 يوماً المعتمد على الصيانة؟",
    a: "نقدم ضماناً كتابياً معتمداً لمدة 25 يوماً على كافة الأعطال التي نقوم بإصلاحها وقطع الغيار التي يتم استبدالها أثناء الصيانة. وفي حال ظهور نفس المشكلة أو العطل خلال هذه المدة، يتوجه الفني لإعادة الفحص والإصلاح مجاناً وبأولوية قصوى دون أي تكلفة إضافية.",
  },
  {
    q: "هل خدمة الاستلام والتوصيل مجانية حقاً لجميع أحياء الرياض؟",
    a: "نعم، خدمة الاستلام والتوصيل مجانية 100% داخل مدينة الرياض. نقوم باستلام الجهاز المعطل من باب منزلك ونقله إلى الورشة للفحص الدقيق، ثم إعادته وتركيبه واختباره أمامك بدون احتساب أي رسوم نقل إضافية.",
  },
  {
    q: "هل تقومون ببيع وتجارة قطع الغيار بشكل مستقل؟",
    a: "تنويه هام: نحن مركز وورشة متخصصة حصرياً في أعمال الصيانة والإصلاح والتركيب الفني فقط، ولا نقوم ببيع قطع الغيار منفردة أو التجارة فيها بدون صيانة وتركيب.",
  },
  {
    q: "كم يستغرق تشخيص وإصلاح الجهاز في العادة؟",
    a: "الأعطال الشائعة (مثل تغيير طلمبة طرد، تنظيف مكيف، تعبئة فريون، أو ضبط تايمر) ننجزها في نفس اليوم أو خلال 24 ساعة كحد أقصى. أما أعطال الكروت الإلكترونية المعقدة أو توضيب مواتير الغسالات فيتم فحصها وإنجازها خلال 24 إلى 48 ساعة مع اختبار شامل لجودة التشغيل.",
  },
  {
    q: "هل يمكنكم إصلاح كروت الغسالات والمكيفات الإلكترونية المعطلة؟",
    a: "نعم وبكل تأكيد! نمتلك مختبراً مجهزاً بأحدث أجهزة القياس والفحص واللحام الدقيق لإصلاح كروت الإنفرتر (Inverter) والباور لجميع الماركات العالمية (LG, Samsung, Daewoo, Gree وغيرها)، مما يوفر عليك ما يصل إلى 60% من تكلفة شراء كارت جديد.",
  },
  {
    q: "كيف أعرف تكلفة الإصلاح قبل البدء في العمل؟",
    a: "يقوم الفني بفحص الجهاز وتحديد سبب المشكلة بدقة متناهية، ثم يقدم لك تقريراً واضحاً بالتكلفة الإجمالية والقطع المطلوبة. لا نبدأ في أي خطوة صيانة إلا بعد موافقتك الصريحة والاطمئنان لكافة التفاصيل.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>إجابات سريعة وشفافة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            الأسئلة الشائعة حول خدمات الصيانة
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            كل ما تود معرفته عن الضمان، رسوم التوصيل المجاني، وإجراءات الإصلاح
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-right gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-amber-50 text-amber-600" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-right text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help CTA Box */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 text-white text-center sm:text-right flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">لديك استفسار عن عطل جهازك بالرياض؟</h4>
            <p className="text-xs text-slate-300 mt-1">
              فريقنا الفني جاهز لمساعدتك وتقديم الاستشارة الفنية فوراً
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:0571881029"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black rounded-xl transition-colors shadow-sm"
            >
              اتصال: 0571881029
            </a>
            <a
              href="https://wa.me/966571881029?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D9%84%D8%AF%D9%8A%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D8%AC%D9%87%D8%A7%D8%B2%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
            >
              محادثة واتساب
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
