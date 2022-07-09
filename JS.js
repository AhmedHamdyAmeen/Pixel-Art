// import the usable elements and assign them to  variables
let sizeForm = document.getElementById("sizeForm");
let height = document.getElementById("heightID");
let width = document.getElementById("widthID");
let colorPicker = document.getElementById("colorPicker");
let CanvasTable = document.getElementById("CanvasTable");
let submitBotton = document.getElementById("submitBotton");

// function that makeGrid() in specific height and width and addElementListener..
 function makeGrid (height, width) {
    
    for(var r = 0; r <height; r++) {
        //loope to insertRow
        let row = CanvasTable.insertRow(r);

        //loope to insertCell
        for (var c = 0; c < width; c++) {
            let cell = row.insertCell(c);

            // AddEventListener to recolor the color of the selected Cell
            cell.addEventListener("click", function (evt) {
                // change the color of the clicked cell to the selected color from the colorPicker
                cell.style.backgroundColor = colorPicker.value;
                //addEventListener to prevent the defoult option and to reset the color of the cell to withe when rightClick and when press the contextMenu key
                cell.addEventListener("contextmenu", function (evt) {
                    evt.preventDefault();
                    cell.style.backgroundColor = "white";
                });

            });

        }
    }
 };



// fanction that uses the sizePicker submit to call makeGrid() funtion and that prevent the defult property for the form

sizeForm.addEventListener("submit", function (evt) {
    // prevent the default property of the submit
    //  prevent the page from reload when clicked to the submit bottom
    evt.preventDefault();

    // clear the table from the cell if we need to rediefine the number 
    while (CanvasTable.hasChildNodes()) {
        CanvasTable.removeChild(CanvasTable.lastChild);
    }

    //Call the makeGrid() function
    makeGrid(height.value, width.value);

});




    