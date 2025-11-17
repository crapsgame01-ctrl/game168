"use client";
import Link from "next/link";

export default function Navbar() {
	return (
		<header className="site-header">
			<nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
					<Link href="/" className="neon" aria-label="GAME168 home" style={{ fontWeight: 800, fontSize: 18 }}>GAME168</Link>
					<Link href="/campaigns" className="glow">Campaigns</Link>
					<Link href="/admin" className="glow">Admin</Link>
				</div>

				<div>
					<span className="muted">v0.1</span>
				</div>
			</nav>
		</header>
	);
}
