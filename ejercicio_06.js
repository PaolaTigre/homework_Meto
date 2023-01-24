/*Intercambiar la posición entre el primero y el ultimo elemento del siguiente array: 
`name=[’a’,’o’,’l’,’h’]`. Usar una variable auxiliar.*/


let Name = ['a','o','l','h'];
let aux = Name[0];

Name[0] = Name[Name.length-1];
Name[Name.length-1] = aux;

console.log(Name)