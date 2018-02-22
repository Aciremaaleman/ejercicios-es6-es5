// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

                                // ES5

// declara las variables ES5

// var array = [2, 4, 6];
var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];


// declaración de la funcion 
// Nota: los signos menos en consola desaparecen y el -3 como no es par tambien aunque el 5 que si lo es no
function square () {
  for (var i = 0; i < array.length; i++){
    if (array[i] >= 0 && array[i] <= 0 || array[i] % 2 == 0){
      console.log(array[i] * array[i]);
    } else if (array[i] % 2 == 1) {
      console.log(array[i]);
  }
 }
}
square(array);


                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6


// declara variables (let-const)

// const array = [2, 4, 6];
// const array = [-3, 2, -8, 12, 5];
// const array = [1, 2, 3, 4, 5];

// declara la funcion y ejecuta el código
// const square = array => {
//   let num = array.map(array => {
//     if (array >= 0 && array <= 0 || array % 2 == 0) {
//       return array * array
//     } else {
//       return array
//     }
//   });
//   console.log(num);
// };  
// square(array);

// me regresa el array elevado al cuadrado falta un if
// const num = array.map(item => Math.pow(item,2));
// console.log(num)

