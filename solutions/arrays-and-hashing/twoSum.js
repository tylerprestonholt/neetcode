//time: O(n) | space: O(n)
const twoSum = (nums, target) => {
  //type check inputs and error if needed
  if (!Array.isArray(nums)) throw new Error("first argument must be an array");
  if (typeof target !== "number")
    throw new Error("second argument must be a number");

  //create cache to track visited nums
  const visitedNums = {};

  //loop over input
  for (let i = 0; i < nums.length; i++) {
    //calc dif using cur num and target
    const curNum = nums[i];
    const dif = target - curNum;
    //check cache for dif and return true if found
    if (dif in visitedNums) return true;
    //add cur num to cache
    visitedNums[curNum] = true;
  }

  //return false if loop completes
  return false;
};

export { twoSum };
