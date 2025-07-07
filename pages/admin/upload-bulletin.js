'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { getCurrentUser } from '../../lib/auth';
import LayoutAdmin from '@/components/layoutadmin';

export default function PostBulletinPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [form, setForm] = useState({
    title: '',
    content: '',
    imageURLs: [],
    author: '',
    category: '',
    references: '',
    tags: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      if (!currentUser || currentUser.role !== 'admin') {
        alert('❌ Akses ditolak.');
        return router.push('/login');
      }

      setUser(currentUser);
      setForm((prev) => ({
        ...prev,
        author: currentUser.nama || currentUser.email || 'Admin HIMA',
      }));
    };

    fetchUser();
  }, [router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMultipleImageUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    const urls = [];

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append('file', files[i]);

      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const result = await res.json();
        if (!res.ok) throw new Error(result.error);
        urls.push(result.url);
      } catch (err) {
        console.error('Upload error:', err);
        alert('❌ Gagal upload gambar ' + files[i].name);
      }
    }

    setForm((prev) => ({ ...prev, imageURLs: [...prev.imageURLs, ...urls] }));
    setUploading(false);
  };

  const handleRemoveImage = (index) => {
    setForm((prev) => {
      const updated = [...prev.imageURLs];
      updated.splice(index, 1);
      return { ...prev, imageURLs: updated };
    });
  };

  const validateForm = () => {
    const newErrors = [];
    const wordCount = form.content.trim().split(/\s+/).length;
    if (wordCount < 50) newErrors.push('Minimal isi bulletin adalah 50 kata.');

    const tags = form.tags.split(',').map((t) => t.trim()).filter(Boolean);
    if (tags.length < 8) newErrors.push('Minimal harus ada 8 tag.');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await addDoc(collection(db, 'bulletin'), {
        title: form.title,
        content: form.content,
        imageURLs: form.imageURLs,
        author: form.author,
        category: form.category,
        reference: form.references.split(',').map(r => r.trim()).filter(Boolean),
        tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
        createdAt: serverTimestamp(),
      });

      alert('✅ Bulletin berhasil diposting');
      router.push('/admin/bulletin-list');
    } catch (err) {
      alert('❌ Gagal menyimpan: ' + err.message);
      console.error('Firestore Error:', err);
    }
  };

  return (
    <>
      <Head>
        <title>{form.title ? `${form.title} | Bulletin HIMA` : 'Posting Bulletin | HIMA'}</title>
        <meta name="description" content={form.content?.slice(0, 150)} />
      </Head>

      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="flex-1 max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">📝 Posting Bulletin Baru</h2>

          {errors.length > 0 && (
            <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
              <ul className="list-disc list-inside space-y-1">
                {errors.map((e, i) => <li key={i}>⚠️ {e}</li>)}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Judul Bulletin</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Judul..."
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Kategori</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded"
              >
                <option value="">-- Pilih Kategori --</option>
                <option value="Informasi">Informasi</option>
                <option value="Kegiatan">Kegiatan</option>
                <option value="Pengumuman">Pengumuman</option>
                <option value="Artikel">Artikel</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Isi Bulletin</label>
              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                rows={8}
                placeholder="Tulis isi bulletin (min 50 kata)"
                className="w-full border border-gray-300 px-4 py-2 rounded resize-y"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Referensi (pisahkan dengan koma)</label>
              <textarea
                name="references"
                value={form.references}
                onChange={handleChange}
                placeholder="Contoh: https://example1.com, https://example2.com"
                rows={2}
                className="w-full border border-gray-300 px-4 py-2 rounded resize-y"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Tags (min 8, pisahkan dengan koma)</label>
              <input
                name="tags"
                value={form.tags}
                onChange={handleChange}
                placeholder="Contoh: hima, event, kampus, kegiatan, seminar, info, bulletin, pengumuman"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Upload Gambar (boleh lebih dari 1)</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleMultipleImageUpload}
                className="w-full text-sm text-gray-600"
              />
              {uploading && <p className="text-sm text-gray-500 mt-1">📤 Mengunggah gambar...</p>}
{form.imageURLs.length > 0 && (
  <div className="flex gap-2 mt-2 flex-wrap">
    {form.imageURLs.map((url, i) => (
      <div key={i} className="relative group w-12 h-12">
        <img
          src={url}
          alt={`img-${i}`}
          className="w-full h-full object-cover rounded border shadow"
        />
        <button
          type="button"
          onClick={() => handleRemoveImage(i)}
          className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white text-xs px-1 py-0.5 rounded-full"
        >
          ✖
        </button>
      </div>
    ))}
  </div>
)}
            </div>

            <p className="text-gray-600 mt-2">
              <strong>Penulis:</strong> {form.author || 'Memuat...'}
            </p>

            <button
              type="submit"
              disabled={uploading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded w-full md:w-auto"
            >
              🚀 Posting Sekarang
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

PostBulletinPage.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};
