import { containsDuplicate } from "../../solutions/arrays-and-hashing/containsDuplicate";

describe("testing containsDuplicate", () => {
  let nums;

  it("should error when input is not an array", () => {
    nums = {};
    expect(() => containsDuplicate(nums)).toThrow(Error);
  });

  it("should return false when input is empty", () => {
    nums = [];
    expect(containsDuplicate(nums)).toBe(false);
  });

  it("should return false when input does not include a duplicate", () => {
    nums = [3, 4, 2, 6, 7, 9];
    expect(containsDuplicate(nums)).toBe(false);
  });

  it("should return true when input does include a duplicate", () => {
    nums = [1, 2, 6, 8, 2, 3];
    expect(containsDuplicate(nums)).toBe(true);
  });
});
