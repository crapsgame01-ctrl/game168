"use client";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Auth({ onChange }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithMagicLink() {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("ตรวจสอบอีเมลของคุณเพื่อยืนยันการเข้าสู่ระบบ (magic link)");
      setEmail("");
      if (onChange) onChange();
    } catch (err) {
      console.error(err);
      alert(err.message || "ไม่สามารถส่งลิงก์ได้");
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    if (onChange) onChange();
  }

  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <input
        placeholder="อีเมลสำหรับเข้าสู่ระบบ"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: 8, borderRadius: 6 }}
      />
      <button onClick={signInWithMagicLink} className="btn" disabled={loading}>
        {loading ? "ส่งลิงก์..." : "ส่งลิงก์เข้าสู่ระบบ"}
      </button>
      <button onClick={signOut} className="btn danger" style={{ marginLeft: 8 }}>
        ออกจากระบบ
      </button>
    </div>
  );
}
