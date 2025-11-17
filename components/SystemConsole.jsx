"use client";
import { useState } from "react";

export default function SystemConsole() {
  const [health, setHealth] = useState(null);
  const [campaigns, setCampaigns] = useState(null);
  const [loadingHealth, setLoadingHealth] = useState(false);
  const [loadingCampaigns, setLoadingCampaigns] = useState(false);
  const [error, setError] = useState(null);

  async function runHealth() {
    setError(null);
    setLoadingHealth(true);
    try {
      const res = await fetch("/api/health");
      const json = await res.json();
      setHealth({ status: res.status, body: json });
    } catch (err) {
      setError(String(err));
    } finally {
      setLoadingHealth(false);
    }
  }

  async function loadCampaigns() {
    setError(null);
    setLoadingCampaigns(true);
    try {
      const res = await fetch("/api/campaigns");
      const json = await res.json();
      setCampaigns({ status: res.status, body: json });
    } catch (err) {
      setError(String(err));
    } finally {
      setLoadingCampaigns(false);
    }
  }

  return (
    <section className="system-console" aria-label="System console">
      <h2>System Console</h2>
      <p className="muted">Run quick health checks and API probes from the browser.</p>

      <div className="console-row">
        <button className="btn center-action" onClick={runHealth} disabled={loadingHealth}>
          {loadingHealth ? "Checking..." : "Run Health Check"}
        </button>
        <div className="console-result">
          {health ? (
            <pre>{JSON.stringify(health, null, 2)}</pre>
          ) : (
            <span className="muted">No result yet</span>
          )}
        </div>
      </div>

      <div className="console-row">
        <button className="btn center-action" onClick={loadCampaigns} disabled={loadingCampaigns}>
          {loadingCampaigns ? "Loading..." : "Fetch /api/campaigns"}
        </button>
        <div className="console-result">
          {campaigns ? (
            <pre style={{ maxHeight: 240, overflow: "auto" }}>{JSON.stringify(campaigns, null, 2)}</pre>
          ) : (
            <span className="muted">No campaigns fetched</span>
          )}
        </div>
      </div>

      {error && (
        <div role="alert" className="console-error">{error}</div>
      )}

      <div style={{ marginTop: 18 }}>
        <a href="/admin" className="glow">Back to Admin</a>
      </div>
    </section>
  );
}
