let container = document.querySelector(".container");

let gridSize = 16;
let total = gridSize * gridSize;

for (let i = 0; i < total; i++) {
  const ceil = document.createElement("div");
  container.appendChild(ceil);
}

let effect = document.querySelectorAll("div");

effect.forEach(function (item) {
  item.addEventListener("mouseenter", () => {
    item.classList.add("hover");
  });
});
