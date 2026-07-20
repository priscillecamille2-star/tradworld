require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const translateRoutes = require('./routes/translate');
const historyRoutes = require('./routes/history');
const glossaryRoutes = require('./routes/glossary');

app.use(express.json());
app.use(express.static('public'));

app.use('/api/translate', translateRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/glossary', glossaryRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../public/index.html');
});

app.listen(PORT, () => {
  console.log(`🌍 Tradworld running on http://localhost:${PORT}`);
});

module.exports = app;
