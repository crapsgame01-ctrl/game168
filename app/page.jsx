import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div>
      <Hero
        title="GAME168 — Campaign operations, simplified"
        subtitle="A secure, production-ready platform for managing marketing campaigns. Monitor health, review assets, and operate with confidence."
        ctaLabel="ดูแคมเปญทั้งหมด"
        ctaHref="/campaigns"
      />
      
      <main className="container">
        <h2>Trusted by teams that move fast</h2>
        <p className="muted">This console provides quick access to operational tools and diagnostics — accessible to admins and operators.</p>
      </main>
    </div>
  );
}
