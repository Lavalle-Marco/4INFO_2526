const USER = "admin";
const PASSWORD = "1234";


let username = prompt("Inserisci il nome utente:");
let password = prompt("Inserisci la password:");

let messaggio = 
    (username === USER && password === PASSWORD) ? "Accesso riuscito!" :
    (username !== USER && password === PASSWORD) ? "Nome utente errato." :
    (username === USER && password !== PASSWORD) ? "Password errata." :
    "Nome utente e password errati.";
    
alert(messaggio);   
