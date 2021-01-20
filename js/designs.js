/**  
 * @description addEventListener - Event Listener for submit button. Fires getInput when 'submit'
 * is clicked.
 */
const submitClick = document.getElementById('sizePicker');
submitClick.addEventListener('submit', getInput)

/**
 * @description getInput-function - Height and Width user Input is stored, then passed to makeGrid.
 * width and height are positive numbers, with a minimum set to 1 in the HTML.
 * 
 */
function getInput(e) {
    e.preventDefault();
    width = document.getElementById('inputWidth').value;
    height = document.getElementById('inputHeight').value;
    makeGrid(width, height);
}

/**
 * @description makeGrid-function - deletes old Grid (by setting back the innerHTML value), then creates new one with new parameters
 * using the .insertRow() and .insertCell() methods. 
 * @description cell.addEventListener() - Listens for clicks on cell, if fired, then 
 * calls the addColor() function. Passing 'cell' by using .bind to addColor.
 */
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

/**
 * @description addColor-function - Re-uses the 'bound' cell, stores its className to variable cellClasses
 * and gives it a className 'clicked'. 
 * If cellClasses contains className 'clicked', then the cell backgroundColor and className are reset
 * Else, background color is set to the value of the colorPicker.
 */
function addColor(cell) {
    const colorPicker = document.getElementById('colorPicker');
    let cellClasses = cell.className;
    cell.className = 'clicked';
    if (cellClasses === 'clicked') {
        cell.style.backgroundColor = '';
        cell.className = '';
    } else {
        cell.style.backgroundColor = colorPicker.value;
    }
}

/**
 * @description Calls makeGrid-function - ...so User will have a standardized grid set up 
 * when opening/refreshing the page.
 */
makeGrid(4, 4)