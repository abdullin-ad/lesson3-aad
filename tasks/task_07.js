/*Ваша задача — написать такую кодировку.
  Для данной строки верните массив массивов [[i1, s1], [i2, s2], …, [in, sn]],
так что можно восстановить исходную строку, реплицируя символ sx ix раз и объединяя. Ваша кодировка длины серии должна быть минимальной, т.е.
. для всех i значения si и si+1 должны различаться.*/
// runLengthEncoding("hello world!")
//=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]
function runLengthEncoding(str) {
	if (str.length === 0) {
		return []
	}

	let result = []
	let currentChar = str[0]
	let count = 1

	for (let i = 1; i < str.length; i++) {
		if (str[i] === currentChar) {
			count++
		} else {
			result.push([count, currentChar])
			currentChar = str[i]
			count = 1
		}
	}

	result.push([count, currentChar])

	return result
}

module.exports = runLengthEncoding
