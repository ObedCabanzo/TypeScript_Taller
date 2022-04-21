"use strict";
//Crea y llena una lista de series con los datos dados
let serie1 = new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg");
let serie2 = new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg");
let serie3 = new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg");
let serie4 = new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg");
let serie5 = new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg");
let serie6 = new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg");
let series = [serie1, serie2, serie3, serie4, serie5, serie6];
let i = 0;
var rowsNode = document.getElementById("rowsTable");
let seasonsNumber = 0;
// Para cada serie en la lista, extrae sus elementos y los inserta como una nueva fila de la tabla
while (i < series.length) {
    let serie = series[i];
    let attributes = serie.darSerie();
    let id = attributes[0];
    let name = attributes[1];
    let channel = attributes[2];
    let seasons = attributes[3];
    seasonsNumber += seasons;
    let row = '<th scope="row"> ' + id + '</th>' + '<td> ' + name + ' </td>'
        + '<td> ' + channel + ' </td>' + '<td> ' + seasons + ' </td>';
    rowsNode.insertAdjacentHTML('afterend', row);
    i++;
}
//Despliega la fila que muestra el numero promedio de temporadas
var rowsNode1 = document.getElementById("row2");
let seasonsAverage = seasonsNumber / series.length;
rowsNode1.insertAdjacentHTML('afterend', '<p>El promedio de temporadas es: ' + seasonsAverage + ' </p>');
