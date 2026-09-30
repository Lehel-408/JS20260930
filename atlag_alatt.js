let pontok = [45, 72, 81, 56, 93, 64, 38, 77];

function osszeg(tomb){
    let osszeg = 0;
    for (let i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    return osszeg;
}

function atlagszam(tomb){
    return osszeg(pontok) / tomb.length;
}

function atlag_alatt(tomb){
    let eredmeny = [];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] < atlag) {
            eredmeny.push(tomb[i]);
        }
    }
    return eredmeny;
}

let atlag = atlagszam(pontok);

console.log("atlag: " + atlag);
console.log("atlag: " + atlag_alatt(pontok));