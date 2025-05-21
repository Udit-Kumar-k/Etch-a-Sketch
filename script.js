const container = document.querySelector(".boardContainer")
const container1 = document.querySelector(".dimensions");
let currentSize = 0;
let currentPen = 'b';
function createGrid(size) {
  container.innerHTML = "";

  let d = container1.querySelector("div");
  if (!d){
    d = document.createElement("div");
    container1.appendChild(d);
  }
  d.classList.add("dimensionproperty");
  d.textContent = size+" x "+size;

  const squareSize = `calc(100% / ${size})`;
  for (let i = 0; i < size * size; i++) {
    const content = document.createElement("div");
    content.classList.add("drawing-square");
    content.style.width = squareSize;
    content.style.height = squareSize;
    content.style.backgroundColor = 'white';
    content.dataset.shadeLevel = 0;
    container.appendChild(content);
  }
  return size;
}

//event Delegation
container.addEventListener('mouseover',(event)=>{
  colorOver(event, currentPen);
})

currentSize = createGrid(16);

const lbtn1 = document.querySelector(".blackPen");
lbtn1.addEventListener('click', function(){
  currentPen = 'b';
})

const lbtn2 = document.querySelector(".lightPen");
lbtn2.addEventListener('click', function(){
  currentPen = 'l'
})

const lbtn3 = document.querySelector('.randomPen');
lbtn3.addEventListener('click',function(){
  currentPen = 'r'
})

const rbtn1 = document.querySelector('.changeSize');
rbtn1.addEventListener("click",function(){
  newSizeGrid();
})

const rbtn2 = document.querySelector('.export');
rbtn2.addEventListener("click",function(){
  
})

const rbtn3 = document.querySelector('.reset');
rbtn3.addEventListener("click",function(){
  createGrid(currentSize);
})

function colorOver(event, currentPen) {
  if (event.target.classList.contains('drawing-square')) {
      const square = event.target; 

      switch (currentPen) {
          case 'b': 
              square.style.backgroundColor = 'black';
                break;
          case 'l':
    let shadeLevel = parseInt(square.dataset.shadeLevel);
    const maxShadeLevel = 10;
    if (shadeLevel < maxShadeLevel) {
        shadeLevel++; 
        square.dataset.shadeLevel = shadeLevel; 
        const alpha = shadeLevel / maxShadeLevel; 
        square.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
    }
   
    break;
            case 'r': 
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                break;
            default:
                break;
        }
    }
}

const getSize = function(){
  let input = prompt("Enter a new size for side of a square (limit is 100)")
  if (input==null){
  return;
  }
  else{
    return input;
  }
}

const newSizeGrid = function(){
  let newSize = getSize();
  if (newSize<101){
    createGrid(newSize);
    currentSize =newSize;
  }
  else{
    alert("Enter a valid number, the limit is 100")
  }
}

