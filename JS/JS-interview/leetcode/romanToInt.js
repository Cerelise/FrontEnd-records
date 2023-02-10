/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const dict = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	}
	let num = 0
	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
			num--
		} else if (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
			num -= 10
		} else if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
			num -= 100
		} else {
			// map
			num = num + dict[s[i]]
		}
	}
	return num
}
// console.log(romanToInt('LVIII'))

romanToInt2 = function (str) {
	let num = 0
	let nums = []
	// 这个循环用于将读取的罗马数字写入新数组
	for (let i = 0; i < str.length; i++) {
		switch (str[i]) {
			case 'M':
				num = 1000
				break
			case 'D':
				num = 500
				break
			case 'C':
				num = 100
				break
			case 'L':
				num = 50
				break
			case 'X':
				num = 10
				break
			case 'V':
				num = 5
				break
			case 'I':
				num = 1
				break
		}
		nums[i] = num
	}

	// 若较小的数字在较大的数字前面就加负号
	let res = 0
	for (let i = 0; i < nums.length; i++) {
		if (i < nums.length - 1 && nums[i] < nums[i + 1]) {
			nums[i] = -nums[i]
		}
		res += nums[i]
	}
	return res
}

console.log(romanToInt2('LVIII'))
