const nome = prompt("Qual è il tuo nome?");

const cognome = prompt("Qual è il tuo cognome?");

const colorePreferito = prompt("Qual è il tuo colore preferito?");

let passwordGenerata = `${nome}${cognome}${colorePreferito}21`;
console.log(passwordGenerata);

document.getElementById("contenitore_target").innerHTML = passwordGenerata;