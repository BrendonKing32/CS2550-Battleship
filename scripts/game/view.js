/*
Name       :Brendon King
Class      :CS 2550
Title      :Battleship/view.js
Version    :Version 03
Description:Contains the functions that serve information to the browser for the user/requestor
*/

//Function  :GenerateTable
//Purpose   :create the game boards that the players will use
//Parameters:int numRows, int numCOlumns, playerID
//Returns   :table element
function GenerateTable(numRows, numColumns) {
    var body = document.getElementsByClassName('column')[0];
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var i = 0; i < numRows; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < numColumns; j++) {
            if (i == 0 && j >= 1) {
                var cell = document.createElement("td");
                var cellText = document.createTextNode((j));
            }

            else if (i >= 1 && j == 0) {
                var cell = document.createElement("td");
                var cellText = document.createTextNode(((i + 9).toString(36)).toUpperCase());
                cell.setAttribute("style", "background:#616366");
            }
            else {
                var cell = document.createElement("td");
                var cellText = document.createTextNode("");
                cell.setAttribute("style", "background:lightblue");
            }
            if (i == 0) {
                cell.setAttribute("style", "background:#616366");
            }
            cell.appendChild(cellText);
            row.appendChild(cell);

        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "0");
    tbl.setAttribute("align", "center");
}

//Function  :GenerateForm
//Purpose   :Create and append the controls to board.html
//Parameters:none
//Returns   :none
function GenerateForm() {

}
