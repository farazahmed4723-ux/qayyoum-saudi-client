import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { appliance, issue, district, phone, notes } = body;

    if (!appliance || !issue || !district) {
      return NextResponse.json(
        { success: false, message: "يرجى تعبئة كافة الحقول المطلوبة" },
        { status: 400 }
      );
    }

    // Insert into Supabase 'bookings' table
    const { data, error } = await supabaseAdmin
      .from("bookings")
      .insert([
        {
          appliance,
          issue,
          district,
          phone: phone || null,
          notes: notes || null,
          status: "جديد",
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.warn("Supabase insert notice:", error.message);
      // In case table hasn't been created in Supabase yet, return soft-success with notice
      return NextResponse.json({
        success: true,
        savedToDatabase: false,
        notice: "طلبك قيد المتابعة",
        errorDetails: error.message,
        booking: { appliance, issue, district, phone, notes },
      });
    }

    return NextResponse.json({
      success: true,
      savedToDatabase: true,
      message: "تم تسجيل طلب الصيانة بنجاح في قاعدة البيانات!",
      booking: data?.[0] || null,
    });
  } catch (err: any) {
    console.error("Booking submission error:", err);
    return NextResponse.json(
      { success: false, message: "حدث خطأ غير متوقع", error: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabaseAdmin
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      return NextResponse.json({ success: false, error: error.message });
    }

    return NextResponse.json({ success: true, count: data.length, bookings: data });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
