function resultadodensidade() {

var n1= document.querySelector(".massagrama").value;

var n2= document.querySelector(".volume").value;

var resultado= Number.parseFloat(n1)/Number.parseFloat(n2);

document.querySelector(".resultdensidade").innerHTML=resultado + " gramas por litro ";

}
