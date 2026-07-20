const deepl = require('deepl-node');

const deeplClient = new deepl.Translator(process.env.DEEPL_API_KEY);

/**
 * Detect language of a given text
 * @param {string} text
 * @returns {Promise<string>} detected language code
 */
async function detectLanguage(text) {
  const result = await deeplClient.translateText(text, null, 'en-US');
  return result.detectedSourceLang;
}

/**
 * Translate text to one or more target languages
 * @param {string} text
 * @param {string|null} sourceLang - null for auto-detection
 * @param {string[]} targetLangs
 */
async function translate(text, sourceLang, targetLangs) {
  const results = await Promise.all(
    targetLangs.map(async (lang) => {
      const result = await deeplClient.translateText(
        text,
        sourceLang === 'auto' ? null : sourceLang,
        lang
      );
      return {
        lang,
        translation: result.text,
        detectedSourceLang: result.detectedSourceLang
      };
    })
  );
  return results;
}

module.exports = { detectLanguage, translate };
