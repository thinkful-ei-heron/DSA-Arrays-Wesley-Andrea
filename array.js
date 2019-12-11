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

}
// If over capacity this will triple size of memory
drillArray.SIZE_RATIO = 3;

module.exports = drillArray;