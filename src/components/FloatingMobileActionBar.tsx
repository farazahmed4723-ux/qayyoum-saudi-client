"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

interface FloatingMobileActionBarProps {
  onOpenPhoneModal: () => void;
}

export default function FloatingMobileActionBar({ onOpenPhoneModal }: FloatingMobileActionBarProps) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-2 gap-2.5">
        
        {/* Call Button (Right in RTL / First Column) */}
        <button
          onClick={onOpenPhoneModal}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 active:from-amber-600 active:to-amber-700 text-slate-950 font-black text-sm shadow-md shadow-amber-500/20 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 fill-slate-950 text-slate-950" />
          <span>اتصال فوري</span>
        </button>

        {/* WhatsApp Button (Left in RTL / Second Column) */}
        <a
          href="https://wa.me/966571881029?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D8%B5%D9%8A%D8%A7%D9%86%D8%A9%20%D8%AC%D9%87%D8%A7%D8%B2%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 active:from-emerald-600 active:to-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-500/25 active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>واتساب مباشر</span>
        </a>

      </div>
    </div>
  );
}
