import road from './road.js';

const grid = document.getElementById("grid");

const makeGrid = (size, container) =>
  R.map(() => {
    const cell = document.createElement("div");
    cell.className = "cell";
    container.appendChild(cell);
    return cell;
  }, R.range(0, size * size));

let state = road.initialState;
const cells = makeGrid(10, grid);

const updateView = () => {
  cells.forEach(cell => cell.classList.remove("player"));
  const index = state.player.y * 10 + state.player.x;
  cells[index].classList.add("player");
};

document.addEventListener("keydown", (e) => {
  const newState = road.movePlayer(e.key, state);
  state = newState;
  updateView();
});

updateView();
