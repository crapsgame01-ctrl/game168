"use client";
import Link from "next/link";

export default function CenterButton({ href = "/campaigns", label = "Primary Action" }) {
  return (
    <div className="center-action-container" aria-hidden={false}>
      <Link href={href}>
        <button className="center-action" aria-label={label}>
          {label}
        </button>
      </Link>
    </div>
  );
}
