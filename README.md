# مؤسسة للتبريد والتكييف وصيانة الأجهزة المنزلية - الرياض
### High-Converting Arabic Landing Page for Appliance & AC Maintenance Workshop (Riyadh)

صفحة هبوط تسويقية احترافية وعالية التحويل لمركز وورشة صيانة وتكييف الأجهزة المنزلية بالرياض (حي الزهرة). مبنية بأحدث تقنيات الويب: **Next.js 16 (App Router)**، **Tailwind CSS v4**، **TypeScript**، و **Lucide React**.

---

## 🌟 ميزات المشروع (Key Features)

- **دعم كامل للغة العربية والاتجاه:** `dir="rtl"` مع خط Google Font **Cairo** المتطور.
- **هوية بصرية مميزة:** درجات الكحلي الداكن والذهبي المشع المستوحاة من لوحة المحل الواقعية مع تأثيرات النيون والزجاج (Glassmorphism).
- **إشراف مباشر وضمان من صاحب الورشة:** قسم مخصص يبرز صورة المالك والفني المسؤول مع رسالة التزام وضمان شخصي.
- **حاسبة الأعطال وحجز الصيانة السريع:** أداة تفاعلية لاختيار نوع الجهاز (غسالة، مكيف، ثلاجة، كارت، فرن)، وتحديد العطل والحي بالرياض، وإرسال تفاصيل الحجز فوراً عبر واتساب.
- **بطاقات الخدمات بصور واقعية من الورشة:**
  - صيانة الغسالات الأوتوماتيكية والعادية (`washing-machine-repair.jpg`)
  - برمجة وإصلاح الكروت الإلكترونية والإنفرتر (`pcb-repair.jpg`)
  - صيانة الثلاجات والفريزر وفحص كمبروسرات Embraco (`refrigerator-compressor.jpg`)
  - تنظيف وتعقيم دورات التبريد Multi Air Flow (`clean-fridge.jpg`)
  - غسيل وصيانة المكيفات سبليت وشباك بضغط الماء والفريون (`ac-repair.jpg`)
  - صيانة وتأهيل أفران ومواقد الغاز المنزلية (`gas-oven-repair.jpg`)
- **ركائز الثقة الأربعة:**
  1. 🛡️ ضمان معتمد 25 يوماً على الصيانة.
  2. 🚚 خدمة استلام وتوصيل مجانية لكافة أحياء الرياض.
  3. ⚡ فحص وتصليح في نفس اليوم.
  4. 👨‍🔧 فنيون متخصصون وخبرة طويلة في الرياض.
- **تنويه سياسة الخدمة:** تنويه واضح بأن الورشة متخصصة في الصيانة والإصلاح فقط ولا تبيع قطع الغيار بشكل مستقل.
- **نافذة الاتصال الذكية (DualPhoneModal):** تتيح للزائر الاتصال أو مراسلة أي من الرقمين المتاحين (الأساسي والمناوب).
- **شريط عائم للجوال (Floating Mobile Bar):** أزرار ثابتة للواتساب والاتصال الفوري لتسهيل التحويل السريع للعملاء.
- **تحسين محركات البحث المحلي (Local SEO & JSON-LD):** دمج بيانات Schema المهيكلة (`LocalBusiness` / `HVACBusiness`) مع خرائط جوجل والعنوان البريدي.

---

## 🏢 بيانات المؤسسة والموقع (Business Information)

- **اسم المؤسسة:** مؤسسة للتبريد والتكييف وصيانة الأجهزة المنزلية
- **المؤسسة الرسمية:** مؤسسة خالد بن سعد بن سعود العصيمي للمقاولات العامة
- **العنوان:** 6969 لبيد بن ربيعة، حي الزهرة، الرياض 12987، المملكة العربية السعودية
- **رابط خرائط جوجل:** [Google Maps Location](https://maps.app.goo.gl/T19ncfinjYBDfpck9?g_st=ac)
- **أوقات العمل:** يومياً من 8:00 صباحاً حتى 11:00 مساءً
- **رقم الهاتف الأساسي:** `0571881029` (اتصال | واتساب: `https://wa.me/966571881029`)
- **رقم الهاتف الإضافي / المناوب:** `0597942690` (اتصال | واتساب: `https://wa.me/966597942690`)

---

## 🚀 التشغيل والتطوير (Getting Started)

### متطلبات التشغيل:
- Node.js (v18+)
- npm

### 1. تثبيت الحزم:
```bash
npm install
```

### 2. تشغيل السيرفر المحلي:
```bash
npm run dev
```
افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

### 3. بناء النسخة الإنتاجية (Production Build):
```bash
npm run build
npm run start
```

---

## 📁 هيكلية المشروع (Project Structure)

```text
├── public/
│   ├── images/
│   │   ├── shop-front.jpg
│   │   ├── owner.jpg
│   │   ├── washing-machine-repair.jpg
│   │   ├── pcb-repair.jpg
│   │   ├── refrigerator-compressor.jpg
│   │   ├── clean-fridge.jpg
│   │   ├── ac-repair.jpg
│   │   └── gas-oven-repair.jpg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── TopBar.tsx
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── DisclaimerNotice.tsx
│       ├── OwnerSection.tsx
│       ├── QuickBooking.tsx
│       ├── ServicesSection.tsx
│       ├── TechnicalExpertise.tsx
│       ├── WhyChooseUs.tsx
│       ├── BrandsSection.tsx
│       ├── HowItWorks.tsx
│       ├── CustomerReviews.tsx
│       ├── LocationAndContact.tsx
│       ├── FAQSection.tsx
│       ├── Footer.tsx
│       ├── FloatingMobileActionBar.tsx
│       └── DualPhoneModal.tsx
├── package.json
└── tsconfig.json
```
