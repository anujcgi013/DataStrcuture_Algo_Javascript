// This is a tricky problem if you haven't seen it before. I remember my professor in Intro to Data Structures and Algorithms showed it to us pretty early on back in college. But if you haven't seen the "trick", it's tough to say how you might use intuition to get to it.

// Here's what matters:

// At each level of the stack, as we add items, any assertion we make about that level will always be true at that level, regardless of what comes next.

// Let me rephrase that with an example:

// Say we have four inputs to push on to the stack: 4, 2, 7, 1.

// When we push 4 on to an empty stack, 4 is both the current minimum number on the stack. It will always be the smallest value of the stack at its level and below (the empty stack).
// When we push 2 on top of 4, now 2 is the minimum value in the stack. That's true for its own level, and every level before it, such as 4.
// When we push 7 on top of 2, 2 is still the minimum value (since 7 > 2). That's still true for the third level, it's still true for the second level, and it's still true for the first level.
// When we push 1 on top of the stack, it's our new minimum value, and that's true of itself and every level before it.
// If we were to pop 1 off the stack, the new minimum would be 2. We don't need to check every level of the stack underneath 1, we just know that at the time when we pushed 7 onto the stack, 2 was the minimum we had ever put into the stack.

// So what we'll do to keep track of this is push objects into our stack, rather than just the raw numbers. Our objects will look like this:

const item = {
  value: val,
  minimum: min
}
// Where val is the inserted val, and min is whatever the minimum for that level is - which we can calculate by looking back at the previous level.

// Here's how we can write that in JavaScript:

class MinStack {
    constructor() {
        // Set up a JavaScript array as an internal representation of the stack.
        this.stack = [];
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // Every time we push, 
        // we'll construct an object that keeps track of the value, `val`,
        // and this level's minimum, `min`. 
        // We'll do that with an object that looks like: 
        // { value: val, minimum: min }
        //
        // So first, let's set up two variables: `value`, and `minimum`. 
        // We already know what `value` should be: the `val` input.
        // And we leave `minimum` undefined for now.
        let value = val;
        let minimum;

        // If the stack is empty, this is the first item, and the minimum is just `val`
        if (this.stack.length === 0) {
            minimum = val;
        } else {
            // Otherwise, we want to compare the input `val` with the previous minimum. 
            //
            // So grab the previous item in the stack, and find the minimum from it
            const previousItem = this.stack[this.stack.length - 1];
            const previousMinimum = previousItem.minimum;

            // If `val` is less than `previousMinimum`, then it's the `minimum` for the current level
            if (val < previousMinimum) {
                minimum = val;
            } else {
                // Otherwise, the previous minimum is still the minimum at this level
                minimum = previousMinimum;
            }
        }

        // Once we've determined what the minimum at this level is, we can push our object into the stack.
        this.stack.push({ value, minimum });
    }
    /**
     * @return {void}
     */
    pop() {
        // When we pop the stack, LeetCode expects just the `value` item from each object,
        // not the whole object itself.
        // 
        // So let's pop the array, and then return the destructured `value`
        const item = this.stack.pop();
        const { value } = item;
        return value;
    }
    /**
     * @return {number}
     */
    top() {
        // As with `pop()`, we just want to return the `value` object of the top, 
        // so we should grab the top item in the array,
        // and return `value` from the object. 
        //
        // This time, we don't pop() off the array, though.
        const item = this.stack[this.stack.length - 1];
        const { value } = item;
        return value;
    }
    /**
     * @return {number}
     */
    getMin() {
        // `getMin` functions like `top`, but instead of returning the `value`
        // from the top item, we return the `minimum` from that item, 
        // since it will be the true minimum for this level of the stack.
        const item = this.stack[this.stack.length - 1];
        const { minimum } = item;
        return minimum;
    }
}





/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */