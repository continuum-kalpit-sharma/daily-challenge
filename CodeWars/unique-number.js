// There is an array with some numbers.
// All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains more than 3 numbers.
// The tests contain some very huge arrays, so think about performance.

let findUniq = (array) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== array[i+1] && array[i] !== array[i+2]) {
            console.log(array[i]);
            return;
        }
    }
}

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
