"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-[#0ff4] bg-black/40 backdrop-blur-md">
      <nav className="container flex items-center justify-between py-4">
        
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className="font-extrabold text-[18px] neon"
            aria-label="GAME168 home"
          >
            GAME168
          </Link>

          <Link href="/campaigns" className="glow">Campaigns</Link>
          <Link href="/admin" className="glow">Admin</Link>
        </div>

        {/* Right Section */}
        <div>
          <span className="muted">v0.1</span>
        </div>

      </nav>
    </header>
  );
}
