/* const precioOriginal = 120;
const descuento = 18;
const porcentajeDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajeDescuento) / 100; */

/* console.log({
    precioOriginal,
    descuento,
    porcentajeDescuento,
    precioConDescuento,
}); */

//He modificado el código para que todos los pasos intermedios estén en una sola línea con un arrow function
const precioConDescuento = (precio, descuento) => precio - (precio * (descuento / 100));

//Código para calcular el precio introduciendo el descuento manualmente
/* function calculatePriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioFinal = precioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = `El precio con descuento es de ${precioFinal}€`;
} */

//Reto: Implementar descuentos con cupones

function calculatePriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const cupon = document.getElementById("cupon");
    const cuponValue = cupon.value;
    const cupones = ["descuento_verano", "CUPONAZO", "10%DESC"];

    switch (cuponValue) {
        case cupones[0]:
            discountValue = 5;
            break;
        case cupones[1]:
            discountValue = 20;
            break;
        case cupones[2]:
            discountValue = 10;
            break;
    }
    const precioFinal = precioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = `El precio con descuento es de ${precioFinal}€`;
}

