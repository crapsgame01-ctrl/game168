"use client";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ฟังก์ชันเข้าสู่ระบบ
  function handleLogin(e) {
    e.preventDefault();
    alert(`เข้าสู่ระบบ: ${username}`);
  }

  // เล่นเสียง
  function playSound(url) {
    const audio = new Audio(url);
    audio.play();
  }

  // ระบบสุ่มรางวัล
  function openGift() {
    const rewards = ["💎 50 เพชร", "🎟️ 1 สิทธิ์ลุ้น", "🪙 100 เหรียญ", "✨ พลังงาน +10", "🎁 กล่องสุ่มพิเศษ"];
    const reward = rewards[Math.floor(Math.random() * rewards.length)];
    alert(`คุณได้รับ: ${reward}`);
  }

  // ระบบจัดอันดับ
  function openRanking() {
    alert("📊 ระบบจัดอันดับผู้เล่น (กำลังเชื่อมต่อฐานข้อมูล…)"); 
  }

  // ระบบโปรไฟล์
  function openProfile() {
    alert("👤 โปรไฟล์ผู้ใช้ (กำลังโหลดข้อมูล…)"); 
  }

  // ระบบกิจกรรม
  function openEvents() {
    alert("📅 รายการกิจกรรมทั้งหมด"); 
  }

  // ระบบแคมเปญ
  function openCampaigns() {
    alert("🔥 แคมเปญทั้งหมด"); 
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 space-y-10">

      {/* ชื่อเว็บแบบใหม่ */}
      <h1 className="text-5xl font-extrabold text-blue-400 drop-shadow-[0_0_20px_#00BFFF] text-center">
        GAME 168<br />รางวัลฟรี 🎁
      </h1>

      {/* แบนเนอร์ */}
      <img
        src="/banner.png"
        alt="GAME 168 รางวัลฟรี"
        className="w-full max-w-4xl rounded-xl shadow-[0_0_25px_#00BFFF]"
      />

      {/* ปุ่มเล่นเสียง */}
      <button
        onClick={() => playSound('/sound/electric.mp3')}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-2xl shadow-lg transition"
      >
        🔊 เล่นเสียงเอฟเฟกต์
      </button>

      {/* ฟอร์มล็อกอิน */}
      <form
        onSubmit={handleLogin}
        className="flex flex-col space-y-4 bg-neutral-900 p-6 rounded-2xl shadow-xl w-full max-w-md"
      >
        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 rounded-xl text-black"
        />

        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded-xl text-black"
        />

        <button
          className="px-4 py-2 rounded-xl border-2 border-blue-400 text-blue-400 shadow-[0_0_10px_#00BFFF] hover:shadow-[0_0_20px_#00BFFF] transition"
        >
          เข้าสู่ระบบ
        </button>
      </form>

      {/* ฟังก์ชันเพิ่มเติม */}
      <div className="mt-6 flex flex-col gap-3 w-full max-w-md">
        <button onClick={openGift} className="px-4 py-2 bg-blue-500 text-white rounded-xl">🎁 สุ่มของขวัญ</button>
        <button onClick={openRanking} className="px-4 py-2 bg-green-500 text-white rounded-xl">🏆 จัดอันดับ</button>
        <button onClick={openProfile} className="px-4 py-2 bg-purple-500 text-white rounded-xl">👤 โปรไฟล์</button>
        <button onClick={openEvents} className="px-4 py-2 bg-red-500 text-white rounded-xl">📅 กิจกรรมทั้งหมด</button>
        <button onClick={openCampaigns} className="px-4 py-2 bg-orange-500 text-white rounded-xl">🔥 ดูแคมเปญทั้งหมด</button>
      </div>
    </main>
  );
}
