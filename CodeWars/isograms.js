/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(isogr) {
    var isogram = isogr.toLowerCase();
    let letters = [], isIsogr = true;
    for (var i = 0; i < isogram.length; i++) {
        if (letters.indexOf(isogram[i]) === -1) {
            letters.push(isogram[i]);
        } else {
            isIsogr = false;
        }
    }
    return isIsogr;
}

isIsogram('Dermatoglyphics');
isIsogram( "aba" );
isIsogram( "moOse" );
