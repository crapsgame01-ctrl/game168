"use client";

export default function AdminDashboard() {
  const campaigns = [
    { id: 1, title: "Lucky Draw", status: "active" },
    { id: 2, title: "Spin Wheel", status: "active" },
  ];

  return (
    <main className="min-h-screen px-6 py-8"
      style={{ background: "linear-gradient(180deg, #1a0b26, #071226)" }}
    >
      <h1 className="text-4xl font-bold mb-6 neon">แดชบอร์ดผู้ดูแล</h1>
      <div className="flex flex-col gap-4">
        {campaigns.map(c => (
          <div key={c.id} className="p-4 rounded-xl bg-white/10 border border-white/30 backdrop-blur-md">
            <h2 className="text-xl font-semibold">{c.title}</h2>
            <p className="text-sm opacity-80">สถานะ: {c.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
