function resultadoLitros() {

var n1= document.querySelector(".cmcubico").value;

var resultado= Number.parseFloat(n1)/1000;

document.querySelector(".resultadoVolume").innerHTML=resultado + " litros ";

}
