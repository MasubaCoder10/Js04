const affiche = function() {
    let x = Math.floor(Math.random() * 10) + 1;
    switch (x) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:

            console.log(`Faible\nMoyen\nMoyen`);
            break;
        case 5:
        case 6:
            console.log(`Faible\nMoyen\nMoyen`);
            break
        default:
            console.log(`Faible\nMoyen\nMoyen`);



    }
}

affiche();

module.exports = checkNumber