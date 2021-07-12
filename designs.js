// Placing color input into variable in order to refer to its value later.
var colorPicker = document.querySelector('#colorPicker');

// Size input is being put into a variable for when I create Listener Event
var pickSize = document.querySelector('#sizePicker');

// Creating grid area variable for grid creation
var gridArea = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
// Using the preventDefault method to make sure submit explicitly calls makeGrid() and doesn't reload the page
pickSize.addEventListener('submit', function(evt) {
  evt.preventDefault();
  makeGrid();
});

// Make Grid function is below
// Created for loop that inserts rows and cells based on input height and width value amounts

function makeGrid() {
  const gridHeight = document.querySelector('#inputHeight').value;
  const gridWidth = document.querySelector('#inputWidth').value;
  // Setting gridArea innerHTML content to null. Clears the grid area and  properly recreates grid based on new or current size inputs.
  gridArea.innerHTML = null;

  for (let row = 0; row < gridHeight; row++) {
    let newRow = gridArea.insertRow();
    for (let column = 0; column < gridWidth; column++) {
      let newCell = newRow.insertCell();
      // Each new cell that is created will have a click event Listener
      // Also using event.target for direct access to cell
      newCell.addEventListener('click', function(evt) {
        evt.preventDefault();
        evt.target.style.backgroundColor = colorPicker.value;
      });
      // Adding a double click event that will reset the individual cells
      newCell.addEventListener('dblclick', function(evt) {
        evt.preventDefault();
        evt.target.style.backgroundColor = null;
      });
    };
  };
};
