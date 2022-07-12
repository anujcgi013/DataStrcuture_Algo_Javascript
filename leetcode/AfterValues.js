function solution(after) {
    
    if(after.length < 1) return after;
    
    const [a, b] = after;
    let newA = [];
    let newB = [];
    
    let before = [];
    
    for(let i = 0; i< a.length; i++) {
        for(let j = 0; j < b.length; j++) {
            if(i === 0 && j === 0 ) newA.push(a[0]);
            if(i === 0 && j === 1 ) newA.push(a[1]- a[0]);
            if(i===1 && j===0) newB.push(b[0] - a[0]);
             if(i === 1 && j === 1) newB.push(b[1] - newA[0] - newA[1] - newB[0]);
        }
    }
    before.push(newA, newB);
    return before;
 
 }

 //console.log(solution([[1, 2], [3, 4]]));
 console.log(solution([[0]]));