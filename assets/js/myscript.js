const nome = prompt("What's your name?");

const cognome = prompt("What's your surname?");

const colorePreferito = prompt("What's your favourite color?");

let passwordGenerata = `${nome}${cognome}${colorePreferito}21`;
console.log(passwordGenerata);

document.getElementById("contenitore_target").innerHTML = passwordGenerata;