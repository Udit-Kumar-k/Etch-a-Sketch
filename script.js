/*const changeRes = function(x){
resolution = x;
const container = document.querySelector(".boardContainer")
for(let i=0; i<(resolution*resolution); i++){
    const content = document.createElement("div")
    content.style.backgroundColor = "red";
    let squareSize = Math.floor(600 / resolution); 
    content.style.height = squareSize + "px";
    content.style.width = squareSize + "px";
    content.style.margin = "0";
content.style.padding = "0";

    content.style.boxSizing = "border-box";
    container.appendChild(content);
    console.log(squareSize)
}
}

const reset = function(){

}

changeRes()*/

const container = document.querySelector(".boardContainer")
function createGrid(size) {
  container.innerHTML = "";

  const squareSize = `calc(100% / ${size})`;

  for (let i = 0; i < size * size; i++) {
    const content = document.createElement("div");
    content.style.width = squareSize;
    content.style.height = squareSize;
    content.style.backgroundColor = 'red';
    container.appendChild(content);
  }
}

createGrid(25);
