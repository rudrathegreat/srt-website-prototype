const wrapper = document.querySelector(".dot-lattice");
const wrapper_grids = document.querySelectorAll('.dot-lattice .dot-effect-container');

let columns = 0,
    rows = 0;

const createTile = index => {
  const tile = document.createElement("div");
  
  tile.classList.add("tile");
  
  tile.style.opacity = 1;

  return tile;
}

function createTiles(quantity, wrapper_grid) {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper_grid.appendChild(createTile(index));
  });
}

const createGrid = () => {
  wrapper_grids.forEach(wrapper_grid => {
    wrapper_grid.innerHTML = "";
  })
  
  const size = wrapper.clientWidth > 800 ? 100 : 20;
  
  columns = Math.floor(wrapper.clientWidth / size);
  rows = Math.floor(wrapper.clientHeight / size);
  
  wrapper_grids.forEach(wrapper_grid => {
    wrapper_grid.style.setProperty("--columns", columns);
    wrapper_grid.style.setProperty("--rows", rows);
  })
  
  wrapper_grids.forEach(wrapper_grid => {
    createTiles(columns * rows, wrapper_grid);
  });
}

createGrid();

window.onresize = () => createGrid();