// The Dinger Dam has 19 generators of two different types. Generators 1-4
// output 62 megawatts (MW) and generators 5-19 output 124 MW.
//
// The Dam Rangers have asked you to create a printout shows the power output
// of each generator and the total power being generated after each generators
// is turned on. The first two console logs should look like the following:
//
//    Generator #1 is on, adding 62 MW, for a total of 62 MW!
//    Generator #2 is on, adding 62 MW, for a total of 124 MW!
//
// The 5th and 6th console log should like like the following:
//
//    Generator #5 is on, adding 124 MW, for a total of 372 MW!
//    Generator #6 is on, adding 124 MW, for a total of 496 MW!
//
// Use the variables below in your solution.

let currentGen = 1;
let totalGen = 19;
let totalMW = 0;


for (; currentGen < 5; currentGen++) {
console.log(`Generator ${currentGen} is on, adding ${62} MW, for a total of ${currentGen * 62} MW!`);
}

for (; currentGen + 4 <= 19; currentGen++) {
console.log(`Generator ${currentGen} is on, adding ${124} MW, for a total of ${(currentGen - 4) * 124 + 248} MW!`);
}
