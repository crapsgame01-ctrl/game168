"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: ส่งข้อมูลไป API /register
    alert(`สมัครสมาชิก: ${username}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6">สมัครสมาชิก</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full max-w-xs">
        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300"
        />
        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300"
        />
        <button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600">
          ลงทะเบียน
        </button>
      </form>
    </main>
  );
}
