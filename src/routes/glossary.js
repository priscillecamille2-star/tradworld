// Glossary / Favorites routes
const express = require("express");
const router = express.Router();

// GET /api/glossary
router.get("/", (req, res) => {
  res.json({ glossary: [] });
});

// POST /api/glossary
router.post("/", (req, res) => {
  const { word, translation, lang } = req.body;
  res.json({ message: "Word added to glossary", word, translation, lang });
});

module.exports = router;
