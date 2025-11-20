export default function Home() {
  return (
    <main className="min-h-screen bg-[#07101a] text-white px-6 py-16">

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-3xl md:text-4xl font-bold">
          GAME168 — แพลตฟอร์มตรวจสอบ และบริหารแคมเปญ
        </h1>

        <p className="mt-4 text-gray-300">
          แพลตฟอร์มตรวจสอบที่พร้อมใช้งานสำหรับการจัดการแคมเปญการตลาด  
          วิเคราะห์ข้อมูล ตรวจสอบทรัพยากรทีม และดำเนินงานได้อย่างมั่นใจ
        </p>

        {/* Button Group */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {/* Create */}
          <a
            href="/create"
            className="px-10 py-3 rounded-full font-semibold text-white
                       bg-gradient-to-r from-[#19c3fb] to-[#6c4dfc]
                       shadow-[0_0_12px_#2ffaff] hover:scale-105 transition">
            สร้างกิจกรรม
          </a>

          {/* Signup */}
          <a
            href="/signup"
            className="px-10 py-3 rounded-full font-semibold text-white
                       bg-gradient-to-r from-[#19c3fb] to-[#6c4dfc]
                       shadow-[0_0_12px_#2ffaff] hover:scale-105 transition">
            ลงทะเบียน
          </a>

          {/* Login */}
          <a
            href="/login"
            className="px-10 py-3 rounded-full font-semibold text-white
                       bg-gradient-to-r from-[#19c3fb] to-[#6c4dfc]
                       shadow-[0_0_12px_#2ffaff] hover:scale-105 transition">
            ล็อกอิน
          </a>

        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-xl font-bold">แพลตฟอร์มตรวจสอบ และบริหารงานแบบรวดเร็ว</h2>
        <p className="text-gray-400 mt-3">
          ระบบบริหารที่ช่วยให้ทีมงานเข้าถึงข้อมูลสำคัญได้ทันที  
          รองรับการทำงานแบบเรียลไทม์ เพื่อความรวดเร็วในการดำเนินงาน
        </p>
      </div>

      {/* Activity Center Button */}
      <div className="flex justify-center mt-20">
        <a
          href="/campaigns"
          className="px-12 py-4 rounded-full font-semibold text-white
                     bg-gradient-to-r from-[#19c3fb] to-[#6c4dfc]
                     shadow-[0_0_15px_#2ffaff] hover:scale-110 transition">
          ศูนย์กิจกรรม
        </a>
      </div>

      <footer className="text-center mt-20 text-gray-500">
        © 2025 GAME168
      </footer>
    </main>
  );
}
