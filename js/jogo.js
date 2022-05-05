var timeId = null;

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

    var qtdeBaloes = 80;

    criarBaloes(qtdeBaloes);

    document.getElementById('baloesInteiros').innerHTML = qtdeBaloes;
    document.getElementById('baloesEstourados').innerHTML = 0;

    contagemTempo(tempo + 1);

}

function contagemTempo(segundos){

    segundos -= 1;

    if(segundos == -1){
        clearTimeout(timerId);
        gameOver();
        return false;
    }

    document.getElementById('cronometro').innerHTML = segundos;

    timerId = setTimeout("contagemTempo("+ segundos +")", 1000);

}

function gameOver(){
    removerEventoBaloes();
    alert('Game Over!');
}

function criarBaloes(qtdeBaloes){

    for(var i =1; i <= qtdeBaloes; i++){

        var balao = document.createElement("img");
        balao.src = './imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        balao.id = 'b' + i;
        balao.onmousedown = function(){
            estourar(this);
        }

        document.getElementById('cenario').appendChild(balao);

    }

}

function estourar(e){

    var idBalao = e.id;

    document.getElementById(idBalao).setAttribute("onmousedown", "");
    document.getElementById(idBalao).src = './imagens/balao_azul_pequeno_estourado.png';
    pontuacao(-1);

}

function pontuacao(acao){

    var baloesInteiros = document.getElementById('baloesInteiros').innerHTML;
    var baloesEstourados = document.getElementById('baloesEstourados').innerHTML;

    baloesInteiros = parseInt(baloesInteiros);
    baloesEstourados = parseInt(baloesEstourados);

    baloesInteiros += acao;
    baloesEstourados -= acao;

    document.getElementById('baloesInteiros').innerHTML = baloesInteiros;
    document.getElementById('baloesEstourados').innerHTML = baloesEstourados;

    situacaoJogo(baloesInteiros, baloesEstourados);

}

function situacaoJogo(baloesInteiros, baloesEstourados){

    if(baloesInteiros == 0){

        clearTimeout(timeId);
        alert(`Viva! você conseguiu estourar todos os ${baloesEstourados} balões`);
        pararJogo();

    }

}

function pararJogo(){
    clearTimeout(timeId);

}

function removerEventoBaloes(){
    var i = 1;
    while(document.getElementById('b' + i)){
        document.getElementById('b' + i).onmousedown = '';
        i++;

    }

}