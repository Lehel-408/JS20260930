let arak = [1290, 2490, 3990, 1590, 5490, 2990, 4490];

function osszeg(tomb){
    let osszeg = 0;
    for (let i = 0; i < tomb.length; i++) {
        osszeg += tomb[i];
    }
    return osszeg;
}

function atlag(tomb){
    return osszeg(arak) / tomb.length;
}

function minimum(tomb){
    let min = tomb[0];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] < min) {
            min = tomb[i];
        }
    }
    return min;
}

function maximum(tomb){
    let max = tomb[0];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] > max) {
            max = tomb[i];
        }
    }
    return max;
}

function megszam(tomb){
    let db = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] > 3000) {
            db++;
        }
    }
    return db;
}

console.log("ősszeg: " + osszeg(arak));
console.log("átlag: " + atlag(arak));
console.log("legolcsóbb: " + minimum(arak));
console.log("legdragabb: " + maximum(arak));
console.log("3000Ft-nál drágább: " + megszam(arak));
