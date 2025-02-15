/*The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]*/


// function openOrSenior(members) {
//     const results = [];
//     for (let i = 0; i < members.length; i++) {
//         const [age, handicap] = members[i];
//         if (age >= 55 && handicap > 7) {
//             results.push("Senior");
//         } else {
//             results.push("Open");
//         }
//     }
//     return results;
// }

// const inputData = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];

// const output = openOrSenior(inputData);
// console.log(output);


function openOrSenior(members) {
    return members.map(([age, handicap]) => {
        return (age >= 55 && handicap > 7) ? "Senior" : "Open";
    });
}

// Example input
const inputData = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]];

// Output
const output = openOrSenior(inputData);
console.log(output);
