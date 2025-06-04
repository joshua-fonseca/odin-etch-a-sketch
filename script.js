const container = document.querySelector(".container")
const gridSize = document.querySelector("#grid-size");
const newGridButton = document.querySelector("#config");

let n = 24;
let penMode = "black";

// setPen behaviour
let setPen = (square) => {
  square.addEventListener("mouseover", (event) => {
    switch (penMode) {
      case "black":
        square.style.backgroundColor = "black";
        break;
      case "rainbow":
        square.style.backgroundColor = randomColourGen();
        break;
      default:
        square.style.removeProperty("background-color");
    }
  });
}

let randomColourGen = () => {
  return `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
}

// change pan behaviour
const penButtons = document.querySelectorAll(".toolbar-right > *");
// console.log(penButtons);

penButtons.forEach(button => {
  button.addEventListener("click", () => {
    penMode = button.dataset.pen;
    // console.log(penMode);

    // remove active class from all
    penButtons.forEach(btn => btn.classList.remove("active-pen"));

    // add active class to the clicked one
    button.classList.add("active-pen");
  });
});

// grid functions
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

newGridButton.addEventListener("click", () => {
  do {
    n = parseInt(prompt("Enter dimensions of new grid (1-100):"));
    console.log(n);
  } while(n > 100 || isNaN(n) || n === 0);

    clearGrid();
    generateGrid(n);
});

// init
generateGrid(n);
