function startDraw() {
  const input = document.getElementById("nameInput").value.trim();
  const resultDiv = document.getElementById("drawResult");

  let names = input.split("\n").map(n => n.trim()).filter(n => n !== "");

  if (names.length === 0) {
    resultDiv.textContent = "⚠️ Ajoutez des noms avant de tirer !";
    return;
  }

  // Animation de sélection rapide
  let i = 0;
  let interval = setInterval(() => {
    resultDiv.textContent = names[i % names.length];
    i++;
  }, 100);

  // Après 3 secondes, stop animation et choisir un nom
  setTimeout(() => {
    clearInterval(interval);
    let chosen = names[Math.floor(Math.random() * names.length)];
    resultDiv.textContent = "🎉 Gagnant : " + chosen;
  }, 3000);
}

function resetDraw() {
  document.getElementById("nameInput").value = "";
  document.getElementById("drawResult").textContent = "Le nom s'affichera ici";
}
