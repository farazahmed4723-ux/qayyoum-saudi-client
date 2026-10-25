"use client";

import React from "react";
import { Phone, MessageCircle, X, ShieldCheck, Clock } from "lucide-react";

interface DualPhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DualPhoneModal({ isOpen, onClose }: DualPhoneModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden text-right"
        dir="rtl"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute left-4 top-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-medium text-amber-400">فنيو الصيانة متاحون الآن</span>
          </div>
          <h3 className="text-xl font-bold text-white">اختر رقم الاتصال المباشر</h3>
          <p className="text-xs text-slate-300 mt-1">
            خدمة سريعة في جميع أحياء الرياض مع ضمان معتمد 25 يوماً
          </p>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Primary Phone */}
          <div className="p-4 rounded-xl border-2 border-amber-400/50 bg-amber-50/40 hover:bg-amber-50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-200/60 px-2 py-0.5 rounded-md">
                الرقم الأساسي
              </span>
              <span className="text-xs text-slate-500 font-mono">0571881029</span>
            </div>
            <p className="text-sm font-bold text-slate-900 mb-3">
              فني الصيانة والاستلام المباشر
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:0571881029"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>اتصال فوري</span>
              </a>
              <a
                href="https://wa.me/966571881029?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D8%AC%D9%87%D8%A7%D8%B2%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب</span>
              </a>
            </div>
          </div>

          {/* Secondary Phone */}
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/70 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-200 px-2 py-0.5 rounded-md">
                الرقم الإضافي / المناوب
              </span>
              <span className="text-xs text-slate-500 font-mono">0597942690</span>
            </div>
            <p className="text-sm font-bold text-slate-900 mb-3">
              قسم المتابعة وتأكيد المواعيد
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:0597942690"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>اتصال فوري</span>
              </a>
              <a
                href="https://wa.me/966597942690?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D8%AC%D9%87%D8%A7%D8%B2%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>واتساب</span>
              </a>
            </div>
          </div>

          {/* Trust note */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              ضمان معتمد 25 يوماً
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              يومياً من 8 صباحاً - 11 مساءً
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
