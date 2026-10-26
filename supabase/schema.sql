-- =========================================================================
-- جدول طلبات الصيانة والحجوزات (Bookings & Leads Table)
-- مؤسسة للتبريد والتكييف وصيانة الأجهزة المنزلية - الرياض
-- =========================================================================

CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    appliance TEXT NOT NULL,
    issue TEXT NOT NULL,
    district TEXT NOT NULL,
    phone TEXT,
    notes TEXT,
    status TEXT DEFAULT 'جديد' CHECK (status IN ('جديد', 'قيد الفحص', 'تم الإصلاح', 'تم التسليم', 'ملغي'))
);

-- تفعيل سياسة أمان مستوى الصف (Row Level Security)
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- 1. السماح للزوار (الموقع الإلكتروني) بإدخال طلبات صيانة جديدة
CREATE POLICY "Allow public inserts to bookings"
ON public.bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 2. السماح لخدمة السيرفر (service_role) بقراءة وتحديث كافة الطلبات
CREATE POLICY "Allow full access for service role"
ON public.bookings
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- إضافة فهارس لتسريع الاستعلام
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON public.bookings (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON public.bookings (status);
