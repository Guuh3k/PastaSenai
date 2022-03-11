alert("Olá Mundo, agora de um JS externo!")

function aparecerAlerta(){
    alert("Alerta que veio do gatilho do botão.")
}

function aparecerData(){
    setInterval('document.getElementById("data").innerHTML = Date()', 1000)  
    // document.getElementById("data").innerHTML = "17/02/2022"
    document.getElementById("data").innerHTML = Date()
}

function mudarDblClick(){
    document.getElementById("paragrafo").innerHTML = "Texto alterado no JS, com o gatilho de duplo clique"
}

function mudarMousesegurar(){
    document.getElementById('paragrafo').innerHTML = 'texto alterado no js quando o mouse ta clicando'
}
function mudarMouseSoltar(){
    document. getElementById("paragrafo").innerHTML = "texto alterado no js quando soltar o mouse"
}
function MudarCorQuadrado(){
    document.getElementById("quadrado").style.backgroundColor = "red"
}
function MudarCorQuadrado02(){
    document.getElementById("quadrado02").style.backgroundColor = "green"
}