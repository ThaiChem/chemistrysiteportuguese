function resultcalcLitros() {

var n1= document.querySelector(".mcubico").value;

var resultado= Number.parseFloat(n1)*1000;

document.querySelector(".resultadoVolumelitro").innerHTML=resultado + " litros ";

}
