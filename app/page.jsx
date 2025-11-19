"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 neon">
        GAME ตัวตึง 🚭
      </h1>

      <p classname="text-lg opacity-80 mb-10">
        ศูนย์รวมเกมธีมนีออน สไตล์ล้ำอนาคต 💙💗
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs">

        <Link href="/game1">
          <button className="btn glow w-full py-3 rounded-lg text-xl font-semibold bg-[#0f162b] neon">
            🎮 เข้าสู่เกม 1
          </button>
        </Link>

        <Link href="/game2">
          <button className="btn glow w-full py-3 rounded-lg text-xl font-semibold bg-[#0f162b] neon">
            ⚡ เข้าสู่เกม 2
          </button>
        </Link>

        <Link href="/campaigns">
          <button className="btn glow w-full py-3 rounded-lg text-xl font-semibold bg-[#0f162b] neon">
            🎁 ระบบกิจกรรม
          </button>
        </Link>

      </div>

      {/* Footer */}
      <footer className="mt-14 text-sm opacity-40">
        © GAME ตัวตึง — Futuristic Neon System
      </footer>
    </main>
  );
}
