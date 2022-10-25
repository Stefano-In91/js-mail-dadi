"use strict";

// Chiedi all’utente la sua email,
const userMail = prompt("Inserisci la tua mail");
// controlla che sia nella lista di chi può accedere,
const mailList = ["salaffepihei-7838@yopmail.com", "jugrouyigattou-5273@yopmail.com", "lijubroceucre-9536@yopmail.com", "jutrocaddoummoi-8133@yopmail.com", "stefano.incerti91@gmail.com"];
const listLength = mailList.length;
let mailPositive;

for (let i = 0; i < listLength; i++) {
   const element = mailList[i];
   if (element === userMail) {     
      mailPositive = true;
   }
}
// stampa un messaggio appropriato su esito controllo.
if (mailPositive) {
   alert("La tua mail è nell'elenco");
} else {
   alert("Mail non presente nell'elenco");
}


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const userScore = Math.floor(Math.random() * 6 + 1);
const pcScore = Math.floor(Math.random() * 6 + 1);
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (userScore > pcScore) {
   alert(`Hai vinto ${userScore} a ${pcScore}`);
} else if (userScore < pcScore) {
   alert(`Hai perso ${pcScore} a ${userScore}`);
}  else {
   alert(`Hai pareggiato ${userScore} a ${pcScore}`);
}
