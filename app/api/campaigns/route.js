// route.js
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// 1. สร้างระบบ Supabase โดยตรงในที่นี้
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// ฟังก์ชัน GET: ดึงข้อมูลแคมเปญ
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("campaigns") // เดาว่าตารางชื่อ "การรณรงค์" คือ campaigns
      .select("*")
      .order("id", { ascending: true }); // เรียงตาม id ขึ้น

    if (error) throw error;

    // ประกาศไม่แคช (เพื่อให้ข้อมูลล่าสุดเสมอ)
    return NextResponse.json(
      { data },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message }, 
      { status: 500 }
    );
  }
}

// ฟังก์ชัน POST: สร้างแคมเปญใหม่
export async function POST(request) {
  try {
    const body = await request.json(); // รับค่าที่ส่งมาจากหน้าบ้าน

    const { data, error } = await supabase
      .from("campaigns")
      .insert([
        {
          title: body.title,    // ชื่อ-ร่างกาย-ชื่อ
          image: body.image,    // ภาพ-ร่างกาย-ภาพ
          url: body.url,        // URL-ร่างกาย-URL
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json(
      { message: "Success", data }, 
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message }, 
      { status: 500 }
    );
  }
}
