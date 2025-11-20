import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// 1. สร้างตัวเชื่อมต่อ Supabase โดยตรงในหน้านี้ (ตัดปัญหา import ไฟล์อื่นไม่เจอ)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// -------------------------------------------------------
// ฟังก์ชัน GET: ดึงข้อมูล Campaigns
// -------------------------------------------------------
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("campaigns")
      .select("*")
      .order("id", { ascending: false });

    if (error) throw error;

    // บังคับให้ไม่ Cache (เพื่อให้ได้ข้อมูลล่าสุดเสมอ)
    return NextResponse.json({ data }, { 
      status: 200,
      headers: { 'Cache-Control': 'no-store' } 
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// -------------------------------------------------------
// ฟังก์ชัน POST: สร้าง Campaign ใหม่
// -------------------------------------------------------
export async function POST(request) {
  try {
    const body = await request.json(); // รับค่าที่ส่งมาจากหน้าบ้าน

    const { data, error } = await supabase
      .from("campaigns")
      .insert({
        title: body.title,
        image: body.image || null,
        url: body.url || null,
      })
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
.
