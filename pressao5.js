function resultadopressão5() {

var n1= document.querySelector(".pressãopsi").value;

var resultado= Number.parseFloat(n1)*(0.06805);

document.querySelector(".atm5").innerHTML=resultado + " atm ";

}
