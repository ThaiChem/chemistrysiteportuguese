function resultadotemperaturakelvin() {

var n1= document.querySelector(".temperaturaceusius").value;

var resultado= Number.parseFloat(n1)+ (273.15) ;

document.querySelector(".kelvin").innerHTML=resultado + " °K ";

}
