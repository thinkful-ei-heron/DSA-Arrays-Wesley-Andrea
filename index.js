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
    let res = str.replace(' ', '%20')
    return res;
}
//console.log(urlify('test code'));
const testArr = [4, 6, -3, 5, -2, 1];

// This Complexity is O(n) but could be O(log(n)) if we split the arr. 
function filterTheArray(arr){
    let results = [];
    for(let i = 0; i< arr.length; i++){
        if(arr[i] >= 5){
            results.push(arr[i]);
        }
    }
    return results;
}
//console.log(filterTheArray(testArr));

// Complexity is O(n^2), Polynomial.
function maxSum(arr){
    let maxSum = 0;
    for(let i=0; i< arr.length; i++){
        let sum = 0;
        for(let j=i; j<arr.length; j++){
            sum += arr[j];
            if(maxSum < sum){
                maxSum = sum;
            } else {
                sum;
            }
        }
    }
    return maxSum;
}

console.log(maxSum(testArr));
