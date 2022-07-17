var reorganizeString = function(s) {
    let map = new Map()
    let res = []
    
    for(let ch of s){
        map.set(ch, map.get(ch)+1 || 1)
    }
    
    let arr = [...map.entries()].sort((a,b)=>b[1]-a[1])
    
    if(arr.length == 1 & arr[0][1]>1) return '' 
    
    while(arr[0][1]>0){
        res.push(arr[0][0])
        arr[0][1]--
        if(arr[1][1]-- > 0){
            res.push(arr[1][0])
            arr.sort((a,b)=>b[1]-a[1])   //sorting arr is O(26) which is equal to O(1) since the max size of the alphabet is 26
        } else if(arr[0][1] > 0) return ''
    }

    return res.join('')
};

// Example 1:

// Input: s = "aab"
// Output: "aba"
// Example 2:

// Input: s = "aaab"
// Output: ""