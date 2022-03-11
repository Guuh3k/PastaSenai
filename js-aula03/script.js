function somarNumeros() {
    var num01 = Number(document.getElementById("input_numero01").value);
    var num02 = Number(document.getElementById("input_numero02").value);
    var resultadoSoma = num01+num02

    document.getElementById("input_resultado").value = resultadoSoma

   
    
}
function subtracaoNumeros(){
    var num01 = Number(document.getElementById("input_numero01").value);
    var num02 = Number(document.getElementById("input_numero02").value);
    var subtracaoNumeros = num01-num02

    document.getElementById("input_resultado").value = subtracaoNumeros

}