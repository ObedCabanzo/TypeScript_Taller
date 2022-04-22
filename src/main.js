"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js");
let i = 0;
var rowsNode = document.getElementById("rowsTable");
let seasonsNumber = 0;
console.log(rowsNode.innerText);
// Para cada serie en la lista, extrae sus elementos y los inserta como una nueva fila de la tabla de HTML
while (i < data_js_1.series.length) {
    let serie = data_js_1.series[i];
    let attributes = serie.darSerie();
    let id = attributes[0];
    let name = attributes[1];
    let channel = attributes[2];
    let seasons = attributes[3];
    seasonsNumber += seasons;
    let row = '<tr> <th scope="row"> ' + id + '</th>' + '<td> ' + name + ' </td>'
        + '<td> ' + channel + ' </td>' + '<td> ' + seasons + ' </td> </tr>';
    rowsNode.insertAdjacentHTML('afterend', row);
    i++;
}
//Despliega la fila que muestra el numero promedio de temporadas
var rowsNode1 = document.getElementById("row2");
let seasonsAverage = seasonsNumber / data_js_1.series.length;
console.log(seasonsAverage);
rowsNode1.insertAdjacentHTML('afterend', '<p>El promedio de temporadas es: ' + seasonsAverage + ' </p>');
