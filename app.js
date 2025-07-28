
/* Criar função sortear, indicando a qtdade desejada de valores e o intervalo numérico. */

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    /* parseInt faz a conversão dos valores de entrada de string para numérico inteiro.
    Temos o parsefloat para números do tipo float.*/

    /* O campo 'de' não pode recebe valor maior que o campo 'ate'*/
    if(de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }
    
    /* Quantidade de números escolhida seja incompatível com o intervalo de números escolhidos */
    if(quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }

    /* Armazenando os números "sorteados" em um array */
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
}

/* A função obterNumeroAleatorio precisa que seja indicado um intervalo entre o valor mínimo "de" e o
 valor máximo "ate" como parâmetro, para nos dar um número neste intervalo:

    obterNumeroAleatorio(min, max)

Para implementar esta função, foi feita uma busca no Google, por um código já existente para gerar 
números aleatórios. Copiamos o código na função. */

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
    /* Match.random() é utilizado para gerar números aleatórios. Pode ser usado para jogos, simulações,
    sorteior, geração de senhas, entre outras funcionalidades onde a aleatoriedade é necessária. 
    Aqui manipulamos o resultado, multiplicando e acicionando valores. */
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');    
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
