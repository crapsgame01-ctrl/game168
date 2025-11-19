// /app/layout.tsx
"use client";

import "./globals.css";
import { useEffect } from "react";

export const metadata = {
  title: "GAME ตัวตึง 🚭",
  description: "เว็บไซต์เกมธีมนีออน ฟ้า-ชมพู โทนอนาคต",
};

// 🔒 ล็อกหน้าจอไม่ให้เอียง (Portrait Only)
function useLockOrientation() {
  useEffect(() => {
    const lock = async () => {
      try {
        if ("orientation" in screen && screen.orientation.lock) {
          await screen.orientation.lock("portrait");
        }
      } catch (err) {
        console.warn("Orientation lock failed:", err);
      }
    };
    lock();
  }, []);
}

export default function RootLayout({ children }) {
  useLockOrientation();

  return (
    <html lang="th">
      <body className="app-body neon">
        {children}
      </body>
    </html>
  );
}
