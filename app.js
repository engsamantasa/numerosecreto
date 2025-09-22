let numeroMaximo = 10;
let listaNumeroSecreto = [];
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;


function exibirTextoNoSite(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};


function exibirMensagemInicial(){
    exibirTextoNoSite('h1' , 'Jogo do Número Secreto')
    exibirTextoNoSite('p', `Escolha um número entre 1 e ${numeroMaximo}`)
};


exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value

    if(chute == numeroSecreto){
        exibirTextoNoSite('h1' , 'Você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `O número secreto realmente é ${chute}! Você descobriu o número secreto com ${tentativas} ${palavraTentativas}.`
        exibirTextoNoSite('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
        limparCampo();
        document.getElementById('chutando').setAttribute('disabled',true);

    }else{

        if (chute > numeroSecreto ){
           exibirTextoNoSite('p', `O número secreto é menor que ${chute} .`);     
        } if (chute < numeroSecreto ){
            exibirTextoNoSite('p', `O número secreto é maior que ${chute} .`);   
        }
        tentativas ++;
        limparCampo();

    }
    
};
 

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('chutando').removeAttribute('disabled');
};


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
};


function gerarNumeroSecreto(){
    let numeroEscolhido =  parseInt( Math.random() * numeroMaximo + 1 );
    let quantidadeElementosNaLista = listaNumeroSecreto.length;

    if (quantidadeElementosNaLista == numeroMaximo){
        listaNumeroSecreto = [];
    }

    if (listaNumeroSecreto.includes(numeroEscolhido)){
        return gerarNumeroSecreto();
    } else {
        listaNumeroSecreto.push(numeroEscolhido);
        console.log(listaNumeroSecreto)
        return numeroEscolhido
    }
};