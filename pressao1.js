function resultadopressãoatm1() {

var n1= document.querySelector(".mmHg").value;

var resultado= Number.parseFloat(n1)* (0.001316)  ;

document.querySelector(".atm1").innerHTML=resultado + " atm ";

}
