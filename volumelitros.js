function resultlitros() {

var n1= document.querySelector(".ml").value;

var resultado= Number.parseFloat(n1)/ (1000);

document.querySelector(".resultadovolume").innerHTML=resultado + " litros ";

}
