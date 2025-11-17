export default function Hero({ title, subtitle, ctaLabel = "Get Started", ctaHref = "/campaigns" }) {
  return (
    <section className="hero" style={{ padding: '48px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ flex: 1 }}>
            <h1>{title}</h1>
            <p style={{ maxWidth: 760 }}>{subtitle}</p>
            <div style={{ marginTop: 18 }}>
              <a href={ctaHref} className="btn primary" role="button">{ctaLabel}</a>
            </div>
          </div>
          <div style={{ width: 320, textAlign: 'right' }}>
            <div style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))', padding: 18, borderRadius: 12 }}>
              <strong>Production-ready</strong>
              <div style={{ marginTop: 8, color: 'var(--muted)' }}>Secure, monitored, and easy to operate.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
