const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// CORS izin verelim frontend için (istersen pakete cors da kurabilirsin)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// IP'yi JSON olarak dönen endpoint
app.get('/get-ip', (req, res) => {
  // Gerçek IP için x-forwarded-for kontrolü (proxy arkasındaysan)
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;

  // JSON olarak dönebiliriz
  res.json({
    ip: ip,
    message: "IP başarıyla alındı"
  });
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});

