/* eslint-disable indent */
/* eslint-disable strict */
class Memory {
    constructor() {
        this.memory = new Float64Array(1024);
        this.head = 0;
    }
    //reserves block of memory consisting of size boxes which you can safely modify
    //returning to 1st or null if allocation fails
    allocate(size) {
        if (this.head + size > this.memory.length) {
            return null;
        }

        let start = this.head;

        this.head += size;
        return start;
    }
    // frees block of memory reserved using allocate
    free(ptr) { }

    //copies size boxes of data from the from pointer to the to pointer
    copy(toIdx, fromIdx, size) {
        if (fromIdx === toIdx) {
            return;
        }

        if (fromIdx > toIdx) {
            // Iterate forwards
            for (let i = 0; i < size; i++) {
                this.set(toIdx + i, this.get(fromIdx + i));
            }
        } else {
            // Iterate backwards
            for (let i = size - 1; i >= 0; i--) {
                this.set(toIdx + i, this.get(fromIdx + i));
            }
        }
    }
    // returns value stored at certain memory address 
    //   ptr short for pointer
    get(ptr) {
        return this.memory[ptr];
    }
    //sets value sotres at a certain memory address
    set(ptr, value) {
        this.memory[ptr] = value;
    }
}

module.exports = Memory;

