
///////////////////////////////////////////
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

const sentence = (cn, nn) => {
    return `Mi nombre es ${cn}, pero prefiero que me digas ${nn}.`;
}

console.log(sentence(completeName, nickname));



////////////////////////////////////////////////////////////////////

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10;
while (i >= 2) {
    console.log("el valor de i es: " + i);
    i--;
}








//////////////////////////////////////////////
/* for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
} */

/* let i = 0;
while (i <= 5) {
    console.log("El valor de i es: " + i);
    i++;
} */


/* for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
} */


/* let i = 10;
while (i >= 0) {
    console.log("El valor de i es: " + i);
    i--;
} */


///////////////////////////////////////////////////
/* let respuesta = prompt("¿Cuánto es 2 + 2?");
if (respuesta == 4) {
    console.log("Congratulasión!");
} else {
    console.log("Fallaste, mi brother");
} */

let listaNumeros = [1, 2, 3, 4, 5];
let listaNumeros2 = [6, 7, 8];
let listaNumeros3 = [9, 10];
let listaPalabras = ["caracol", "casa", "pancho pistolas"];


const imprimirPrimero = (aguacate) => {
    console.log(aguacate[0]);
}


const imprimirElementos = element.forEach((element) => {
    console.log(element);
});
imprimirElementos(listaNumeros);
imprimirElementos(listaPalabras);
















///////////////////////////////////////////////////
/* const chain = [2, 9, 18, 30, 60];

function showFirstElement(thing) {
    console.log(thing[0]);
}

showFirstElement(chain); */


//////////////////////////////////////////////
const chain = [2, 9, 18, 30, 60];

const showFirstElement = (thing) => {
    thing.forEach(element => {
        console.log(element)
    });
}

showFirstElement(chain);


/////////////////////////////////////////////////
const maquinon = {
    nombre: "Antonio",
    sobrenombre: "the máchina",
    edad: 27
}

const enseñarObjeto = (thing) => {
    Object.values(thing).forEach((element) => {
        console.log(element)
    });
}

enseñarObjeto(maquinon);


