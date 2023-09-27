import './style.css'
import { letters, words, upperString, titleString, backwardsLetters, backwardsWords, palindrome} from './functions'
/* import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js' */

document.querySelector('#app').innerHTML = `
  <div>
  <header>
		<h1>Ejercicio 1.2: Frase</h1>
	</header>
	<p>Abre la consola para ver el resultado.</p>
	<footer><small>Diseño Web en Entorno Cliente - Juan Segura</small></footer>
  </div>
`

let cadena = prompt("Introduce una frase: ");

if (cadena === null || !cadena.trim()) {
    console.log('No ha introducido ninguna frase')
} else {
    console.log('Frase: %s', cadena);
    console.log('%s letras y %s palabras', letters(cadena), words(cadena));
    console.log(upperString(cadena));
    console.log(titleString(cadena));
    console.log(backwardsLetters(cadena));
    console.log(backwardsWords(cadena));

    if (palindrome(cadena)) {
        console.log('Sí es un palíndromo');
    } else {
        console.log('No es un palíndromo');
    }
}