// House Robber Problem #198
// Can not rob 2 consecutive houses otherwise Police Alarm will be triggered
// Pick maximum amount from homes
// DP Problem (keep remembering the past)
//[1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2] -- 10
1, 2, 2, 4, 3, 5, 6, 6, 8, 7, 7, 10;

const streetRobber = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    nums[i] = +Math.max(nums[i] + nums[i - 2], (nums[i - 3] || 0) + nums[i]);
  }
  return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};

console.log(streetRobber([1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2]));
