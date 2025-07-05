// content.js
(async () => {
    try {
      const url = window.location.href;
      const title = document.title;
      const content = document.body.innerText;  // limit to 10k chars
      const timestamp = new Date().toISOString();
      console.log("content=", content)
      const data = {
        url,
        title,
        content,
        timestamp
      };
  
      await fetch("http://127.0.0.1:8000/page_visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error("Failed to log page visit:", error);
    }
  })();
  