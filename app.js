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

let carrito = []
let articulos; 
let precio;
let unidades;
let costoTotal = 0;
//let costoTotal = costoTotal + (parseInt(precio) * parseInt(unidades));

let ingreso = prompt("desea ingresar un articulo? si - no");

while(ingreso !== "no"){

    
        articulos = prompt("ingresa tu articulo");
        console.log(articulos);
        carrito.push(articulos)
        console.log(carrito);
        precio = parseInt(prompt("ingresa precio"));
        unidades = parseInt(prompt("ingresa unidades"));
        costoTotal = costoTotal + (parseInt(precio) * parseInt(unidades))
        ingreso = prompt("desea seguir ingresando");
}


    console.log("xxxxxxxxxxxxxxxx");
    console.log("ITEMS");

    for(let i = 0; i < carrito.length; i++){
        console.log(" - " + carrito[i])
    }
    
    console.log("Total a facturar: $"+ costoTotal)
    console.log("xxxxxxxxxxxxxxxxx")




