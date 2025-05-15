function resultadoLitros5() {

var n1= document.querySelector(".galão").value;

var resultado= Number.parseFloat(n1)*(3.7854);

document.querySelector(".resultadoVolumelitro5").innerHTML=resultado + " litros ";

}
