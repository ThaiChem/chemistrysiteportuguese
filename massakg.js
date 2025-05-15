function resultcalcgrama(){

var n1= document.querySelector(".kilograma").value;

var resultado= Number.parseFloat(n1)*1000;

document.querySelector(".resultadomassagrama").innerHTML=resultado + " gramas ";
}
