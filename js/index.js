function iniciarJogo(){
    
    var nivelJogo = document.getElementById('nivelJogo').value;

    window.location.href = 'jogo.html?' + nivelJogo;

}