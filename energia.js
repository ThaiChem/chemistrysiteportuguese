function resultquantidadejoule() {

var n1= document.querySelector(".caloria").value;

var resultado= Number.parseFloat(n1)* (4.184)  ;

document.querySelector(".resultadojoule").innerHTML=resultado + " Joules ";

}


function resultquantidadelitroatm() {

var n1= document.querySelector(".qtdcaloria").value;

var resultado= Number.parseFloat(n1)* (4.129E-2);

document.querySelector(".resultadolitroporatm").innerHTML=resultado + " Litro-atm ";

}

function resultquantidadecaloria() {

var n1= document.querySelector(".joule").value;

var resultado= Number.parseFloat(n1)/ (4.184);

document.querySelector(".resultadocaloria").innerHTML=resultado + " calorias ";

}


function resultadoquantidadelitroatm() {

var n1= document.querySelector(".qtdjoule").value;

var resultado= Number.parseFloat(n1)* (9.869E-3);

document.querySelector(".resultadolitroatm").innerHTML=resultado + " Litro-Atm ";

}


function resultadoquantidadeJoule() {

var n1= document.querySelector(".litroporatm").value;

var resultado= Number.parseFloat(n1)* (101.325);

document.querySelector(".resultadoJoule").innerHTML=resultado + " Joules ";

}

function resultadoquantidadecal() {

var n1= document.querySelector(".qtdlitroporatm").value;

var resultado= Number.parseFloat(n1)* (24.22);

document.querySelector(".resultadoCaloria").innerHTML=resultado + " Calorias ";

}

