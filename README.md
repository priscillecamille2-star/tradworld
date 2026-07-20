# 🌍 Tradworld

Application de traduction multilingue avec détection automatique de langue, historique des traductions et glossaire de favoris.

## Fonctionnalités

- ✅ Traduction instantanée via l'API DeepL
- ✅ Détection automatique de la langue source
- 🔜 Historique des traductions
- 🔜 Glossaire / favoris
- 🔜 Support multi-langues (FR, EN, ES, AR et plus)

## Stack technique

- **Backend** : Node.js + Express
- **API de traduction** : [DeepL API](https://www.deepl.com/fr/pro-api)
- **Frontend** : HTML / CSS / JavaScript vanilla

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/priscillecamille2-star/tradworld.git
cd tradworld

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditer .env et ajouter ta clé DeepL
```

## Configuration

Crée un fichier `.env` à la racine :

```env
PORT=3000
DEEPL_API_KEY=ta_cle_deepl_ici
```

## Lancement

```bash
# Mode production
npm start

# Mode développement (avec rechargement automatique)
npm run dev
```

L'application sera disponible sur **http://localhost:3000**

## API Endpoints

| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/api/translate` | Traduire un texte |
| POST | `/api/translate/detect` | Détecter la langue |
| GET | `/api/history` | Historique des traductions |
| GET | `/api/glossary` | Glossaire de favoris |

## Licence

MIT
