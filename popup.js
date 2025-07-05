// popup.js
document.getElementById("searchBox").addEventListener("keyup", async (e) => {
    if (e.key === "Enter") {
      const query = e.target.value;
      const resDiv = document.getElementById("results");
      resDiv.innerHTML = "Searching...";
  
      try {
        const response = await fetch("http://127.0.0.1:8000/semantic_search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ q:query, k: 5 })
        });
        const data = await response.json();
        console.log(data)
        resDiv.innerHTML = data.results.map(r => `<div>🔗<a href="${r.url}" target="_blank">${r.url}</a></div>`).join("");
      } catch (err) {
        resDiv.innerHTML = "⚠️ Failed to search.";
        console.error(err);
      }
    }
  });
  