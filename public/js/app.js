document.getElementById("translateBtn").addEventListener("click", async () => {
  const text = document.getElementById("inputText").value;
  const sourceLang = document.getElementById("sourceLang").value;
  const targetLang = document.getElementById("targetLang").value;
  const outputDiv = document.getElementById("output");

  if (!text.trim()) {
    outputDiv.innerText = "Veuillez saisir un texte à traduire.";
    return;
  }

  outputDiv.innerText = "Traduction en cours...";

  try {
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, sourceLang, targetLangs: [targetLang] })
    });

    const data = await res.json();

    if (data.success && data.results && data.results.length > 0) {
      const detected = data.results[0].detectedSourceLang || sourceLang;
      outputDiv.innerHTML = `
        <p><strong>Langue détectée :</strong> ${detected.toUpperCase()}</p>
        <p><strong>Traduction :</strong> ${data.results[0].translation}</p>
      `;
    } else {
      outputDiv.innerText = "Erreur : " + (data.error || "Réponse inattendue");
    }
  } catch (err) {
    outputDiv.innerText = "Erreur réseau : " + err.message;
  }
});
