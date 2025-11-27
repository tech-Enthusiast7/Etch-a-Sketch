let container = document.querySelector(".container");

//button asking for number of squares per side for new grid
let btn = document.createElement("button");
btn.textContent = "Input Grid";

container.parentElement.prepend(btn);

function createGrid(gridSize) {
  container.innerHTML = "";

  let total = gridSize * gridSize;

  for (let i = 0; i < total; i++) {
    const ceil = document.createElement("div");
    ceil.style.width = `calc(100% / ${gridSize})`;
    container.appendChild(ceil);

    ceil.addEventListener("mouseenter", () => {
      ceil.classList.add("hover");
    });
    
  }
}
createGrid(16);

btn.addEventListener("click", () => {
  gridSize = parseInt(window.prompt("Enter the size of Grid(Max: 100): "));

  if (gridSize === null) return;

  if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
    alert("Please enter a number between 1 & 100");
    return;
  }

  createGrid(gridSize);
});
