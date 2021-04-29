
/**
 * ## Controllo Parola palindroma
 * Questa funzione accetta una stringa in entrata e va a verificare se la strinag inserita è palindroma
 * @param {string} parola - Stringa da inserire per il controllo 
 * @returns {boolean} Il risultato è un valore booleano 
 */
function parolaPalindroma(parola) {
    var contrarioParola = [];
    for (i = 0; i < parola.length; i++) {
        var contrario = parola[parola.length - i - 1]
        contrarioParola.push(contrario);
    }
    var palindroma = 0;
    for (i = 0; i < contrarioParola.length; i++) {
        if (contrarioParola[i] === parola[i]) {
            palindroma++;
        }
    }
    if (Number(palindroma) === Number(parola.length)) {
        return true
    } else {
        return false
    }

}

//faccio inserire all'utenteuna parola
var controllo = true;
while (controllo) {
    var parolaUtente = prompt("Inserire la parola da verificare se è palindroma!")
    if (isNaN(parolaUtente)) {
        controllo = false;
    }
}

//richiamo la funzione per controllare se la parola è palindroma
var parolaVerificata = parolaPalindroma(parolaUtente);


//verifico il risultato che mi ah dato la funzione e communico il risultato
if (parolaVerificata) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}