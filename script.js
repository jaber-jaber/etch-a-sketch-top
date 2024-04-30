const createPixel = index => {
    const pixel = document.createElement('div');

    pixel.classList.add('pixel');

    return pixel;
}

const createMatrix = qty => {
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

// num of pixels = 16x16 = 256
// container width = pixel size (width x height) * num of pixels
// container height = pixel size (width x height) * num of pixels
// pixel width and height has to change based on num of pixels
// reference number = 100px wide and tall
// 

function setDimensions(newPixelSize) {
    let columns = newPixelSize,
    rows = newPixelSize;

    return columns, rows;
}

const container = document.querySelector('.container')

let columns = 16,
    rows = 16;


createMatrix(columns * rows);

const matrix = document.querySelectorAll('.pixel');

matrix.forEach((pxl) => {
    pxl.addEventListener('mouseenter', () => {
        pxl.style.backgroundColor = generateColor();
    })
});

const reset = document.createElement('button');
reset.classList.add = 'reset-button';
reset.textContent = 'Reset the Grid';

document.body.appendChild(reset);

reset.addEventListener('click', () => {
    let pixelNum = prompt('Enter number between 1-100');
    // columns, rows = setDimensions(pixelNum);
    // for (const pixel in matrix) {
    //     pixel.style.cssText = `width: ${columns / }px; height: `;

    // }
})