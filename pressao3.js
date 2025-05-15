function resultadopressão3() {

var n1= document.querySelector(".pressãobar").value;

var resultado= Number.parseFloat(n1)*(0.9869);

document.querySelector(".atm3").innerHTML=resultado + " atm ";

}
