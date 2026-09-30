let nevek = ["Gábor", "Lilla", "Márk", "Nóra", "Péter"];

function eldontes(tomb , keresett){
    let van = false;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] === keresett) {
           van = true;
        }
    }
    return van;
}

let nev = prompt("Adj meg egy nevet: ");

if (eldontes(nevek, nev)) {
    console.log("Megtaláltam a nevet.")
}else{
    console.log("A név nem található.")
}