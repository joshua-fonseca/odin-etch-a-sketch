const container = document.querySelector(".container")

let n = 16;

for(let i=0; i<n**2; i++) {
  const square = document.createElement("div");
  square.style.width = `${100 / n}%`;
  square.style.aspectRatio = "1 / 1";
  square.classList.add("square");
  container.appendChild(square);
}
