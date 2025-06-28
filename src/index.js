const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/predict", (req, res) => {
  res.json({
    number: Math.floor(Math.random() * 10),
    color: ["Red", "Green", "Violet"][Math.floor(Math.random() * 3)],
    size: Math.random() > 0.5 ? "Big" : "Small",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
