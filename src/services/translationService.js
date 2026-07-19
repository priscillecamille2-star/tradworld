// Translation service — wraps external API calls

/**
 * Detect language of a given text
 * @param {string} text
 * @returns {Promise<string>} detected language code
 */
async function detectLanguage(text) {
  // TODO: implement detection
  return "fr";
}

/**
 * Translate text to target language(s)
 * @param {string} text
 * @param {string} sourceLang
 * @param {string[]} targetLangs
 */
async function translate(text, sourceLang, targetLangs) {
  // TODO: connect to DeepL or Google Translate API
  return targetLangs.map(lang => ({ lang, translation: "" }));
}

module.exports = { detectLanguage, translate };
