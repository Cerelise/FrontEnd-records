/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 暴力遍历
// 时间：O(n^2)
// 空间：O(1)

var twoSum = function (nums, target) {
	for (var i = 0; i < nums.length; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}
}
// console.log(twoSum([2, 3, 4], 6))

// 使用map优化
// 时间：O(n)
// 空间：O(n)
var twoSumMap = function (nums, target) {
	const lookupArr = {}
	for (let i = 0; i < nums.length; i++) {
		lookupArr[nums[i]] = i
	}

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i]
		const pairToFind = target - num
		const pairToFindIndex = lookupArr[pairToFind]
		if (lookupArr.hasOwnProperty(pairToFind) && pairToFindIndex !== i) {
			return [i, pairToFindIndex]
		}
	}
}
console.log(twoSumMap([2, 3, 4], 6))
