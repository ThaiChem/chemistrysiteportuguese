function resultadopressão2() {

var n1= document.querySelector(".pressãopascal").value;

var resultado= Number.parseFloat(n1)*(9.8692E-6)  ;

document.querySelector(".atm2").innerHTML=resultado + " atm ";

}
