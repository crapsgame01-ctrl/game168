export default function Home() {
  return (
    <main className="min-h-screen bg-[#07101a] text-white px-6 py-16">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          GAME168 — การดำเนินการแคมเปญแบบง่าย
        </h1>

        <p className="mt-4 text-gray-300">
          แพลตฟอร์มที่มั่นคงที่พร้อมใช้งานสำหรับการจัดการแคมเปญการตลาด  
          ตรวจสอบสถานะ ตรวจสอบทรัพยากรทีม และดูผลงานได้อย่างมั่นใจ
        </p>

        {/* Buttons Top */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">

          <a
            href="/create"
            className="px-8 py-3 rounded-full font-semibold text-white
                       bg-gradient-to-r from-[#19c3fb] to-[#6c4dfc] 
                       shadow-[0_0_10px_#2ffaff] hover:scale-105 transition">
            สร้างกิจกรรม
          </a>

          <a
            href="/signup"
            className="px-8 py-3 rounded-full font-semibold text-white
                       bg-gradient-to-r from-[#19c3fb] to-[#6c4dfc] 
                       shadow-[0_0_10px_#2ffaff] hover:scale-105 transition">
            ลงทะเบียน
          </a>

          <a
            href="/login"
            className="px-8 py-3 rounded-full font-semibold text-white
                       bg-gradient-to-r from-[#19c3fb] to-[#6c4dfc] 
                       shadow-[0_0_10px_#2ffaff] hover:scale-105 transition">
            ล็อกอิน
          </a>

        </div>
      </div>

      {/* Section */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-xl font-bold">ได้รับความไว้วางใจจากทีมงานที่เคลื่อนไหวรวดเร็ว</h2>
        <p className="text-gray-400 mt-3">
          คอนโซลที่ช่วยให้ท่านดำเนินการแคมเปญและการทำงานได้อย่างรวดเร็ว  
          ซึ่งผู้ดูแลระบบและผู้ปฏิบัติงานสามารถเข้าถึงได้
        </p>
      </div>

      {/* Activity Center Button */}
      <div className="flex justify-center mt-16">
        <a
          href="/campaigns"
          className="px-10 py-4 rounded-full font-semibold text-white
                     bg-gradient-to-r from-[#19c3fb] to-[#6c4dfc]
                     shadow-[0_0_12px_#2ffaff] hover:scale-110 transition">
          ศูนย์กิจกรรม
        </a>
      </div>

      <footer className="text-center mt-20 text-gray-500">
        © 2025 GAME168
      </footer>

    </main>
  );
}
