
/*
// l'utente deve inserire una parola
var parolaUtente = "ciaooaic"
//creare una funzione che mi dica se la parola e palindroma

var contrarioLista = [];
for (i = 0; i < parolaUtente.length; i++) {
    var contrario = parolaUtente[parolaUtente.length - i - 1]
    contrarioLista.push(contrario);
}

var palindroma = 0;
for (i = 0; i < contrarioLista.length; i++) {
    if (contrarioLista[i] === parolaUtente[i]) {
        palindroma++;
    }
}

if (Number(palindroma) === Number(parolaUtente.length)) {
    console.log("La parola è palindroma");
} else {
    console.log("La prola non è palindroma");
}
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

var prova = parolaPalindroma("andrei");
console.log(prova);