function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let average = sum / 3;
    return average;
}

function createSentence(num, noun) {
    return `On average, a Berkeley student has ${num} ${noun}s.`;
}

function getRandomNum(max) {
    return Math.random() * max; // Adjusted to return a random number between 0 and max
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);
let avg = averageThreeNumbers(x, y, z);
let sentence = createSentence(avg, 'turtle')

console.log(sentence);

let num = getRandomNum(100);

console.log(num); // Log the random number generated with max of 100
