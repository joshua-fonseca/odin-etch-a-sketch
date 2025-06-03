const container = document.querySelector(".container")
const gridSize= document.querySelector("#grid-size");

let n = 16;
let rainbow = false;

// rainbow pen
let setPen = (square) => {
    square.addEventListener("mouseover", (event) => {
      if(rainbow) {
        square.style.backgroundColor = randomColourGen();
      } else {
        square.style.backgroundColor = "black";
      }
  });
}

const rainbowPen = document.querySelector("#rainbow");

rainbowPen.addEventListener('click', () => rainbow = !rainbow);

let randomColourGen = () => {
  return `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
}

let generateGrid = (n) => {
  for(let i=0; i<n**2; i++) {
    const square = document.createElement("div");
    // grid size text
    gridSize.textContent = `${n} x ${n}`;

    square.style.width = `${100 / n}%`;
    square.style.aspectRatio = "1 / 1";
    square.classList.add("square");

    setPen(square);

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
  do {
    n = parseInt(prompt("Enter dimensions of new grid (1-100):"));
    console.log(n);
  } while(n > 100 || isNaN(n) || n === 0);

    clearGrid();
    generateGrid(n);
});