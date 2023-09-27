'use strict'

function letters(cadena) {
	return cadena.length;
}

function words(cadena) {
	return cadena.split(' ').length;
}

function upperString(cadena) {
	return cadena.toLocaleUpperCase();
}

function titleString(cadena) {
	let array = cadena.split(' ');
	let arrayNueva = array.map( cadena => cadena.charAt(0).toLocaleUpperCase() + cadena.substr(1));
	return arrayNueva.join(' ');
}

function backwardsLetters(cadena) {
	return cadena.split('').reverse().join('');
}

function backwardsWords(cadena) {
	return cadena.split(' ').reverse().join(' ');
}

function palindrome(cadena) {
	cadena = cadena.toLowerCase().replace(/ /g, '');
	return cadena === cadena.split('').reverse().join('');
}

export {
	letters,
	words,
	upperString,
	titleString,
	backwardsLetters,
	backwardsWords,
	palindrome
}