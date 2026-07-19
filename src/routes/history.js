// History routes
const express = require("express");
const router = express.Router();

// GET /api/history
router.get("/", (req, res) => {
  res.json({ history: [] });
});

// DELETE /api/history/:id
router.delete("/:id", (req, res) => {
  res.json({ message: "Entry deleted" });
});

module.exports = router;
