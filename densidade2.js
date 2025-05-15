function resultadodensidade2() {

var n1= document.querySelector(".massagrama2").value;

var n2= document.querySelector(".volume2").value;

var resultado= Number.parseFloat(n1)/Number.parseFloat(n2);

document.querySelector(".resultdensidade2").innerHTML=resultado + " gramas por cm³ ";

}


function resultadodensidade3() {

var n1= document.querySelector(".massagrama3").value;

var n2= document.querySelector(".volume3").value;

var resultado= Number.parseFloat(n1)/Number.parseFloat(n2);

document.querySelector(".resultdensidade3").innerHTML=resultado + " kg por m³ ";

}



