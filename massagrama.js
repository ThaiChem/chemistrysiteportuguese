function resultgrama() {

var n1= document.querySelector(".miligrama").value;

var resultado= Number.parseFloat(n1)/ (1000);

document.querySelector(".resultadomassa").innerHTML=resultado + " grama ";

}
