const express = require('express');
const router = express.Router();
const { translate, detectLanguage } = require('../services/translationService');

// POST /api/translate
router.post('/', async (req, res) => {
  try {
    const { text, sourceLang = 'auto', targetLangs = ['EN'] } = req.body;
    if (!text || !text.trim()) {
      return res.status(400).json({ error: 'Text is required' });
    }
    const results = await translate(text, sourceLang, targetLangs);
    res.json({ success: true, results });
  } catch (err) {
    console.error('Translation error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// POST /api/translate/detect
router.post('/detect', async (req, res) => {
  try {
    const { text } = req.body;
    const lang = await detectLanguage(text);
    res.json({ detectedLang: lang });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
