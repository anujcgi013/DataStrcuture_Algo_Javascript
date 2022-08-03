class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // console.log("\nGetting value of ", key);
        if (!this.cache.has(key))
            return -1;
        // console.log("Mapping is", this.cache);
        const v = this.cache.get(key);
        // console.log("V = ", v);
        this.cache.delete(key);
        // console.log("deleted the key");
        this.cache.set(key, v);
        // console.log("set the key again");
        // console.log("Mapping is", this.cache);
        // console.log("\n");
        return this.cache.get(key);
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // console.log("\nSetting the value ", key, " and ", value);
        // console.log("Mapping is ", this.cache);
        if (this.cache.has(key)) {
            // console.log("Cache had the key, so deleting it");
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        // console.log("Value is set");
        // console.log("Cache size ", this.cache.size);
        // console.log("Capacity ", this.capacity);
        if (this.cache.size > this.capacity) {
            // console.log("Mapping is ", this.cache);
            // console.log("Deleting ", this.cache.keys().next().value);
            this.cache.delete(this.cache.keys().next().value); // keys().next().value returns first item's key
        }
        // console.log("Mapping is ", this.cache);
        // console.log("\n");
    }
}

console.log(LRUCache(
    ["LRUCache","put","put","get","put","get","put","get","get","get"]
    [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]));


