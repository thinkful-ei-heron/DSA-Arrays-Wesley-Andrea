/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable strict */
const drillArray = require('./array');


function main() {
    drillArray.SIZE_RATIO = 3;

    let arr = new drillArray();

    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    arr.pop();
    arr.pop();
    arr.pop();

    // console.log(arr.get(0));
    for (let i = 0; i < arr.length; i++) {
        arr.pop();
    }
    arr.push('tauhida');
    console.log(arr.get(1));
    //NaN being returned
    //float value looking for decimal and we are passing in a

    //resize
    //if arr.length >= capacity resize will increase capacity 
    // based on the ratio you provide 

    console.log(arr);
}

main();
// drillArray { length: 1, _capacity: 1, ptr: 0 }
// with added pushes drillArray { length: 6, _capacity: 6, ptr: 15 }
// The ptr is 3 times the original size of the array due to the ._resize method.
//drillArray { length: 3, _capacity: 6, ptr: 15 }
//.pop decreses the length, but capacity stays the sam
// values not removed because memory has not been overwritten

//URLify a string
//replace spaces with %20

function urlify(str) {
    let res = str.replace(' ', '%20');
    return res;
}
//console.log(urlify('test code'));
const testArr = [4, 6, -3, 5, -2, 1];

// This Complexity is O(n) but could be O(log(n)) if we split the arr. 
function filterTheArray(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 5) {
            results.push(arr[i]);
        }
    }
    return results;
}
//console.log(filterTheArray(testArr));

// Complexity is O(n^2), Polynomial.
function maxSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (maxSum < sum) {
                maxSum = sum;
            } else {
                sum;
            }
        }
    }
    return maxSum;
}

//console.log(maxSum(testArr));

//Merge arrays
//Linear time O(n) output directly proportional to input
let arr1 = [1, 3, 6, 8, 11];
let arr2 = [2, 3, 5, 8, 9, 10];

function mergeArrays(arr1, arr2) {
    let result = arr1.concat(arr2);

    result.sort(function (a, b) { return a - b; });

    return result;
}
//console.log(mergeArrays(arr1, arr2));

// Remove characters
// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs.

function removeChar(str, char) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let hasChar = true;
        for (let j = 0; j < char.length; j++) {
            if (str[i] === char[j]) {
                hasChar = false;
            }
        }
        if (hasChar) {
            result += str[i];
        }
    }
    return result;
}
//console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));


// Products Drill
// Complexity Polynomial.

let input = [1, 3, 9, 4];
// Output:[108, 36, 12, 27]

function product(arr) {
    let total = [];
    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                product *= arr[j];
            }
        }
        total.push(product);
    }
    return total;
}
//console.log(product(input));

// 2D Array Drill
// O(n^2 * 2) Polynomial complexity.

let arrInput = [
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
];

// Expected Output
// [
// [0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]
//];


function zeroOut(arr) {
    // Create storage for results of overall, row, and column.
    let results = [];
    let rowResult = [];
    let columnResult = [];

    // Iterate over the entire 2D array.
    for (let i = 0; i < arr.length; i++) {
        // iterate over each array individually
        for (let j = 0; j < arr[0].length; j++) {
            // if the individual array at position [i] with element at position [j] is equal to 0. then set the corresponding result array to true. 
            if (arr[i][j] === 0) {
                rowResult[i] = true;
                columnResult[j] = true;
            }
        }

    }
    // iterate over the overall array. 
    for (let i = 0; i < arr.length; i++) {
        // if the results array is empty fill with empty arrays matching the length of the input array.
        if (!results[i]) {
            results[i] = [];
        }
        // if the either the row result or column result was set to true  then set the corresponding overall result position to 0.
        for (let j = 0; j < arr[0].length; j++) {
            if (rowResult[i] || columnResult[j]) {
                results[i][j] = 0;
            }
            else {
                results[i][j] = 1;
            }
        }

    }
    return results;
}

//console.log(zeroOut(arrInput));

//String rotation
// Input: amazon, azonam
// Output: true

function stringRotation(str1, str2) {
    let match = false;

    for (let i = 0; i < str1.length; i++) {
        let testStr = (str1[i] + str1.slice(i + 1) + str1.slice(0, i))

        if (testStr === str2) {
            match = true;
        }
    }
    return match;
}
console.log(stringRotation('amazon', 'azonam'));
console.log(stringRotation('amazon', 'azonma'));
console.log(stringRotation('buffalo', 'falobuf'));



