function resultadopressão6() {

var n1= document.querySelector(".pressãonewtom").value;

var resultado= Number.parseFloat(n1)*(9.8692E-6);

document.querySelector(".atm6").innerHTML=resultado + " atm ";

}
