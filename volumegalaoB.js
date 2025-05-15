function resultadoLitros6() {

var n1= document.querySelector(".galão2").value;

var resultado= Number.parseFloat(n1)*(4.546);

document.querySelector(".resultadoVolumelitro6").innerHTML=resultado + " litros ";

}
