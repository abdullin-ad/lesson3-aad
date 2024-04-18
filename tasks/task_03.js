/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
	let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
	let vowelsCount = 0

	for (let i = 0; i < str.length; i++)
		if (vowels.includes(str[i])) vowelsCount++

	return vowelsCount
}

module.exports = getVowelsCount
