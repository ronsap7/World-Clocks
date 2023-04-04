function updateTime() {
  // Get the current time for each country
  const canadaTime = new Date().toLocaleString("en-US", { timeZone: "America/Vancouver" });
  const usTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  const brazilTime = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const argentinaTime = new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" });
  const franceTime = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
  const spainTime = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
  const germanyTime = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });
  const japanTime = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
  const chinaTime = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
  const egyptTime = new Date().toLocaleString("ar-EG", { timeZone: "Africa/Cairo" });
  const southAfricaTime = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" });
  const australiaTime = new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" });
  const newZealandTime = new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" });

  // Update the HTML with the current times
  document.getElementById("canada-clock").textContent = canadaTime;
  document.getElementById("us-clock").textContent = usTime;
  document.getElementById("brazil-clock").textContent = brazilTime;
  document.getElementById("argentina-clock").textContent = argentinaTime;
  document.getElementById("france-clock").textContent = franceTime;
  document.getElementById("spain-clock").textContent = spainTime;
  document.getElementById("germany-clock").textContent = germanyTime;
  document.getElementById("japan-clock").textContent = japanTime;
  document.getElementById("china-clock").textContent = chinaTime;
  document.getElementById("egypt-clock").textContent = egyptTime;
  document.getElementById("south-africa-clock").textContent = southAfricaTime;
  document.getElementById("australia-clock").textContent = australiaTime;
  document.getElementById("new-zealand-clock").textContent = newZealandTime;
}

// Update the clocks every second
setInterval(updateTime, 1000);