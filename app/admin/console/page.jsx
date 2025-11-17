import SystemConsole from "@/components/SystemConsole";

export default function AdminConsolePage() {
  return (
    <main className="container" style={{ padding: 24 }}>
      <h1>Admin — System Console</h1>
      <p className="muted">Tools for quick system checks and diagnostics.</p>
      <SystemConsole />
    </main>
  );
}
