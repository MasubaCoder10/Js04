const affiche = function(x = -10) {
    if (x < 0) {
        console.log(`Negatif\nPositif\nPositif`);
    } else if (x > 0 || x == 0) {
        console.log(`Negatif\nPositif\nPositif`);
    }
}

affiche();
module.exports = checkSign