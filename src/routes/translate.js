// Translation routes
const express = require("express");
const router = express.Router();

// POST /api/translate
router.post("/", async (req, res) => {
  const { text, sourceLang, targetLangs } = req.body;
  // TODO: integrate translation API (DeepL / Google Translate)
  res.json({ message: "Translation endpoint ready", text, sourceLang, targetLangs });
});

module.exports = router;
