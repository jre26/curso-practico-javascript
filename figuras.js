//Codigo del cuadrado 
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadro miden: "+ladoCuadrado+" cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es: "+perimetroCuadrado+" cm");

function areaCuadrado(lado){
    return lado*lado;
}
//console.log("El area del cuadrado es: "+areaCuadrado+" cm^2");

console.groupEnd();

//Codigo del triangulo 
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log("Los lados del triangulo miden: "
+ladoTriangulo1+" cm, "
+ladoTriangulo2+" cm, "
+baseTriangulo+" cm ");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: "+alturaTriangulo);

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1+lado2+lado3;
} 
//console.log("El perimetro del triangulo es: "+perimetroTriangulo+" cm");

function areaTriangulo(base, altura){
    return (base*altura)/2;
} 
//console.log("El area del triangulo: "+areaCuadrado)

console.groupEnd();

//Codigo del circulo 
console.group("Círculos");

//Radio
const radioCirculo =  4;
console.log("El radio del circulo es: "+radioCirculo+" cm");
//Diámetro
function diametroCirculo(radio){
    return radio*2;
}
//console.log("El diametro del circulo es: "+diametroCirculo+" cm");
//PI
const PI = Math.PI;
console.log("El PI es: "+PI);
//Circunferencia
function perimetroCirculo(radio){
    return diametroCirculo(radio) * PI;
}
//console.log("El perimetro del circulo es: "+perimetroCirculo+" cm");
//Area
function areaCirculo (radio){
    return (radio*radio)*PI;
}
//console.log("El area del circulo es: "+areaCirculo+"cm^2");
 
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado").value;
    const perimetro = perimetroCuadrado(input);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado").value;
    const area = areaCuadrado(input);
    alert(area);
}