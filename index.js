const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("✅ 91-backend is running!");
});

app.get("/predict", (req, res) => {
  const prediction = {
    number: Math.floor(Math.random() * 100),
    color: ["Red", "Green", "Violet"][Math.floor(Math.random() * 3)],
    size: Math.random() > 0.5 ? "Big" : "Small"
  };
  res.json(prediction);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
