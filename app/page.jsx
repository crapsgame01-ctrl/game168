// Example Next.js App Router structure // app/layout.jsx import "./globals.css";

export default function RootLayout({ children }) { return ( <html lang="th"> <body className="bg-black text-white font-sans"> {children} </body> </html> ); }

// app/page.jsx 'use client'; import { useState } from 'react';

export default function Home() { const [username, setUsername] = useState(""); const [password, setPassword] = useState("");

function handleLogin(e) { e.preventDefault(); alert(เข้าสู่ระบบ: ${username}); }

function playSound(url) { const audio = new Audio(url); audio.play(); }

return ( <main className="min-h-screen flex flex-col items-center justify-center p-6 space-y-10"> <h1 className="text-4xl font-bold text-blue-400 drop-shadow-md">GAME ตัวตึง 🚭</h1>

<img src="/banner.png" alt="GAME ตัวตึง" className="w-full max-w-4xl rounded-xl shadow-lg" />

  <button
    onClick={() => playSound('/sound/electric.mp3')}
    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-2xl shadow-lg transition"
  >
    🔊 เล่นเสียงเอฟเฟกต์
  </button>

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

    <button className="px-4 py-2 rounded-xl border-2 border-white text-white shadow-[0_0_10px_white] hover:shadow-[0_0_20px_white] transition""
    >
      เข้าสู่ระบบ
    </button>
  </form>
  {/* ปุ่มฟังก์ชันเพิ่มเติม */}

  <div className="mt-6 flex flex-col gap-3">
    <button onClick={() => alert('เปิดระบบสุ่มของขวัญ')} className="px-4 py-2 bg-blue-500 text-white rounded-xl">สุ่มของขวัญ</button>
    <button onClick={() => alert('เปิดระบบจัดอันดับผู้เล่น')} className="px-4 py-2 bg-green-500 text-white rounded-xl">จัดอันดับ</button>
    <button onClick={() => alert('เปิดหน้าโปรไฟล์ผู้ใช้')} className="px-4 py-2 bg-purple-500 text-white rounded-xl">โปรไฟล์</button>
    <button onClick={() => alert('เปิดรายการกิจกรรมทั้งหมด')} className="px-4 py-2 bg-red-500 text-white rounded-xl">กิจกรรมทั้งหมด</button>
    <button onClick={() => alert('เปิดหน้าแคมเปญทั้งหมด')} className="px-4 py-2 bg-orange-500 text-white rounded-xl">ดูแคมเปญทั้งหมด</button>
  </div>
</main>
  );
}
