"use client";

import { useState } from "react";

export default function AdminBlog() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("AI & Automation");
  const [author, setAuthor] = useState("Admin");
  const [slug, setSlug] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload = {
      title,
      excerpt,
      content,
      category,
      author,
      date: new Date().toISOString().slice(0, 10),
      readTime: Math.max(3, Math.ceil(content.split(" ").length / 200)),
      featured: false,
      image: "bg-gradient-to-br from-indigo-500 to-purple-600",
      imageIcon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    };

    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setTitle(''); setExcerpt(''); setContent(''); setSlug('');
      alert('Post saved.');
    } else {
      alert('Failed to save post');
    }

    setSaving(false);
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-bold mb-6">Create Blog Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full rounded border px-4 py-3" />
          <input value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Excerpt" className="w-full rounded border px-4 py-3" />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" className="w-full rounded border px-4 py-3" />
          <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="w-full rounded border px-4 py-3" />
          <input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="Slug (optional)" className="w-full rounded border px-4 py-3" />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content (plain text)" rows={10} className="w-full rounded border px-4 py-3" />
          <div>
            <button disabled={saving} type="submit" className="rounded bg-black px-6 py-3 text-white">{saving ? 'Saving...' : 'Save Post'}</button>
          </div>
        </form>
      </main>
    </div>
  );
}
