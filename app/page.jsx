export default function Home() {
  return (
    <main
      className="
        min-h-screen 
        text-white 
        px-6 
        py-16 
        bg-gradient-to-b from-[#0b1623] to-[#07101a]
      "
    >

      {/* NAV */}
      <nav className="flex gap-6 text-sm font-semibold">
        <a href="/" className="hover:opacity-80">เกม168</a>
        <a href="/campaigns" className="hover:opacity-80">การตลาด</a>
        <a href="/system" className="hover:opacity-80">ผู้ดูแลระบบ</a>

        <span className="ml-auto text-gray-400">เวอร์ชั่น 0.1</span>
      </nav>

      {/* HERO */}
      <section className="mt-20 max-w-3xl">

        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          GAME168 — การดำเนินการ<br />แคมเปญแบบง่าย
        </h1>

        <p className="mt-4 text-gray-300 max-w-xl">
          แพลตฟอร์มที่พร้อมใช้งานสำหรับการตรวจสอบแคมเปญการตลาด 
          ตรวจสอบข้อมูล และจัดการงานได้อย่างมั่นใจ
        </p>

        {/* BUTTON GROUP (เหมือนบนรูป 3 ปุ่มแนวนอน) */}
        <div className="flex flex-wrap gap-4 mt-8">

          <a
            href="/create"
            className="
              px-10 py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-[#19c3fb] to-[#6c4dfc]
              shadow-[0_0_15px_#19c3fb]
              hover:scale-105 transition
            "
          >
            สร้างกิจกรรม
          </a>

          <a
            href="/signup"
            className="
              px-10 py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-[#19c3fb] to-[#6c4dfc]
              shadow-[0_0_15px_#19c3fb]
              hover:scale-105 transition
            "
          >
            ลงทะเบียน
          </a>

          <a
            href="/login"
            className="
              px-10 py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-[#19c3fb] to-[#6c4dfc]
              shadow-[0_0_15px_#19c3fb]
              hover:scale-105 transition
            "
          >
            ล็อกอิน
          </a>

        </div>

      </section>

      {/* DESCRIPTION */}
      <section className="mt-20 max-w-2xl text-center mx-auto">
        <h2 className="text-lg font-bold">
          ได้รับความไว้วางใจจากทีมงานที่เคลื่อนใหวรวดเร็ว
        </h2>

        <p className="text-gray-400 mt-2">
          แพลตฟอร์มตรวจสอบที่ช่วยให้ทีมทำงานได้อย่างรวดเร็ว 
          รองรับการปฏิบัติงานแบบเรียลไทม์
        </p>
      </section>

      {/* ACTIVITY CENTER */}
      <div className="flex justify-center mt-16">
        <a
          href="/campaigns"
          className="
            px-12 py-4 rounded-full font-semibold text-white
            bg-gradient-to-r from-[#19c3fb] to-[#6c4dfc]
            shadow-[0_0_18px_#19c3fb]
            hover:scale-110 transition
          "
        >
          ศูนย์กิจกรรม
        </a>
      </div>

      {/* FOOTER */}
      <footer className="mt-20 text-center text-gray-500">
        © 2025 GAME168 คนเดียว
      </footer>

    </main>
  );
}
