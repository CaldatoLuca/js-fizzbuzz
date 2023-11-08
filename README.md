# FizzBuzz

_HTML+css(bootstrap)+js_

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

## Indice

- [Scomposizone del problema](#scomposizione-del-problema)
- [Soluzione](#soluzione)

### Scomposizione del problema

1. Creazione di un ciclo for con contatore fino a 100
2. Stampa dei numeri con `console.log`
3. Creazione di condizioni `if/else if` per le tre casistiche
   - multipli di 3 (numero che diviso per 3 dia resto zero) - stampare 'Fizz'
   - multipli di 5 (numero che diviso per 5 dia resto 0) - stampare 'Buzz?
   - multipli di 5 e 3 (numero che diviso per 3 e diviso per 5 dia resto zero) - stampare 'FizzBuzz'

NB

usare l' operatore modulo per determinare il resto

cercare di unire le stringhe 'Fizz' e 'Buzz' per stampare 'FizzBuzz'

4. Creazione di un container nel DOM in cui mostrare la lista
   - creo un container nell' HTML
   - creo un `ul`
   - inserisco nell' `ul` la lista dei numeri

NB
usare `document.createElement('li');` per creare i `li` da inserire nell' `ul`

usare `append` per avere un output nell' HTML
