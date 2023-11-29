//Initial declarations
const gridSize = 16;
const blackButton = document.querySelector('#black');
const customButton = document.querySelector('#custom');
const rgbButton = document.querySelector('#rgb');
const darkenButton = document.querySelector('#darken');
const gridSizeButton = document.querySelector('#grid-size');
const resetButton = document.querySelector('#reset');
const grid = document.querySelector('.grid');

//Options:

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

}

//Initial script
window.addEventListener('resize',resizePixel);

