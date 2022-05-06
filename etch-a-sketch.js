// get the container
const container = document.getElementById("container");

function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 1; i <= (rows * cols); i++) {
    const cell = document.createElement("div");
    cell.className = "grid-item";
    cell.onmouseover = () => cell.classList.add("hovered");
    cell.onmouseout = () => cell.classList.remove("hovered");
    cell.innerText = i;
    container.appendChild(cell);
  };
};
 
createGrid(16, 16);