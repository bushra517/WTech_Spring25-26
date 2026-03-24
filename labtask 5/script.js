document.getElementById("analyzeBtn").addEventListener("click", analyzeText);

function analyzeText() {
  const text = document.getElementById("inputText").value;
  const resultDiv = document.getElementById("result");

  const trimmedText = text.trim();

  if (trimmedText === "") {
    resultDiv.innerHTML = "<p class='error'>Please enter some text.</p>";
    return;
  }

  
  const charCount = text.length;

  
  const words = trimmedText.split(/\s+/);
  const wordCount = words.length;

  
  const reversedText = text.split("").reverse().join("");

  resultDiv.innerHTML = `
    <p><strong>Total Characters:</strong> ${charCount}</p>
    <p><strong>Total Words:</strong> ${wordCount}</p>
    <p><strong>Reversed Text:</strong><br>${reversedText}</p>
  `;
}