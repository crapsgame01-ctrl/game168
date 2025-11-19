"use client";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`เข้าสู่ระบบ: ${username}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: "linear-gradient(180deg, #1a0b26, #0b1a2a)" }}
    >
      <h1 className="text-4xl font-bold mb-6 neon">เข้าสู่ระบบ</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-xs">
        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="px-4 py-2 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white"
        />
        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="px-4 py-2 rounded-lg border border-white/30 bg-white/10 backdrop-blur-sm text-white"
        />
        <button className="px-4 py-2 rounded-xl bg-white/10 border border-white/30 text-white font-semibold hover:shadow-lg transition-all duration-200">
          เข้าสู่ระบบ
        </button>
      </form>
    </main>
  );
}
