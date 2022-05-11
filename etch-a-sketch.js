// Grid sizes
const GRID_SMALL = 16;
const GRID_MEDIUM = 32;
const GRID_BIG = 64;

const createGrid = (rows, cols, classItem) => {
  const container = document.getElementById("grid-container");
  container.innerHTML = "";
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (let i = 1; i <= (rows * cols); i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.classList.add(classItem);
    cell.mouseOverCount = 0;
    cell.onmouseover = (event) => hovered(event);
    cell.onmouseout = () => cell.classList.remove("hovered");
    // cell.innerText = i;
    container.appendChild(cell);
  };
};

const btnSizeSmall = document.getElementById("btn-size-small");
btnSizeSmall.addEventListener('click', () => createGrid(GRID_SMALL, GRID_SMALL, "small-grid"));
const btnSizeMedium = document.getElementById("btn-size-medium");
btnSizeMedium.addEventListener('click', () => createGrid(GRID_MEDIUM, GRID_MEDIUM, "medium-grid"));
const btnSizeBig = document.getElementById("btn-size-big");
btnSizeBig.addEventListener('click', () => createGrid(GRID_BIG, GRID_BIG, "big-grid"));

 
const hovered = (event) => {
  const item = event.target;
  item.mouseOverCount < 10 ? item.mouseOverCount++ : item.mouseOverCount;
  item.style.background = `rgba(0, 0, 0, ${0.1 * item.mouseOverCount})`;
}

createGrid(GRID_SMALL, GRID_SMALL, "small-grid");