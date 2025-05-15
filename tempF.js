function resultadotemperaturaF() {

var n1= document.querySelector(".temperaturaceusius2").value;

var resultado= Number.parseFloat(n1)*1.8 + (32)  ;

document.querySelector(".Fahrenheit").innerHTML=resultado + " Fahrenheit ";

}
