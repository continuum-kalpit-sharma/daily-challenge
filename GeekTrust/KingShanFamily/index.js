const chalk = require('chalk');                         // Just to make it more readable in the terminal...
const familyTree = require('./family-tree.json');       // To make it more readable in this file

/*============================ Relationship Types ============================*/

const childrenRel1 = ['children', 'son', 'daughter'];
const childrenRel2 = ['grand-children', 'grand-son', 'grand-daughter'];
const parentsRelY = ['parents', 'father', 'mother'];
const parentsRelY2 = ['grand-parents', 'grand-father', 'grand-mother'];
const parentsRelYX = ['paternal aunt', 'maternal aunt', 'paternal uncle', 'maternal uncle', 'cousins'];
const parentsRelX = ['siblings', 'brothers', 'sisters', 'sister-in-law', 'brother-in-law']

const femaleRel = ['daughter', 'grand-daughter', 'mother', 'paternal aunt', 'maternal aunt', 'sisters', 'sister-in-law'];
const maleRel = ['son', 'grand-son', 'father', 'paternal uncle', 'maternal uncle', 'brothers', 'brother-in-law'];


/*============================ FUNCTIONS ============================*/

const findRelationships = (person, rel) => {
    let results = [];
    for (var i = 0; i < familyTree.length; i++) {
        if (familyTree[i].name === person) {
            if (childrenRel1.includes(rel) || childrenRel2.includes(rel)) {
                checkChildren(familyTree[i].id, rel, person, results);
            } else if (parentsRelY.includes(rel) || parentsRelX.includes(rel) || parentsRelYX.includes(rel)) {
                checkParents(familyTree[i].id, rel, person, results);
            } else {
                console.log('We cannot yet compute that kind of relationship');
            }
        }
    }
}

const checkChildren = (personId, rel, person, results) => {
    for (var i = 0; i < familyTree.length; i++) {
        if (familyTree[i].parents.includes(personId)) {
            if (childrenRel1.includes(rel)) {
                results.push(familyTree[i]);
            } else {
                let moreResults = familyTree.filter( person => person.parents.includes(familyTree[i].id) );
                results = results.concat(moreResults);
            }
        }
    }
    checkSex(rel, results, person);
}

const checkParents = (personId, rel, person, results) => {
    for (var i = 0; i < familyTree.length; i++) {
        if (familyTree[i].children.includes(personId)) {
            if (parentsRelX.includes(rel)) {
                let moreSiblings = familyTree.filter( person => person.parents.includes(familyTree[i].id) && person.id != personId);
                if (rel.includes('in-law')) {           // ADD BROTHERS & SISTERS IN LAW
                    let inLawResults = [];
                    checkPartners(personId, moreSiblings, inLawResults);
                    results = [... new Set (results.concat(moreSiblings, inLawResults))];
                } else {                                   // ADD BROTHERS & SISTERS
                    results = [... new Set(results.concat(moreSiblings))];
                }
            } else if (parentsRelYX.includes(rel)) {
                let moreUnclesAndAunts = familyTree.filter( (person) => {
                    if (person.children.indexOf(personId) === -1) {
                         return person.parents.includes(familyTree[i].parents[0])
                    }
                });
                if (rel === 'cousins') {
                    let cousins = [];
                    moreUnclesAndAunts.map( (person) => {
                        person.children.forEach( (childId) => {
                            cousins.push(familyTree[childId - 1])
                        })
                    })
                    results = results.concat(cousins);
                } else {
                    let inLawResults = [];
                    checkPartners(personId, moreUnclesAndAunts, inLawResults)
                    results = results.concat(moreUnclesAndAunts, inLawResults);
                }
            } else { // ADD PARENTS
                results.push(familyTree[i]);
            }
        }
    }
    checkSex(rel, results, person);
}

const checkPartners = (personId, arrayOfPeople, arrayOfPartners) => {
    arrayOfPeople.forEach( (person) => {
        if (person.partner.length > 0 && person.children.indexOf(personId) === -1) {
            let partner = person.partner[0] - 1;
            arrayOfPartners.push(familyTree[partner]);
        }
    })
}

const checkSex = (rel, resultsArray, person) => {
    if (femaleRel.includes(rel)) {
        resultsArray = resultsArray.filter( person => person.gender === 'female')
    } else if (maleRel.includes(rel)) {
        resultsArray = resultsArray.filter( person => person.gender === 'male')
    }
    giveFinalResults(resultsArray, rel, person);
}

const giveFinalResults = (resultsArray, rel, person) => {
    console.log(chalk.bgBlue(`Result of your search for ${rel} of ${person}:`))
    if (resultsArray.length === 0) {
        console.log('No such relationship');
    }
    for (var i = 0; i < resultsArray.length; i++) {
        console.log(resultsArray[i].name);
    }
}

/*============================ Tests ============================*/

findRelationships('Chit', 'son');
findRelationships('Chit', 'grand-son');
findRelationships('Chit', 'grand-daughter');
findRelationships('Chit', 'grand-children');
findRelationships('Satya', 'grand-children');
findRelationships('Satya', 'grand-daughter');
findRelationships('Drita', 'parents');
findRelationships('Vich', 'siblings');
findRelationships('Ish', 'father');
findRelationships('Satvy', 'siblings');
findRelationships('Savya', 'sisters');
findRelationships('Savya', 'maternal uncle');
findRelationships('Savya', 'maternal aunt');
findRelationships('Lavnya', 'paternal uncle');
findRelationships('Lavnya', 'paternal aunt');
findRelationships('Chit', 'grand-son');
findRelationships('Drita', 'cousins');
findRelationships('Vila', 'brother-in-law');
findRelationships('Satvy', 'sister-in-law');
