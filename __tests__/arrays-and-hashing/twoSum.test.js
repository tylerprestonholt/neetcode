import { twoSum } from "../../solutions/arrays-and-hashing/twoSum";

describe("testing twoSum", () => {
  let nums;
  let target;

  it("should error when first input is not an array", () => {
    nums = {};
    target = 0;
    expect(() => twoSum(nums, target)).toThrow(Error);
  });

  it("should error when second input is not a number", () => {
    nums = [];
    target = "0";
    expect(() => twoSum(nums, target)).toThrow(Error);
  });

  it("should return false when no two addends sum to target", () => {
    nums = [1, 2, 3, 4, 5];
    target = 10;
    expect(twoSum(nums, target)).toBe(false);
  });

  it("should return true when two addends sum to target", () => {
    nums = [1, 2, 3, 4, 5];
    target = 6;
    expect(twoSum(nums, target)).toBe(true);
  });
});
