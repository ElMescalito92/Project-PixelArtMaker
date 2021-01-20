// submit function
const submitClick = document.getElementById('sizePicker');
submitClick.addEventListener('submit', getInput)

//getInput calling makeGrid()
function getInput(e) {
    e.preventDefault();
    width = document.getElementById('inputWidth').value;
    height = document.getElementById('inputHeight').value;
    makeGrid(width, height);
}

// When size is submitted by the user, creates grid, then defines addEventListener,
// when fires calls addColor() - bound the cell variable.
function makeGrid(width, height) {
    const designCanvas = document.getElementById('pixelCanvas');
    designCanvas.innerHTML = '';
    for (r = 0; r < height; r++) {
        let newRow = designCanvas.insertRow();
        for (c = 0; c < width; c++) {
            const cell = newRow.insertCell();
            cell.addEventListener('click', addColor.bind(undefined, cell))
        }
    }
}

// Change background Color on Click
function addColor(cell) {
    const colorPicker = document.getElementById('colorPicker');
    let cellClasses = cell.className;
    cell.className = 'clicked';
    if (cellClasses === 'clicked') {
        let h = colorPicker.value;
        // Color comparission
        hexToRGB(h, cell);
    } else {
        cell.style.backgroundColor = colorPicker.value;
    }
}

// Turns hex to RGB - so we can compare colorPicker.value (given in hex) 
// to cell.style.backgroundColor (given in RGB)
function hexToRGB(h, cell) {
    let r = 0,
        g = 0,
        b = 0;
    let rgb = '';
    h = colorPicker.value;
    // 3 digits
    if (h.length == 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];
        // 6 digits
    } else if (h.length == 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
    }
    rgb = "rgb(" + +r + ", " + +g + ", " + +b + ")";
    colorCheck(rgb, cell)
}

//Compares the output of hexToRGB(variable rgb) to cell.style.backgroundColor
function colorCheck(rgb, cell) {
    if (cell.style.backgroundColor == rgb) {
        cell.style.backgroundColor = '';
        cell.className = '';
    } else {
        cell.style.backgroundColor = colorPicker.value;
    }
}

// Starting Grid
makeGrid(4, 4)