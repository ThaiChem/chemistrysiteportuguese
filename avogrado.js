function resultquantidade() {

var n1= document.querySelector(".Mol").value;

var resultado= Number.parseFloat(n1)*(6.0221367E23);

document.querySelector(".resultadoqtdmoleculas").innerHTML=resultado + " espécies ";

}
