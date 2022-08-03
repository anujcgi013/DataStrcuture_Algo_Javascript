// Solution 1 - 

// var lengthOfLIS = function(nums) {
    
//     if(!nums.length) return 0;
    
//     // dynamic length because JavaScript is awesome like that :)
//     // hence we don't need to track of the current running length of tails
//     const tails = [];
    
//     tails[0] = nums[0];
    
//     for(let i = 1; i < nums.length; i++) {
        
//         // replace current nums[i] with head if it's smaller
//         if(nums[i] < tails[0]) {
//             tails[0] = nums[i];     
//         // if current nums[i] is bigger than the largest value we've recorded
//         // we can extend our tails by current nums[i]
//         } else if(nums[i] > tails[tails.length-1]) {
//             tails.push(nums[i]);
//         } else {
//             // using binary search to find the insertion point of current nums[i]
//             // return r because we're looking to replace index of tail that's greater than nums[i]
//             let l = 0;
//             let r = tails.length-1;
//             while(l < r) {
//                 const mid = (l+r)/2 >> 0;
//                 if(tails[mid] >= nums[i]) {
//                     r = mid
//                 } else {
//                     l = mid + 1;
//                 }
//             }
//             tails[r] = nums[i];
//         }
        
//     }
    
//     return tails.length;
    
// };

// Solution 2

// var lengthOfLIS = function(nums) {
//     //define dp array
//     const numsLen = nums.length;
//     let dp = new Array(numsLen).fill(1);
    
//     //Iterate from i = 1 to i = nums.length - 1. At each iteration, use a second for loop to iterate from j =    //0 to j = i - 1 (all the elements before i). For each element before i, check if that element is smaller    //than nums[i]. If so, set dp[i] = max(dp[i], dp[j] + 1).
//     for(let i = 1; i < numsLen ; i++){
//         for(j = 0 ; j < i ; j++){
//             if(nums[j]< nums[i])
//             dp[i] = Math.max(dp[i],dp[j] + 1 );
//         }
//     }
    
//     let longest = 0;
//     for(let i = 0 ; i < numsLen ; i++){
//         longest = Math.max(longest, dp[i]);
//     }
    
//     return longest;
// };


// Solution 3 - 

// Time: O(n^2) - nested loops of length n
// Space: O(n) - single array of length n

// Strategy and Intuition:

// The longest increasing subsequence (LIS) at any point is at least 1.

// Take the example [10, 9, 2]. At every index, we can't do any worse than 1.
// To figure out if we can do better than 1, we'll need to compare two numbers. This sets the grounds for using two loops to compare nums[i] against nums[j].

// If we find that nums[j] < nums[i], we may have found a longer increasing subsequence at index i.

// In plain English, the current num at i is greater than the prev num at j. Update the LIS at i if the LIS at j plus 1 is greater than it.
// In Javascript, Math.max(dp[i], dp[j]+1);
// To be able to refer back to previously calculated LIS answers, we'll need to save them somewhere. This is the basis of our dp array.

// I hope this helps!

const lengthOfLIS = (nums) => {
	let dp = new Array(nums.length).fill(1);
	let longest = 1;
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j]+1);
				longest = Math.max(longest, dp[i]);
			}
		}
	}
	return longest;
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4