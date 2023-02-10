/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let output = ''
	// 读取第一个词
	const firstWord = strs[0]
	for (let i = 0; i < firstWord.length; i++) {
		// 尝试确定第一个输出
		const c1 = firstWord[i]
		let match = true
		// 通过第二次遍历开始遍历余下的所有单词
		for (let j = 1; j < strs.length; j++) {
			// 下一个单词
			const word = strs[j]
			// 遍历下一个词的后，c1与c2进行对比，如果不匹配，match设为false
			const c2 = word[i]
			if (c1 !== c2) {
				match = false
				break
			}
		}
		if (match) {
			output = output + c1
		} else {
			break
		}
	}
	return output
}

console.log(longestCommonPrefix())
