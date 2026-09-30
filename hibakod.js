let hibakodok = [200, 404, 200, 500, 404, 200, 403, 500, 200];

function count404(tomb) {
    db = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] === 404) {
           db++ 
        }
    }
    return db;
}

function count500(tomb) {
    db = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] === 500) {
           db++ 
        }
    }
    return db;
}

function nem200(tomb) {
    let eredmeny = [];
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] !== 200) {
            eredmeny.push(tomb[i])
        }
    }
}

function van500(tomb) {
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] === 500) {
            return true;
        }
    }
    return false;
}

console.log("404-es hibak: " + count404(hibakodok))
console.log("500-as hibak: " + count500(hibakodok))
console.log("Nem 200-as hibak: " + nem200(hibakodok))
console.log("Volt 500-as hiba: " + van500(hibakodok))