function inicaJogo(){
    
    var nivel_Jogo = document.getElementById('nivel_Jogo').value;

    window.location.href = '../jogo.html?' + nivel_Jogo;
    alert(nivel_Jogo);
}