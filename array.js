/* eslint-disable indent */
/* eslint-disable strict */
const Memory = require('./memory');

class drillArray {
    constructior() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = Memory.allocate(this.length);
    }
    //creates block
    //pushes value into block
    //O(n)
    push(value) {
        if (this.length >= this._capacity) {
            this._resize(this.length + 1) * drillArray.SIZE_RATIO;
        }
        Memory.set(this.ptr + this.length, value);
        this.length++;
    }
    //gives extra space
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = Memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        Memory.copy(this.ptr, oldPtr, this.length);
        Memory.free(oldPtr);
        this._capacity = size;
    }

    // Gathers the values from the provided index
    get(index){
        if(index < 0 || index >= this.length){
            throw new Error('Index error');
        }
        return Memory.get(this.ptr + index);
    }

    // Removes the value at the end of the array.
    pop(){
        if(this.length === 0){
            throw new Error ('Index error');
        }
        const value = Memory.get(this.ptr + this.length -1);
        this.length--;
        return value;
    }
    // Insert a value into an array
    insert(index, value){
        if(index < 0 || index >= this.length){
            throw new Error('Index error');
        }
        if(this.length >= this._capacity){
            this._resize((this.length +1)* drillArray.SIZE_RATIO);
        }
        Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        Memory.set(this.ptr + index, value);
        this.length++;
    }
    // Removes a value from a specific point in an array. 
    // Copies the values backwards from where you removed.
    remove(index){
        if(index < 0 || index >= this.length){
            throw new Error('Index error');
        }
        Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index -1);
        this.length--;
    }

}
// If over capacity this will triple size of memory
drillArray.SIZE_RATIO = 3;

module.exports = drillArray;