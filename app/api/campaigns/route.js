import { NextResponse } from "next/server";
import { supabase, createServerSupabaseClient } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("campaigns")
    .select("*")
    .order("id", { ascending: false });

  if (error) return NextResponse.json({ error: error.message || error }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const server = createServerSupabaseClient();

    const { data, error } = await server
      .from("campaigns")
      .insert({
        title: body.title,
        image: body.image || null,
        url: body.url || null,
      })
      .select();

    if (error) return NextResponse.json({ error: error.message || error }, { status: 400 });
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}