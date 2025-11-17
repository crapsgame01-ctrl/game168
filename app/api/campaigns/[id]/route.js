import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const API_KEY = process.env.API_KEY || null;
const BUCKET = process.env.SUPABASE_BUCKET || "campaign-images";

function getServerClient() {
	if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE) {
		throw new Error("Missing SUPABASE URL or SERVICE ROLE KEY in environment");
	}
	return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);
}

async function verifyAuth(req) {
	try {
		const authHeader = req.headers.get("authorization") || "";
		const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;
		if (!token) return null;
		const server = getServerClient();
		const { data, error } = await server.auth.getUser(token);
		if (error) return null;
		return data?.user || null;
	} catch (err) {
		return null;
	}
}

function isAdminUser(user) {
	if (!user) return false;
	const admins = (process.env.SUPABASE_ADMIN_EMAILS || process.env.ADMIN_EMAILS || "").split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
	if (admins.length === 0) return false;
	const email = (user.email || "").toLowerCase();
	return admins.includes(email);
}

export async function GET(req, { params }) {
	const client = createClient(SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "");
	const { id } = params;
	const { data, error } = await client.from("campaigns").select("*").eq("id", id).single();
	if (error) return NextResponse.json({ error: error.message }, { status: 500 });
	return NextResponse.json(data);
}

export async function PUT(req, { params }) {
	try {
		// require API_KEY or authenticated user
		// require admin: either API_KEY matches or authenticated user who is in ADMIN_EMAILS
		if (API_KEY) {
			const provided = req.headers.get("x-api-key");
			if (provided !== API_KEY) {
				const user = await verifyAuth(req);
				if (!user || !isAdminUser(user)) return NextResponse.json({ error: "Unauthorized (admin required)" }, { status: 401 });
			}
		} else {
			const user = await verifyAuth(req);
			if (!user || !isAdminUser(user)) return NextResponse.json({ error: "Unauthorized (admin required)" }, { status: 401 });
		}

		const { id } = params;
		const body = await req.json();
		const server = getServerClient();
		const { data, error } = await server
			.from("campaigns")
			.update({ title: body.title, description: body.description, image: body.image || null })
			.eq("id", id)
			.select();

		if (error) return NextResponse.json({ error: error.message }, { status: 500 });
		return NextResponse.json(data);
	} catch (err) {
		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}

function extractPathFromPublicUrl(url, bucket) {
	if (!url) return null;
	const marker = `/object/public/${bucket}/`;
	const idx = url.indexOf(marker);
	if (idx === -1) return null;
	return url.substring(idx + marker.length);
}

export async function DELETE(req, { params }) {
	try {
		if (API_KEY) {
			const provided = req.headers.get("x-api-key");
			if (provided !== API_KEY) {
				const user = await verifyAuth(req);
				if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
			}
		} else {
			const user = await verifyAuth(req);
			if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const { id } = params;
		const server = getServerClient();

		// fetch record to get image path
		const { data: existing, error: fetchErr } = await server.from("campaigns").select("*").eq("id", id).single();
		if (fetchErr) return NextResponse.json({ error: fetchErr.message }, { status: 500 });

		// delete DB record
		const { data, error } = await server.from("campaigns").delete().eq("id", id).select();
		if (error) return NextResponse.json({ error: error.message }, { status: 500 });

		// attempt to delete file from storage if present
		const imageUrl = existing?.image || null;
		const path = extractPathFromPublicUrl(imageUrl, BUCKET);
		if (path) {
			await server.storage.from(BUCKET).remove([path]);
		}

		return NextResponse.json({ success: true, data });
	} catch (err) {
		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}

