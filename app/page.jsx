import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        background: `radial-gradient(1200px 600px at 10% 10%, #00e5ff0f, transparent),
                     radial-gradient(900px 400px at 90% 90%, #ff4dff0a, transparent),
                     linear-gradient(180deg, #0b0f1a, #071226)`
      }}
    >
      {/* โลโก้ */}
      <div className="mb-8">
        <img
          src="/logo.png"
          alt="GAME ตัวตึง Logo"
          className="w-32 h-32 neon animate-pulse"
        />
      </div>

      <h1 className="text-5xl font-bold mb-6 neon">GAME ตัวตึง</h1>
      <p className="text-lg opacity-80 mb-10">
        ศูนย์รวมเกมและกิจกรรมธีมนีออน ฟ้า-ชมพู 💙💗
      </p>

      {/* ปุ่ม */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link href="/campaigns">
          <button className="w-full py-3 rounded-xl text-xl font-semibold text-white bg-white/10 border border-white/30 backdrop-blur-md hover:shadow-lg hover:bg-white/20 transition-all duration-200">
            🎁 ร่วมกิจกรรม
          </button>
        </Link>
        <Link href="/login">
          <button className="w-full py-3 rounded-xl text-xl font-semibold text-white bg-white/10 border border-white/30 backdrop-blur-md hover:shadow-lg hover:bg-white/20 transition-all duration-200">
            🔑 เข้าสู่ระบบ
          </button>
        </Link>
        <Link href="/register">
          <button className="w-full py-3 rounded-xl text-xl font-semibold text-white bg-white/10 border border-white/30 backdrop-blur-md hover:shadow-lg hover:bg-white/20 transition-all duration-200">
            ✍️ ลงทะเบียน
          </button>
        </Link>
      </div>
    </main>
  );
}
