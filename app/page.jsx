import Link from 'next/link';

// --- Component: Hero Section ---
const Hero = ({ title, subtitle, ctaLabel, ctaHref }) => {
    return (
        <section className="text-center py-20 md:py-32">
            <div className="คอนเทนเนอร์">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 นีออน tracking-tight leading-tight">
                    {title}
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-80">
                    {subtitle}
                </p>
                <Link href={ctaHref}>
                    {/* 🛠️ แก้ไขตรงนี้: ปุ่มสีขาว */}
                    <a className="btn inline-block px-8 py-3 rounded-lg font-semibold text-lg" 
                       style={{ 
                           backgroundColor: '#FFFFFF', // สีพื้นหลังขาว
                           color: '#0b0f1a',          // สีตัวอักษรเป็นสีพื้นหลังเข้มของเรา
                           boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)' // เพิ่มเงาเล็กน้อย
                       }}>
                        {ctaLabel}
                    </a>
                </Link>
            </div>
        </section>
    );
};
// -----------------------------------------------------------------

export default function HomePage() {
  return (
    <div>
      <Hero
        title="GAME168 — Campaign operations, simplified"
        subtitle="A secure, production-ready platform for managing marketing campaigns. Monitor health, review assets, and operate with confidence."
        ctaLabel="ดูแคมเปญทั้งหมด"
        ctaHref="/campaigns"
      />
      
      {/* ส่วนเนื้อหาหลักตามภาพ "Trusted by teams that move fast" */}
      <main className="คอนเทนเนอร์ pb-20">
        <h2 className="text-3xl font-bold mb-4">
          ได้รับการไว้วางใจจากทีมงานที่เคลื่อนไหวรวดเร็ว
        </h2>
        <p className="opacity-70 max-w-3xl mb-12">
          คอนโซลนี้ช่วยให้เข้าถึงเครื่องมือปฏิบัติการและการวินิจฉัยได้อย่างรวดเร็ว 
          ซึ่งผู้ดูแลระบบและผู้ปฏิบัติงานสามารถเข้าถึงได้
        </p>

        {/* ตัวอย่างการใช้ Card/Panel ที่เราเพิ่มสไตล์เข้าไปใน globals.css */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="panel">
                <h3 className="text-xl font-semibold mb-3 นีออน">Metrics Overview</h3>
                <p className="text-sm opacity-70">เข้าถึงข้อมูลสำคัญของแคมเปญได้แบบเรียลไทม์เพื่อการตัดสินใจที่แม่นยำ</p>
            </div>
            <div className="panel">
                <h3 className="text-xl font-semibold mb-3 นีออน">Security Health</h3>
                <p className="text-sm opacity-70">ตรวจสอบสถานะความปลอดภัยของทุก Assets ภายใต้การดูแล</p>
            </div>
            <div className="panel">
                <h3 className="text-xl font-semibold mb-3 นีออน">Deployment Logs</h3>
                <p className="text-sm opacity-70">บันทึกการใช้งานและการเปลี่ยนแปลงล่าสุดของระบบปฏิบัติการ</p>
            </div>
        </div>
      </main>
      
      {/* Footer Section */}
      <footer className="w-full text-center py-6 mt-10" style={{ borderTop: '1px solid #333', color: '#888' }}>
        <div className="คอนเทนเนอร์">
            <p style={{ fontSize: '18px', margin: 0 }}>
                ข้อมูลการสนับสนุนเพิ่มเติม: ติดต่อฝ่ายปฏิบัติการสำหรับข้อมูลเชิงลึกด้านความปลอดภัย
            </p>
            <p style={{ fontSize: '14px', margin: 0, marginTop: '0.5rem' }}>
                &copy; 2025 GAME168. All rights reserved. | Security Level A.
            </p>
        </div>
      </footer>
    </div>
  );
}

