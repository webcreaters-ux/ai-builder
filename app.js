async function generateCode() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");

  output.textContent = "Generating...";

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
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
