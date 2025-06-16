const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Statik dosyaları servis et (index.html gibi)
app.use(express.static(path.join(__dirname, 'public')));

// POST /accept — kullanıcı kabul ettiğinde bilgiler burada toplanır
app.post('/accept', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const userAgent = req.get('User-Agent');
  const location = req.body.location || null; // İstemciden gelen konum

  const info = {
    ip,
    userAgent,
    location,
    timestamp: new Date().toISOString()
  };

  console.log('Kabul edilen bilgiler:', info);

  // JSON dosyaya veya veritabanına kaydedebilirsin. Şimdilik konsola yazıyoruz.
  
  res.json({ status: 'Kabul edildi', info });
});

// Sunucuyu 3000 portunda başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sunucu port ${PORT} da çalışıyor...`));
