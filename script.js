//Initial declarations
let gridSize = 16;
const blackButton = document.querySelector('#black');
const customButton = document.querySelector('#custom');
const rgbButton = document.querySelector('#rgb');
const greyScaleButton = document.querySelector('#grey-scale');
const gridSizeButton = document.querySelector('#grid-size');
const resetButton = document.querySelector('#reset');
const grid = document.querySelector('.grid');
const colorPalette=document.querySelector('#custom input')

//Options:
let color = 'black';
let greyScale = 200;

//Response functions
function createGrid(size){
    let numberOfSquares = size**2;
    let squareSize= (grid.getBoundingClientRect().width-6)/size;
    for (let i=0; i<numberOfSquares; i++){
        createPixel(squareSize);
    }
    return 'grid created'
}

function createPixel(size){
    size=size+'px';
    const pixel = document.createElement('div');
    pixel.style.minWidth = size;
    pixel.style.minHeight = size;
    grid.appendChild(pixel);
    pixel.addEventListener('mouseover', colorPixel);
}

function clearGrid(){
    for (let i=0; i<(gridSize**2); i++){
        grid.removeChild(grid.lastChild);
    }
}

function resizePixel(){
    let size=((grid.getBoundingClientRect().width-6)/gridSize)+'px';
    const pixels = document.querySelectorAll('.grid div');
    
    for(let i=0; i<pixels.length; i++){
        pixels[i].style.minWidth = size;
        pixels[i].style.minHeight = size;
    }
}

function colorPixel(){
    switch(color){
        case 'grey-scale':
            if (greyScale<0){greyScale = 200}
            let x = greyScale;
            this.style.backgroundColor='rgb('+x+','+x+','+x+')';
            greyScale += -20;
            break;

        case 'rgb':
            this.style.backgroundColor=randomColor();
            break;

        default:
            this.style.backgroundColor=color;
    }
}

function randomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Event listeners

customButton.addEventListener('click', ()=>{
    color = colorPalette.value;
});

colorPalette.addEventListener('change', ()=>{
    color = colorPalette.value;
});

blackButton.addEventListener('click',()=>{
    color = '#000000';
});

rgbButton.addEventListener('click', ()=>{
    color = 'rgb';
});

greyScaleButton.addEventListener('click', ()=>{
    color = 'grey-scale';
});

gridSizeButton.addEventListener('click', ()=>{
    clearGrid();
    gridSize=prompt('Input grid size: ');
    if(gridSize>100){
        gridSize=100;
        alert('Grid size too big! setting to max (100)');
    }
    if( !(+gridSize) || gridSize <0){
        gridSize=16;
        alert('Unvalid grid size! setting to default (16)');
    }
    createGrid(gridSize);
});

resetButton.addEventListener('click',()=>{
    clearGrid();
    createGrid(gridSize);
});

//Initial script
window.addEventListener('resize',resizePixel);
createGrid(gridSize);
