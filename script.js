let container = document.querySelector(".container");

let gridSize = 16;
let total = gridSize * gridSize;

for (let i = 0; i < total; i++) {
  const ceil = document.createElement("div");
  container.appendChild(ceil);
}
