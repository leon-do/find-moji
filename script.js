// number of emojis on screen
const max = 260;

// randomly pick an emoji to find
const findIndex = Math.floor(Math.random() * max);
const findEmoji = emojis.splice(findIndex, 1);

// set title
document.getElementById("title").innerHTML = `🔍 ${findEmoji} 🔎`;

// generate emojis
let html = "";
for (let i = 0; i < max; i++) {
  if (i === findIndex) {
    html += findEmoji;
    continue;
  }
  html += emojis[Math.floor(Math.random() * emojis.length)];
}

// display emojis on dom
document.getElementById("emojis").innerHTML = html;

// convert dom to canvas
html2canvas(document.querySelector("#background")).then((canvas) => {
  document.body.appendChild(canvas);
  document.getElementById("background").style.display = "none";

  // download
  let canvasUrl = canvas.toDataURL("image/jpeg", 0.5);
  console.log(canvasUrl);
  const createEl = document.createElement("a");
  createEl.href = canvasUrl;
  createEl.download = "download-this-canvas";
  createEl.click();
  createEl.remove();
});
