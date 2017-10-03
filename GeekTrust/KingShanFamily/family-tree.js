const fs = require('fs');

let familyTree = [
    { id: 1, name: 'King Shan', gender: 'male', partner: [2], parents: [], children: [3, 4, 6, 8] },
    { id: 2, name: 'Queen Anga', gender: 'female', partner: [1], parents: [], children: [3, 4, 6, 8] },
    { id: 3, name: 'Ish', gender: 'male', partner: [], parents: [1, 2], children: [] },
    { id: 4, name: 'Chit', gender: 'male', partner: [5], parents: [1, 2], children: [10, 12] },
    { id: 5, name: 'Ambi', gender: 'female', partner: [4], parents: [], children: [10, 12] },
    { id: 6, name: 'Vich', gender: 'male', partner: [7], parents: [1, 2], children: [13, 15] },
    { id: 7, name: 'Lika', gender: 'female', partner: [6], parents: [], children: [13, 15] },
    { id: 8, name: 'Satya', gender: 'female', partner: [9], parents: [1, 2], children: [17, 19, 21] },
    { id: 9, name: 'Vyan', gender: 'male', partner: [8], parents: [], children: [17, 19, 21] },
    { id: 10, name: 'Drita', gender: 'male', partner: [11], parents: [4, 5], children: [23, 24] },
    { id: 11, name: 'Jaya', gender: 'female', partner: [10], parents: [], children: [23, 24] },
    { id: 12, name: 'Vrita', gender: 'male', partner: [], parents: [4, 5], children: [] },
    { id: 13, name: 'Vila', gender: 'male', partner: [14], parents: [6, 7], children: [26] },
    { id: 14, name: 'Jnki', gender: 'female', partner: [13], parents: [], children: [26] },
    { id: 15, name: 'Chika', gender: 'female', partner: [16], parents: [6, 7], children: [] },
    { id: 16, name: 'Kpila', gender: 'male', partner: [15], parents: [], children: [] },
    { id: 17, name: 'Satvy', gender: 'female', partner: [18], parents: [8, 9], children: [] },
    { id: 18, name: 'Asva', gender: 'male', partner: [17], parents: [], children: [] },
    { id: 19, name: 'Savya', gender: 'male', partner: [20], parents: [8, 9], children: [28] },
    { id: 20, name: 'Krpi', gender: 'female', partner: [19], parents: [], children: [28] },
    { id: 21, name: 'Saayan', gender: 'male', partner: [22], parents: [8, 9], children: [29] },
    { id: 22, name: 'Mina', gender: 'female', partner: [21], parents: [], children: [29] },
    { id: 23, name: 'Jata', gender: 'male', partner: [], parents: [10, 11], children: [] },
    { id: 24, name: 'Driya', gender: 'female', partner: [25], parents: [10, 11], children: [] },
    { id: 25, name: 'Mnu', gender: 'male', partner: [24], parents: [], children: [] },
    { id: 26, name: 'Lavnya', gender: 'female', partner: [27], parents: [13, 14], children: [] },
    { id: 27, name: 'Gru', gender: 'male', partner: [26], parents: [], children: [] },
    { id: 28, name: 'Kriya', gender: 'male', partner: [], parents: [19, 20], children: [] },
    { id: 29, name: 'Misa', gender: 'male', partner: [], parents: [21, 22], children: [] },
]

const createJSONFile = () => {
    fs.writeFile('./family-tree.json', JSON.stringify(familyTree), (err) => {
        console.log(err);
    })
}

createJSONFile();
