function nagyobbMint50(szam) {
    if (szam > 50) {
        return true;
    } else {
        return false;
    }
}

let szamok = [23, 67, 45, 81, 12, 54, 92, 38];

for (let i = 0; i < szamok.length; i++) {
    if (nagyobbMint50(szamok[i])) {
        console.log(szamok[i])
    }
}