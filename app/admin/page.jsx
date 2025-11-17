"use client";
import { useEffect, useState } from "react";
import NeonCard from "../../components/NeonCard";

export default function AdminPage() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adminKey, setAdminKey] = useState("");
  const [selected, setSelected] = useState(new Set());

  async function load() {
    setLoading(true);
    const res = await fetch("/api/campaigns");
    const data = await res.json();
    setCampaigns(data || []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  function toggle(id) {
    const s = new Set(selected);
    if (s.has(id)) s.delete(id); else s.add(id);
    setSelected(s);
  }

  async function removeOne(id) {
    if (!confirm("ลบแคมเปญนี้หรือไม่?")) return;
    await fetch(`/api/campaigns/${id}`, { method: 'DELETE', headers: { ...(adminKey ? { 'x-api-key': adminKey } : {}) } });
    load();
  }

  async function removeSelected() {
    if (selected.size === 0) return alert('ยังไม่ได้เลือก');
    if (!confirm('ลบรายการที่เลือกทั้งหมด?')) return;
    for (const id of selected) {
      await fetch(`/api/campaigns/${id}`, { method: 'DELETE', headers: { ...(adminKey ? { 'x-api-key': adminKey } : {}) } });
    }
    setSelected(new Set());
    load();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <div style={{ marginBottom: 12 }}>
        <input placeholder="Admin API Key (optional)" value={adminKey} onChange={(e)=>setAdminKey(e.target.value)} style={{ padding:8, width: '60%' }} />
        <button onClick={load} className="btn" style={{ marginLeft: 8 }}>Reload</button>
        <button onClick={removeSelected} className="btn danger" style={{ marginLeft: 8 }}>Delete Selected</button>
      </div>

      {loading ? <p>Loading...</p> : (
        campaigns.map(c => (
          <NeonCard key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <input type="checkbox" checked={selected.has(c.id)} onChange={() => toggle(c.id)} />
              <div>
                <div style={{ fontWeight: 700 }}>{c.title}</div>
                <div style={{ opacity: 0.85 }}>{c.description}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={()=>removeOne(c.id)} className="btn small danger">Delete</button>
            </div>
          </NeonCard>
        ))
      )}
    </div>
  );
}
