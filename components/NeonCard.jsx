export default function NeonCard({ children, style }) {
  return (
    <div style={{
      padding: 12,
      borderRadius: 8,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
      boxShadow: '0 6px 30px rgba(0,229,255,0.04), 0 0 18px rgba(255,77,255,0.02) inset',
      border: '1px solid rgba(255,255,255,0.04)',
      ...style
    }}>{children}</div>
  )
}
