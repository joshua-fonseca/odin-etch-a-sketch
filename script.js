const container = document.querySelector(".container")
const gridSize = document.querySelector("#grid-size");
const newGridButton = document.querySelector("#config");

let n = 24;
let penMode = "black";
let opacity = 1;

// set opacity
let updateValue = (val) => {
  opacity = val;
  const opacitySliderText = document.querySelector("#slider-value");
  opacitySliderText.textContent = `${opacity}`;
}

// setPen behaviour
let setPen = (square) => {
  square.addEventListener("mouseover", (event) => {
    switch (penMode) {
      case "rainbow":
      case "black":
        square.style.backgroundColor = penMode === "black" ? "black" : randomColourGen();
        // square.style.opacity || 0 → uses 0 if no opacity is set
        square.style.opacity = `${parseFloat(square.style.opacity || 0) + parseFloat(opacity)}`;
        break;
      default:
        square.style.removeProperty("background-color");
        square.style.removeProperty("opacity");
    }
  });
}

let randomColourGen = () => {
  return `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`
}

// change pan behaviour
const penButtons = document.querySelectorAll(".toolbar-right > button");
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
