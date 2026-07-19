document.getElementById("translateBtn").addEventListener("click", async () => {
  const text = document.getElementById("inputText").value;
  const sourceLang = document.getElementById("sourceLang").value;
  const targetLang = document.getElementById("targetLang").value;

  if (!text.trim()) return;

  const res = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, sourceLang, targetLangs: [targetLang] })
  });

  const data = await res.json();
  document.getElementById("output").innerText = data.translation || JSON.stringify(data);
});
