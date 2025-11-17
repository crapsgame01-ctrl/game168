"use client";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav style={{ padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
			<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
				<Link href="/" className="neon" style={{ fontWeight: 800, fontSize: 18 }}>GAME168</Link>
				<Link href="/campaigns" className="glow">Campaigns</Link>
				<Link href="/admin" className="glow">Admin</Link>
			</div>
			<div>
				<a href="#" className="glow" style={{ textDecoration: 'none' }}>v0.1</a>
			</div>
		</nav>
	);
}
