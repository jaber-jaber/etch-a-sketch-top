const createPixel = index => {
    const pixel = document.createElement('div');

    pixel.classList.add('pixel');

    return pixel;
}

const createMatrix = (qty) => {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    Array.from(Array(qty)).map((pixel, index) => {
        container.appendChild(createPixel(index));
    })
}

const generateColor = () => {
    const max = 255;
    let r = Math.floor(Math.random()*(max + 1));
    let g = Math.floor(Math.random()*(max + 1));
    let b = Math.floor(Math.random()*(max + 1));

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    let color = "#" + hr + hg + hb;
    return color;
}

function setDimensions(newPixelSize) {
    let columns = newPixelSize,
        rows = newPixelSize;

    let totalPixelSize = columns * rows;   

    return [totalPixelSize, columns];
}

function sketchPixel(matrix) {

    matrix.forEach((pxl) => {
        pxl.addEventListener('mouseenter', () => {
            pxl.style.backgroundColor = generateColor();
        })
    });

}

const container = document.querySelector('.container');

const reset = document.createElement('button');
reset.classList.add = 'reset-button';
reset.textContent = 'Reset the Grid';

document.body.appendChild(reset);

reset.addEventListener('click', () => {
    let pixelNum = prompt('Enter number between 1-100');

    columns = setDimensions(pixelNum)[1];
    let totalPixelSize = setDimensions(pixelNum)[0];

    createMatrix(totalPixelSize);
    const matrixUpdated = document.querySelectorAll('.pixel');

    matrixUpdated.forEach(pixel => {
        pixel.style.cssText = `width: ${columns}px; height: ${columns}px;`
    })

    container.style.cssText = `width: calc(${columns} * 20px); height: calc(${columns} * 20px);`

    sketchPixel(matrixUpdated);
})



createMatrix(16 * 16);

const matrix = document.querySelectorAll('.pixel');

sketchPixel(matrix);