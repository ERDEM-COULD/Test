const fs = require('fs');
const path = require('path');

app.post('/location', (req, res) => {
  console.log('Konum verisi alındı:', req.body);

  const filePath = path.join(__dirname, 'locations.json');
  let locations = [];

  // Eğer dosya varsa oku
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    locations = JSON.parse(data);
  }

  // Yeni konumu ekle
  locations.push(req.body);

  // Güncellenmiş listeyi dosyaya yaz
  fs.writeFileSync(filePath, JSON.stringify(locations, null, 2));

  res.json({ status: 'success', received: req.body });
});
