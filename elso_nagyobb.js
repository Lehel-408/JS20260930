let szamok = [45, 72, 88, 96, 103, 67, 125, 81];

function kereses(tomb) {
    let i = 0;
    
    while(i < tomb.length && tomb[i] <= 100){
        i++;
    }

    if (i < tomb.length) {
        return i
    } else {
        return -1
    }
    return;
}

let index = kereses(szamok);

if (index !== -1) {
    console.log("A szám: " + szamok[index]);
    console.log("Helye: " + index);
} else {
    console.log("Nincs 100-nál nagyobb szám.");
}