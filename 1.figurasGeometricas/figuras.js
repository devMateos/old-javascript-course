// Código del Cuadrado
console.group("Cuadrados"); //Crea un grupo con todo los console.log

const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado ** 2;
/* He cambiado las funciones de todo el código por arrow functions para simplificarlo
de otra forma quedaría así:
function perimetroCuadrado(lado) {
    return lado * 4;
} */

console.groupEnd();//Aquí finaliza el grupo

//Código del Triángulo
console.group("Triángulos")

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

console.groupEnd();

//Código del Círculo
console.group("Círculos");

const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (radio) => diametroCirculo(radio) * Math.PI;
const areaCirculo = (radio) => (radio ** 2) * Math.PI;

console.groupEnd();


//Interactuando con HTML

//Inputs para el cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Inputs para el triángulo

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("ladoTriangulo1");
    const lado2 = document.getElementById("ladoTriangulo2");
    const base = document.getElementById("baseTriangulo");
    const valoresTriangulo = [Number(lado1.value), Number(lado2.value), Number(base.value)];
    //En lugar de crear una variable para cada valor, las he incluído todas en un mismo array
    /* En este caso he tenido que usar Number para transformar el tipo de los valores a número,porque en los
    formularios son por defecto strings, pero parece que eso solo afecta cuando se utiliza más de un valor */
    const perimetro = perimetroTriangulo(valoresTriangulo[0], valoresTriangulo[1], valoresTriangulo[2]);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const base = document.getElementById("baseTriangulo");
    const altura = document.getElementById("alturaTriangulo");
    const valoresTriangulo = [Number(base.value), Number(altura.value)];

    const area = areaTriangulo(valoresTriangulo[0], valoresTriangulo[1]);
    alert(area);
}

//Inputs para el círculo
function calcularDiametroCirculo() {
    const radio = document.getElementById("radioCirculo");
    const radioCirculo = radio.value;

    const diametro = diametroCirculo(radioCirculo);
    alert(diametro);
}
function calcularPerimetroCirculo() {
    const radio = document.getElementById("radioCirculo");
    const radioCirculo = radio.value;

    const perimetro = perimetroCirculo(radioCirculo);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const radio = document.getElementById("radioCirculo");
    const radioCirculo = radio.value;

    const area = areaCirculo(radioCirculo);
    alert(area);
}

//////////////////////////////////////////////////////
//Nuevo ejercicio: crear una función que calcule la altura de un triángulo isosceles
const alturaIsosceles = (lado, base) => Math.sqrt(lado ** 2 - (base ** 2 / 4));

function calcularAlturaIsosceles() {
    const lado1 = document.getElementById("ladoIsosceles1");
    const lado2 = document.getElementById("ladoIsosceles2");
    const base = document.getElementById("baseIsosceles");
    const valoresIsosceles = [Number(lado1.value), Number(lado2.value), Number(base.value)];
    const altura = alturaIsosceles(valoresIsosceles[0], valoresIsosceles[1]);
    //Para que sea un triángulo isósceles, debe tener dos lados iguales y uno desigual:
    if (valoresIsosceles[0] === valoresIsosceles[1] && valoresIsosceles[0] != valoresIsosceles[2]) {
        alert(altura);
    } else if (valoresIsosceles[0] === valoresIsosceles[2] && valoresIsosceles[0] != valoresIsosceles[1]) {
        alert(altura);
    } else if (valoresIsosceles[1] === valoresIsosceles[2] && valoresIsosceles[0] != valoresIsosceles[1]) {
        alert(altura);
    } else {
        alert("Eso no es un triángulo isósceles");
    }
}
