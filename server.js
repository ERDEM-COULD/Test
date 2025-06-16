const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// public klasörünü statik olarak sun
app.use(express.static(path.join(__dirname, 'public')));

// IP endpointi
app.get('/get-ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
  res.json({ ip: ip, message: "IP başarıyla alındı" });
});

// Herhangi başka isteklerde index.html'i gönder (SPA için)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});

