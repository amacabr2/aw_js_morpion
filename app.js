let cpt = 0;
const cases = document.querySelectorAll('.case');
console.log(cases);

/**
 * Pour afficher X, O selon le tour
 * @returns {string}
 */
function tour() {
    cpt++;
    return cpt % 2 === 0 ? 'O' : 'X';
}

/**
 * Vérifie si la case est dispo
 */
function jouer() {
    if (!this.innerHTML) this.innerHTML = tour();
    isWin();
}

/**
 * Vérifier si c'est gagné
 */
function isWin() {

    // Test les 3 lignes puis les 3 colonnes puis les 2 diagonales
    if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
        afficherGagnant(cases[0].innerHTML);
    } else if (cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
        afficherGagnant(cases[3].innerHTML);
    } else if (cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
        afficherGagnant(cases[6].innerHTML);
    } else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
        afficherGagnant(cases[0].innerHTML);
    } else if (cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
        afficherGagnant(cases[1].innerHTML);
    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
        afficherGagnant(cases[2].innerHTML);
    } else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) {
        afficherGagnant(cases[0].innerHTML);
    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
        afficherGagnant(cases[2].innerHTML);
    }

    // Test match nul
    let compteur = 0;
    cases.forEach(function (c) {
       if (c.innerHTML !== '') compteur++;
       console.log(compteur)
    });
    if (compteur == 9) afficherGagnant("Arg")

}

/**
 * Affiche le vainqueur
 * @param gagnant
 */
function afficherGagnant(gagnant) {
    if (gagnant === 'Arg') alert("Match nul");
    else alert(`${gagnant} à gagné `);
    cases.forEach(el => el.innerHTML = '')
}

/**
 * Ajouter un évènement pour chaque case
 */
cases.forEach(el => el.addEventListener('click', jouer));