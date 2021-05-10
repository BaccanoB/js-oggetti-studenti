// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

var studente = {
    nome:"Beatrice",
    cognome:"Baccano",
    eta:31
};

console.log(studente);

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (var key in studente){
    console.log(studente[key]);
}
// Creare un array di oggetti di studenti.

var studenti = [
    {
        nome:"Beatrice",
        cognome:"Baccano",
        eta:31
    },
    {
        nome:"Pinco",
        cognome:"Pallino",
        eta:31
    },
    {
        nome:"Mario",
        cognome:"Rossi",
        eta:31
    }
];

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
do {    
   var nome = prompt("Inserisci il tuo nome");
   var cognome = prompt("Inserisci il tuo cognome");
   var eta = parseInt(prompt("Inserisci la tua età")); 
} while(!isNaN(nome)  || !isNaN(cognome) || isNaN(eta));

var studenteNuovo = {};

studenteNuovo.nome = nome;
studenteNuovo.cognome = cognome;
studenteNuovo.eta = eta;

studenti.push(studenteNuovo);

for (var i = 0; i< studenti.length; i++){
    console.log("Nome studente",studenti[i].nome);
    console.log("Cognome studente",studenti[i].cognome);
}

