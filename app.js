/*ejercisios*/


/*=================== EJERCICIO F ==================*/

/*imc = peso / pow(altura / 100,2);
imc = round(imc * 100) / 100; */

/*
var txt1, txt2, imc;

txt1 = parseInt(prompt("indica tu peso"));
txt2 = parseInt(prompt("indica tu altura"));

imc = ( txt2 / ((txt1/100)*(txt1/100))).toFixed(2)


if (imc < 18.5) {
    console.log("bajo peso");
} else if (imc >= 18.6 && imc <= 24.99) {
    grado = "peso normal";
} else if (imc >= 25 && imc <= 29.99) {
    grado = "Delgadez aceptable.";
}else if (imc >= 18.5 && imc <= 24.99) {
    grado = "Normal.";
} else if (imc >= 25 && imc <= 29.99) {
    grado = "Preobeso.";
} else if (imc >= 30) {
    grado = "Obeso";
} 
*/



/* =================== EJERCICIO 5 ===================
let dias= ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

for (let i = 0; dias < dias.length; i++) {
    if(dias[i] === "sabado" || dias[i] === "domingo"){
        console.log("es finde")
    }else{console.log(dias[i])}

}

*/



/* ================= EJERCICIO 6 ==============*/

/*creo el vector */
let carrito = [];

/*metodo de ingreso */
articulo = prompt("ingresa un articulo");
costoArt = prompt("costo del articulo ingresado");

/*lo que pusheo de articulo*/
carrito.push(articulo);


/**/