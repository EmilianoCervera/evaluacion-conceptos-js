/*ejercisios*/


/*=================== EJERCICIO F ==================*/


/*ejercicio suma */

/*let primerNumero = 0, segundoNumero,total;

primerNumero = parseInt(prompt("ingrsa primer numero para sumar"));

segundoNumero = parseInt(prompt("ingresa segundo numero de suma"));*/

/*con el => la convierto en funcion ; parametros a y b ; ejecucion: a+b (ARROW FUNCTIONS) */
//let suma = (primerNumero, segundoNumero) => primerNumero + segundoNumero;

/*
function suma (primerNumero,segundoNumero){
    total = primerNumero + segundoNumero
    console.log("el resultado de la suma es: ", total)
} 
console.log(suma(primerNumero,segundoNumero))*/

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



/* =================== EJERCICIO 5 ===================*/
/*
let dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

for (let i = 0; i < dias.length; i++) {
    
    if(dias[i] === "sabado"){
        console.log( dias[i] + " <= es finde")
    }else if(dias[i] === "domingo"){
        console.log( dias [i] + " <= es finde")
    }else{console.log(dias[i])}

}
*/


/*
let dias = []

diasDeSemana = prompt("carga los dias de la semana");

dias.push(diasDeSemana);

for (let i = 0; diasDeSemana < array.length; i++) {

    const element = array[i];
    
}

*/


/* ================= EJERCICIO 6 ==============*/


let carrito = []
let articulos; 
let precio;
let unidades;
let costoTotal = 0;
let numeroItem = carrito
//let costoTotal = costoTotal + (parseInt(precio) * parseInt(unidades));

let ingreso = prompt("desea ingresar un articulo? si - no");

do{

    
        articulos = prompt("ingresa tu articulo");
        console.log(articulos);
        carrito.push(articulos)
        console.log(carrito);
        precio = parseInt(prompt("ingresa precio"));
        unidades = parseInt(prompt("ingresa unidades"));
        costoTotal = costoTotal + (parseInt(precio) * parseInt(unidades))
        ingreso = prompt("desea seguir ingresando");

    }while(ingreso !== "no"){
        consulta = prompt("desea editar algun articulo? presiona 0")
        console.log(`lista de articulos: ${carrito}`)
        if(consulta === "0"){

            for (let i = 0; numeroItem < carrito.length; i++) {

                  numeroItem = carrito.splice(prompt("acanumero"),1);
                }

            }
            
        }


    console.log("xxxxxxxxxxxxxxxx");
    console.log("ITEMS");

    for(let i = 0; i < carrito.length; i++){
        console.log(" - " + carrito[i])
    }
    
    console.log("Total a facturar: $"+ costoTotal)
    console.log("xxxxxxxxxxxxxxxxx")








//let costoTotal = costoTotal + (parseInt(precio) * parseInt(unidades));

