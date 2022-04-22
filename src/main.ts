
import {Serie} from "./Serie.js";
import {series} from "./data.js";

let i : number = 0;
var rowsNode : HTMLElement | null = document.getElementById("rowsTable")!;

let seasonsNumber : number = 0;
console.log(rowsNode.innerText);// Para cada serie en la lista, extrae sus elementos y los inserta como una nueva fila de la tabla de HTML
while( i < series.length)
{
     let serie : Serie = series[i];
     let attributes : Array<string | number > = serie.darSerie(); 
     let id : any = attributes[0];
     let name : any = attributes[1];
     let channel : any = attributes[2];
     let seasons : any = attributes[3];

     seasonsNumber += seasons;

     let row : string = '<tr>'
                            +'<th scope="row"> '+ id + '</th>' 
                                + '<td> <a id="'+ name+ '" onclick="showCard( ' + name + ' )"> ' + name +' </a> </td>' 
                                + '<td> ' + channel+' </td>' 
                                + '<td> ' + seasons +' </td>' 
                    + ' </tr>'; 
     rowsNode.insertAdjacentHTML('afterend', row);

    i++;
}

//Despliega la fila que muestra el numero promedio de temporadas

var rowsNode1 : HTMLElement | null = document.getElementById("row2")!;

let seasonsAverage : number = seasonsNumber / series.length;
console.log(seasonsAverage);
rowsNode1.insertAdjacentHTML('afterend', '<p>El promedio de temporadas es: ' + seasonsAverage + ' </p>');


function showCard (name : string = '') : void
{
    let serieSearched : Serie = new Serie(0,"","",0,"","","");
    //Para mostrar la carta de la serie primero la buscamos dentro de la lista de series, dado su nombre.
    let i : number = 0;
    while( i < series.length)
    {
        let serie : Serie = series[i];
        let attributes : Array<string | number > = serie.darSerie();
        let nameSerie = attributes[1];
        if(nameSerie == name)
        {
            serieSearched = serie;
            break;
        }
        i++

    }

    //Una vez encontrada extraemos los elementos de descripcion, enlace de pagina, imagen y nombre.
    
    let attributes : Array<any> = serieSearched.darSerie();
    let serieTitle  : string = attributes[1];
    let serieDescription  : string  = attributes[4];
    let serieImage  : string = attributes[6];
    let serieLink  : string = attributes[5];


    //Finalmente, se actualiza el card con los  datos encontrados
       
    var nodeCardTitle : HTMLElement | null = document.getElementById("cardtitle")!;
    nodeCardTitle.innerHTML = serieTitle ;

    var nodeCardDescription: HTMLElement | null = document.getElementById("cardtext")!;
    nodeCardDescription.innerHTML = serieDescription ;

    var nodeCardLink: HTMLElement | null = document.getElementById("cardlink")!;
    nodeCardLink.innerHTML = serieLink ;

    var nodeCardImage: HTMLElement | null = document.getElementById("cardimg")!;
    nodeCardImage.setAttribute('href', serieImage)



}



