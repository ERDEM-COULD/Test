const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000; // ← Burayı değiştirdik

app.use(express.json());
app.use(express.static("public"));

app.post("/api/accept", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userAgent = req.headers["user-agent"];

  const data = {
    ip,
    userAgent,
    acceptedAt: new Date().toISOString(),
  };

  const filePath = "accepted_users.json";
  const existing = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath))
    : [];

  existing.push(data);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  res.json({ status: "ok", saved: data });
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
