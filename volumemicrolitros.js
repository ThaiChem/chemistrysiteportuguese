function resultadoLitros4() {

var n1= document.querySelector(".microlitros").value;

var resultado= Number.parseFloat(n1)*(1E-6);

document.querySelector(".resultadoVolumelitro4").innerHTML=resultado + " litros ";

}
