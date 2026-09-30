let szamok = [12, 7, 18, 25, 30, 41, 54, 16, 27];

function kivalogatas(tomb){
    let db = [];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            db.push(tomb[i]);
        }
    }
    return db;
}

function megszam(tomb) {
    return kivalogatas(tomb).length;
}

function osszeg(tomb){
    let sum = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
          sum += tomb[i];
        }
    }
    return sum;
}

console.log("3mal oszthato számok: " + kivalogatas(szamok));
console.log("darab: " + megszam(szamok));
console.log("összeg: " + osszeg(szamok));