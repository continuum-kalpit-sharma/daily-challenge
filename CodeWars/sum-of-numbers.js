// Challenge:
// Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

function GetSum(a, b) {
    if (a === b) {
        console.log('a is equal to b');
        return a;
    } else {
        console.log('a is not equal to b');
        let sum = 0, min, max;
        if (a < b) { min = a, max = b; }
        else { min = b, max = a; }
        for (var i = min; i <= max; i++) {
            console.log(`Adding ${i} to ${sum}`);
            sum += i;
        }
        return sum;
    }
}

// Ok, in retrospective, this is way too long and could have been done in 4 lines of code. I'll do better next time.
