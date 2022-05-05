function comecar(){
    var url = window.location.search;
    var nivel = url.replace("?", "");
    var tempo = 0;

    if(nivel == 1){
        tempo = 120;
    }
    
    if(nivel == 2){
        tempo = 60;
    }

    if(nivel == 3){
        tempo = 30;
    }

    document.getElementById('cronometro').innerHTML = tempo;

    var qtdeBaloes = 10;

    criarBaloes('qtdeBaloes');

}

function criarBaloes(qtdeBaloes){

    for(var i =1; i <= qtdeBaloes; i++){

        var balao = document.createElement("img");
        balao.src = '../imagens/balao_azul_pegueno.png';

        document.getElementById('cenario').appendChild(balao);

    }

}