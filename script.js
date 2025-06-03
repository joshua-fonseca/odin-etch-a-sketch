const container = document.querySelector(".container")

let n = 16;

let generateGrid = (n) => {
  for(let i=0; i<n**2; i++) {
    const square = document.createElement("div");

    square.style.width = `${100 / n}%`;
    square.style.aspectRatio = "1 / 1";
    square.classList.add("square");

    square.addEventListener("mouseover", (event) => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

let clearGrid = () => {
  while(container.firstChild) {
    container.removeChild(container.firstChild)
  }
}

generateGrid(n);

// button
const newGridButton = document.querySelector("#config");

newGridButton.addEventListener("click", () => {
   n = parseInt(prompt("Number of square per side for the new grid:"))
   clearGrid();
   generateGrid(n);
});
