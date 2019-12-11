const drillArray = require('./array');


function main(){
    drillArray.SIZE_RATIO = 3;

    let arr = new drillArray();

    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
}

main();
// drillArray { length: 1, _capacity: 1, ptr: 0 }
// with added pushes drillArray { length: 6, _capacity: 6, ptr: 15 }
// The ptr is 3 times the original size of the array due to the ._resize method.

