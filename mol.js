function calcularmol() {

var n1= document.querySelector(".massa").value;

var n2= document.querySelector(".massadamolecula").value;

var resultado= Number.parseFloat(n1)/Number.parseFloat(n2);

document.querySelector(".resultadomol").innerHTML=resultado + " mol ";

}

function calcularmassasubst() {

var a= document.querySelector(".molsubstancia").value;

var b= document.querySelector(".massamolarsubstancia").value;

var resultado= Number.parseFloat(a) * Number.parseFloat(b);

document.querySelector(".resultadomassa").innerHTML= resultado + " gramas ";

}


