//const precioOriginal = 120;
//const descuento = 18;

//const porcentajeConDescuento = 100 - descuento;

function precioConDescuento(precio, descuento) {
    return (precio*(100-descuento))/100
}


console.log({
    precioOriginal,
    descuento,
    porcentajeConDescuento,
    precioConDescuento
})

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    let descuento;
  
    switch(couponValue) {
      case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
      break;
      case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
      break;
      case coupons[2]: // "es_un_secreto"
        descuento = 25;
      break;
    }
  
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
//La función array.includes() nos permite validar si
// un elemento ha sido almacenado en el array. Vamos
// a usar esta función para ejecutar un error si el cupón
// de los usuarios es inválido (no fue guardado en el array coupons):

if (!coupons.includes(couponValue)) {
    alert("El cupón " + couponValue + "no es válido");
}

//Ya que estamos usando un condicional if, podemos reescribir el resto 
//del condicional switch, pero en este caso usaremos condicionales else if:
if (!coupons.includes(couponValue)) {
    alert("El cupón " + couponValue + "no es válido");
 } else if (couponValue === "JuanDC_es_Batman") {
    descuento = 15;
 } else if (couponValue === "pero_no_le_digas_a_nadie") {
    descuento = 30;
 } else if (couponValue === "es_un_secreto") {
    descuento = 25;
 }

 //Se da un mejor manedo de legibilidad pasando esto a una objeto
 const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + couponValue + "no es válido");
}else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}