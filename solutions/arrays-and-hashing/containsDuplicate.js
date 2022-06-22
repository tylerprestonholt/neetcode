//time: O(n) | space: O(n)
const containsDuplicate = (nums) => {
  //type check input and error if not array
  if (!Array.isArray(nums)) throw new Error("input must be an array");
  //check input length and return early if less than two
  if (nums.length < 2) return false;
  //create cache to store visited nums
  const visitedNums = new Set();
  //loop over input
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    //check cache for cur num, return true if present
    if (visitedNums.has(curNum)) return true;
    //if no return, add cur num to cache
    visitedNums.add(curNum);
  }
  //return false
  return false;
};

// //time: O(nlog(n)) | space: O(1)
// const containsDuplicate = (nums) => {
//   //check input length and return early if less than two
//   if (nums.length < 2) return false;
//   //sort input
//   nums.sort((a, b) => a - b);
//   //loop over input
//   for (let i = 0; i < nums.length - 1; i++) {
//     //compare cur num to next, return true if equal
//     if (nums[i] === nums[i + 1]) return true;
//   }
//   //return false
//   return false;
// };

export { containsDuplicate };
