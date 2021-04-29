

/**
 * ## Pari o Dispari
 * 
 * Questa funzione permette di giocare a pari o dispari, bisognare scegliere tra pari e dispari e inserire un numero tra 1 e 5 e la funzione ti 
 * communicherà chi avra vinto. La funzione verifica che i valori inseriti siano coretti, se non sono corretti non potra eseguire la funzione.
 * @param {string} scelta - Scegliere tra "Pari" o "Dispari"
 * @param {number} numero - Inserire un numero tra 1 e 5
 * @returns {string} - Il risultato verrà communicato tramite una stringa
 */
function PariDispari(scelta, numero) {

    if ((isNaN(scelta) && (scelta.toLowerCase() === "pari" || scelta.toLowerCase() === "dispari")) &&
        (!isNaN(numero) && numero >= 1 && numero <= 5)) {
        //eseguo tutto siccome hai inserito i valori giusti
        var numeroPc = Math.ceil(Math.random() * 5);
        var somma = numeroPc + numero;
        var risultato;
        if (somma % 2 === 0) {
            risultato = "pari"
        } else {
            risultato = "dispari"
        }

        if (risultato === scelta) {
            return "Ha vinto il giocatore"
        } else {
            return "Ha vinto il pc"
        }

    } else {
        //non faccio niente perche non hai inserito i valori giusti
        return "Uno dei valori inseriti è sbagliato quindi non posso darti un risultato"
    }


}


//l'utente scegli pari e dispari e inserisce un numero

//verifico che il valore inserito sia uguale a pari o dispari
var controllo = true;
while (controllo) {
    var sceltaUtente = prompt("Fai la tua scelta!! \nPARI o DISPARI ??")
    if (isNaN(sceltaUtente) && (sceltaUtente.toLowerCase() === "pari" || sceltaUtente.toLowerCase() === "dispari")) {
        controllo = false;
    }
}

//controllo che il numero inserito sia compreso tra 1 e 5
var controllo = true;
while (controllo) {
    var numeroUtente = prompt("Scegli un numero tra 1 e 5")
    if (!isNaN(numeroUtente) && numeroUtente >= 1 && numeroUtente <= 5) {
        controllo = false;
    }
}


//utilizzo la funzione per giocare a pari e dispari
var pariOdispari = PariDispari(sceltaUtente, numeroUtente);
console.log(pariOdispari);



