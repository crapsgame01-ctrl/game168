"use client";

import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    alert(`เข้าสู่ระบบ: ${username}`);
  }

  function handleRegister() {
    alert("สมัครสมาชิก");
  }

  function handleLogout() {
    alert("ออกจากระบบแล้ว");
  }

  function joinEvent() {
    alert("เข้าร่วมกิจกรรมแล้ว!");
  }

  const buttonStyle =
    "border border-white text-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition-all";

  return (
    <div
      style={{
        background: "#020612",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        GAME ตัวตึง 🚀 | ระบบกิจกรรม
      </h1>

      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "280px",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-3 py-2 rounded bg-black text-white border border-gray-600"
        />

        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-3 py-2 rounded bg-black text-white border border-gray-600"
        />

        <button type="submit" className={buttonStyle}>
          เข้าสู่ระบบ
        </button>
      </form>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleRegister} className={buttonStyle}>
          สมัครสมาชิก
        </button>

        <button onClick={handleLogout} className={buttonStyle}>
          ออกจากระบบ
        </button>

        <button onClick={joinEvent} className={buttonStyle}>
          เข้าร่วมกิจกรรม
        </button>
      </div>
    </div>
  );
}
