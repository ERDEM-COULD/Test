const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// public klasörünü statik olarak servis et
app.use(express.static(path.join(__dirname, 'public')));

// JSON body için middleware (POST isteği varsa)
app.use(express.json());

// İstersen konum verisini buradan al
app.post('/location', (req, res) => {
  console.log('Konum verisi alındı:', req.body);
  // Burada dosyaya yazabilir veya DB'ye kaydedebilirsin
  res.json({ status: 'success', received: req.body });
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
