"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import Auth from "../../components/Auth";
import NeonCard from "../../components/NeonCard";

export default function CampaignPage() {
  const [campaigns, setCampaigns] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", image: null });
  const [uploading, setUploading] = useState(false);
  const [adminKey, setAdminKey] = useState("");

  async function load() {
    const res = await fetch("/api/campaigns");
    const data = await res.json();
    setCampaigns(data || []);
  }

  async function uploadImage(file) {
    if (!file) return null;
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    setUploading(true);
    const { data, error } = await supabase.storage
      .from("campaign-images")
      .upload(fileName, file, { cacheControl: "3600", upsert: false });
    setUploading(false);
    if (error) {
      console.error("Upload error:", error.message);
      return null;
    }
    const { data: urlData } = supabase.storage.from("campaign-images").getPublicUrl(fileName);
    return urlData?.publicUrl || null;
  }

  async function submit() {
    let imageUrl = null;
    if (form.image) {
      imageUrl = await uploadImage(form.image);
    }
    await fetch("/api/campaigns", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(adminKey ? { "x-api-key": adminKey } : {}) },
      body: JSON.stringify({ title: form.title, description: form.description, image: imageUrl }),
    });
    setForm({ title: "", description: "", image: null });
    load();
  }

  async function remove(id) {
    if (!confirm("ต้องการลบแคมเปญนี้หรือไม่?")) return;
    await fetch(`/api/campaigns/${id}`, { method: "DELETE", headers: { ...(adminKey ? { "x-api-key": adminKey } : {}) } });
    load();
  }

  async function edit(c) {
    const title = prompt("แก้ไขชื่อแคมเปญ:", c.title);
    if (title === null) return;
    const description = prompt("แก้ไขรายละเอียด:", c.description);
    if (description === null) return;
    await fetch(`/api/campaigns/${c.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...(adminKey ? { "x-api-key": adminKey } : {}) },
      body: JSON.stringify({ title, description, image: c.image }),
    });
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="page-root">
      <h1>🎯 Campaigns</h1>

      <NeonCard style={{ marginBottom: 12 }}>
        <div className="form">
          <div style={{ marginBottom: 8 }}>
            <Auth onChange={() => load()} />
          </div>
        <div style={{ marginBottom: 8 }}>
          <input
            placeholder="Admin API Key (optional for mutates)"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            style={{ width: '100%', padding: 8, borderRadius: 6, marginBottom: 8 }}
          />
        </div>
        <input
          placeholder="ชื่อแคมเปญ"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <br />
        <textarea
          placeholder="รายละเอียด"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>
        <br />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        />
        <br />
        <button onClick={submit} disabled={uploading} className="btn">
          {uploading ? "กำลังอัปโหลด..." : "เพิ่มแคมเปญ"}
        </button>
        </div>
      </NeonCard>

      <h2>📌 รายการทั้งหมด</h2>
      <div className="list">
        {campaigns.map((c) => (
          <NeonCard key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0 }}>{c.title}</h3>
                <p style={{ margin: 0 }}>{c.description}</p>
              </div>
              {c.image ? (<img src={c.image} alt={c.title} className="thumb" />) : null}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => edit(c)} className="btn small">แก้ไข</button>
              <button onClick={() => remove(c.id)} className="btn small danger">ลบ</button>
            </div>
          </NeonCard>
        ))}
      </div>
      <style jsx>{`
        .page-root { padding: 20px; color: #e6f7ff; }
        .form input, .form textarea { width: 100%; padding: 8px; margin-bottom: 8px; border-radius: 6px; border: 1px solid #333; background: rgba(255,255,255,0.03); color: #fff }
        .btn { background: linear-gradient(90deg,#ff4dff,#00e5ff); color: #001; padding: 8px 12px; border-radius: 8px; border: none; cursor: pointer }
        .btn.small { padding: 6px 10px; font-size: 14px }
        .btn.danger { background: linear-gradient(90deg,#ff6b6b,#ff3b3b); color: #fff }
        .list { margin-top: 12px }
        .card { display:flex; justify-content:space-between; align-items:center; padding:12px; border-bottom:1px solid rgba(255,255,255,0.06) }
        .thumb { max-width:120px; max-height:80px; border-radius:6px; object-fit:cover }
      `}</style>
    </div>
  );
}
