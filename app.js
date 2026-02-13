async function generateCode() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");

  output.textContent = "Generating...";

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_OPENROUTER_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "qwen/qwen3-coder:free",
      messages: [
        {
          role: "system",
          content: "You are an expert developer. Return only clean working code."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    })
  });

  const data = await response.json();
  output.textContent = data.choices[0].message.content;
}
