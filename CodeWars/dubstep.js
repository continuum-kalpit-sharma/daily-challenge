/*
Original Problem: http://codeforces.com/problemset/problem/208/A
*/

function songDecoder(song){
    if (typeof(song) === 'string' && song !== '' && song.length < 200) {
        var originalSong = song.split("WUB").filter((word) => {
            if (word != '') {
                return word;
            }
        }).join(' ');
        console.log(originalSong);
        return originalSong;
    }
}

songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB');
songDecoder("AWUBBWUBC") //, "A B C","WUB should be replaced by 1 space");
songDecoder("AWUBWUBWUBBWUBWUBWUBC") //, "A B C","multiples WUB should be replaced by only 1 space");
songDecoder("WUBAWUBBWUBCWUB") //, "A B C","heading or trailing spaces should be removed");
