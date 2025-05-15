function resultadopressaoreduzida() {

var n1= document.querySelector(".pressãodada").value;

var n2= document.querySelector(".pressaocritica").value;

var resultado= Number.parseFloat(n1)/Number.parseFloat(n2);

document.querySelector(".resultadopressãoreduzida").innerHTML=  resultado + "atm" ;

}


function resultadotemperaturareduzida (){

var n1= document.querySelector(".temperaturadada").value;

var n2= document.querySelector(".tempcritica").value;

var resultado= Number.parseFloat(n1)/Number.parseFloat(n2);

document.querySelector(".resultadotempreduzida").innerHTML=resultado + " Kelvin";
}


function resultadovolumereduzido(){

var n1= document.querySelector(".voldado").value;

var n2= document.querySelector(".volcritico").value;

var resultado= Number.parseFloat(n1)/Number.parseFloat(n2);

document.querySelector(".resultadovolreduzido").innerHTML=resultado + " litros";
}