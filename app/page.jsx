import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Welcome to GAME168</h1>
      <p>Go to <Link href="/campaigns">Campaigns</Link> to view and manage campaigns.</p>
    </div>
  );
}