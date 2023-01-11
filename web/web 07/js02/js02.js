console.log("Sesión js02");

console.log ("El resultado de 5 * 10= " + multiplicacion (5,10));
function multiplica( a,b) {
    return a * b;
}

/**
 * suma dos valores
 * @param {number} a primer operador para sumar
 * @param {number} b primer operador para sumar
 * @returns  resultado de a + b;
 */

const suma = function ( a, b) {
    const result = a + b;
    return result
};

console.log("La sumatoria de 4 + 6= " + suma( 4 , 6) );image.png

/* Funciones autoinvocadas.
Las funciones autoinvocadas (selft-invokin funtion) Pueden ser anónimas.
*/

( funtion saludos(){
    console.log ("hola, me estoy autoinvocando");
})();

/*
Funciones flecha
una funcion fleca (arrow funtion) son similalres a las funciones expresadas pero no requiere la palabra guntion
ademas, si solo tiene una instruccon y es el retorno, no requiere la inestruccion
return  las llaves
lsas funcionees flechas no tienen hosting*/

const restaExpresada = funtion (a, b) {
    return a-b;
}

const resta = ( a,b) => {
    return a -b;

}
 console.log("La resta de 20 - 2 =" + resta (20,2))

 const exponente = (a,b )=>{
const result = a**b;
    return result;
}

console.log("El número 4^3 =" + exponente (4,3));
const exponenteAlCuadrado = a => a**2;
console.log("El numero 4^2=" + exponenteAlCuadrado(4));

const imprimesaludo = () => console.log("holi cayoli");
imprimesaludo()

/*funciones con parametros inicializados*/

function divide( a=1,b=1){
    return a/b;
}

console.log("La división de 3/1 =" + divide (3));

/*Rest parametrers
El parámetro rest nos permite representar una serie 
de valores indefinidos en los argumentos de array.
El parametro rest siempre debe ir al final de todos los parámetros
*/

function sumatoriaIndefinida(a.b, ...restoDatos){
    let sumatoria = a + b;
    for (let i= 0; i < restoDatos.lenght; i++)
    sumatoria += restoDatos i ; 
    return sumatoria
}
console.log("Sumar varios número: "+ sumatoriaIndefinidad(2, 3, 4, 5));

/*
Funsiones recursivas.
funcion recursiva es una función que se llama a si misma.
*/

function factorialConCicloFor ( a){
    let total = 1; 
	for (i=1; i<=a; i++) {
		total *= i; 
	}
	return total;

}
function factorialConRecursión( a ){
          return a * factorialConRecursión( a -1)
}
console.log("Factorial 3 =" + factorialConCicloFor(3));
console.log("Factorial 5 =" + factorialConCicloFor(5));
console.log("Factorial 3 =" + factorialConRecursión(3));
console.log("Factorial 5 =" + factorialConRecursión(5));

