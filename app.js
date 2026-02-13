async function generateCode() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");

  output.textContent = "Generating...";

  const response = await fetch("https://YOUR_WORKER_URL.workers.dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  const data = await response.json();
  output.textContent = data.result;
}
