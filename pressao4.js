function resultadopressão4() {

var n1= document.querySelector(".pressãotor").value;

var resultado= Number.parseFloat(n1)*(0.001316);

document.querySelector(".atm4").innerHTML=resultado + " atm ";

}
