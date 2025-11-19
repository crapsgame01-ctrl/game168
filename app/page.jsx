// src/pages/index.tsx
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [isOverlay, setOverlay] = useState(false);

  // ฟังก์ชันทดสอบ API draw
  const handleDraw = async () => {
    try {
      const res = await fetch("/api/draw");
      const data = await res.json();
      setMessage(data.message || "ได้รับของเรียบร้อย!");
      playSound("/sounds/draw.mp3");
    } catch (err) {
      setMessage("เกิดข้อผิดพลาด");
      console.error(err);
    }
  };

  // ฟังก์ชันโชว์ Overlay
  const toggleOverlay = () => setOverlay(!isOverlay);

  // ฟังก์ชันเล่นเสียง
  const playSound = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      {/* Header */}
      <header className="text-center py-8 neon-text">
        <h1 className="text-5xl font-bold">GAME ตัวตึง 🎁</h1>
        <p className="text-blue-400 mt-2">สนุกกับเกมและรับของรางวัล!</p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-6">
        {/* ปุ่มฟังก์ชันหลัก */}
        <button
          onClick={handleDraw}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl neon-button transition"
        >
          แจกของรางวัล
        </button>

        <button
          onClick={toggleOverlay}
          className="px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-xl neon-button transition"
        >
          Overlay Effect
        </button>

        {/* แสดงข้อความผลลัพธ์ */}
        {message && (
          <div className="mt-4 p-4 bg-gray-900 rounded-lg border border-blue-500">
            {message}
          </div>
        )}

        {/* รูปประกอบ */}
        <img
          src="/images/game-banner.png"
          alt="GAME ตัวตึง Banner"
          className="w-80 rounded-xl shadow-lg neon-glow mt-6"
        />
      </main>

      {/* Overlay */}
      {isOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={toggleOverlay}
        >
          <div className="text-4xl text-blue-400 animate-pulse">
            ⚡ Neon Overlay ⚡
          </div>
        </div>
      )}

      <style jsx>{`
        .neon-text {
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 20px #0ff,
            0 0 40px #0ff;
        }
        .neon-button {
          box-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
        }
        .neon-glow {
          box-shadow: 0 0 15px #0ff, 0 0 30px #0ff;
        }
      `}</style>
    </div>
  );
}
