// pages/api/upload.js
import fs from 'fs';
import path from 'path';
import { IncomingForm } from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = new IncomingForm({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('❌ Gagal parsing form:', err);
      return res.status(500).json({ error: 'Gagal parsing form' });
    }

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    if (!file || !file.filepath) {
      return res.status(400).json({ error: 'Tidak ada file yang valid' });
    }

    try {
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const ext = path.extname(file.originalFilename || '');
      const filename = `profile_${Date.now()}${ext}`;
      const filePath = path.join(uploadsDir, filename);

      await fs.promises.copyFile(file.filepath, filePath);

      const fileUrl = `/uploads/${filename}`;
      return res.status(200).json({ url: fileUrl });
    } catch (copyErr) {
      return res.status(500).json({ error: 'Gagal menyimpan file' });
    }
  });
}
