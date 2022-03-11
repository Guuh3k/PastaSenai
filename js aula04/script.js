const entrada1 = document.querySelector("#nota1");
const entrada2 = document.querySelector("#nota2");
const entrada3 = document.querySelector("#nota3");
const retornoFuncao = document.querySelector("#retorno_funcao");
const resultadoMedia = document.querySelector("#resultado_media");
const situacaoAluno = document.querySelector("#situacao_aluno");


function calcularMedia() {
    if (entrada1.value == "") {
        
        retornoFuncao.innerHTML = "Não foi inserido nenhum valor na nota 1, por isso não foi possível fazer a conta!";
        entrada1.focus();
    } else {
        
        if (entrada2.value == ""){
            
            retornoFuncao.innerHTML = "Não foi inserido nenhum valor na nota 2, por isso não foi possível fazer a conta!";
            entrada2.focus();
        } else {
            if(entrada3.value==""){
                retornoFuncao.innerHTML = "nao foi inserido nenhum valor na nota 3, por isso nao foi possivle fazer a conta!";

            }else{
                retornoFuncao.innerHTML = "";

                let valor1 = Number(entrada1.value);
                let valor2 = Number(entrada2.value);
                let valor3 = Number(entrada3.value);

                let mediaNotas = (valor1 + valor2 + valor3) / 3;
                resultadoMedia.innerHTML = `o resultado entre a media das notas e ${mediaNotas.toFixed(2)}`

                classificarAluno(mediaNotas);
            }
           
            
        }
    }
}
function classificarAluno(media) {

    if(media >= 6){
        situacaoAluno.innerHTML="o aluno foi aprovado";
    }
     else if (media< 6 && media > 3){
         situacaoAluno.innerHTML = "o aluno foi reprovado";

    }
    else{
        situacaoAluno.innerHTML = "o aluno foi reprovadasso"
    }
}