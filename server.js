const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Basit ana sayfa
app.get('/', (req, res) => {
  res.send('Merhaba, sözleşme kabul sunucusu çalışıyor!');
});

// Örnek POST endpoint
app.post('/sozlesme-kabul', (req, res) => {
  const userData = req.body;
  console.log('Kabul eden kullanıcı verisi:', userData);
  // Burada veriyi json dosyasına veya DB'ye kaydedebilirsin.
  res.json({ status: 'kabul alındı', data: userData });
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});

