// creo un array vuoto che ospiterà i numeri
var numeri = []

// stampo i numeri da 1 a 100 con un ciclo for
 for (var i = 1; i <= 100; i++) {
   console.log(i);

   if (i % 3 == 0 && i % 5 != 0) {
     numeri.push('Fizz')
   } else if (i % 3 != 0 && i % 5 == 0) {
     numeri.push('Buzz')
   } else if (i % 3 == 0 && i % 5 == 0) {
     numeri.push('FizzBuzz')
   } else {
     numeri.push(i)
   }
}

console.log(numeri);
