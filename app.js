let NumeroSecreto = gerarNumeroSecreto()
let tentativas = 1

function exibirTextoNoSite(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNoSite('h1' , 'Jogo do Número Secreto')
    exibirTextoNoSite('p', 'Escolha um número entre 1 e 10')
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value

    if(chute == NumeroSecreto){
        exibirTextoNoSite('h1' , 'Você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `O número secreto realmente é ${chute}! Você descobriu o número secreto com ${tentativas} ${palavraTentativas}.`
        exibirTextoNoSite('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
        limparCampo();

    }else{

        if (chute > NumeroSecreto ){
           exibirTextoNoSite('p', `O número secreto é menor que ${chute} .`);     
        } if (chute < NumeroSecreto ){
            exibirTextoNoSite('p', `O número secreto é maior que ${chute} .`);   
        }
        tentativas ++;
        limparCampo();

    }
    
};
 

function reiniciarJogo(){
    NumeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);


}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroSecreto(){
    return parseInt( Math.random() * 10 + 1 )
}