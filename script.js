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

container.addEventListener('mouseover',(event)=>{
  colorOver(event, currentPen);
})

currentSize = createGrid(25);

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
    const maxShadeLevel = 10; // Number of steps from white to black

    if (shadeLevel < maxShadeLevel) {
        shadeLevel++; // Increment shade level
        square.dataset.shadeLevel = shadeLevel; // Update stored level

        const alpha = shadeLevel / maxShadeLevel; // Calculate opacity (0.0 to 1.0)

        // Set the background color to black with the calculated opacity
        square.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
    }
    // No 'else if' needed here for === maxShadeLevel, as alpha will be 1, which is black.
    break;
            case 'r': 
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                break;
            default:
                // Handle the default case (optional, but good practice)
                // You could set it to a default color or do nothing
                break;
        }
    }
}

