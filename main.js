//Declaraão/criação da função tocaSomPom
function tocaSomPom(ideElementoAudio){  
    document.querySelector(ideElementoAudio).play();
}
//criando a refêrencias constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//ceiação da repetição "while" e trocado pelo "for" com variavel,condição e incremento
for(let contador = 0;contador < listaDeTeclas.lengtht; contador++){  
    const teclas = listaDeTeclas[contador]; //guarda o contador da lista
    const efeito = teclas.classList[1]; //chama o 2 item classe individual do som
    const idAudio = `#som_"${efeito}`; //utiliza a junção template string ${ }
    teclas.onclick = function(){      //função anônima auxiliar para chamar tocaSom
        tocaSomPom(idAudio);      //chamada da função tocaSom com parâmetro idAudio
    }
} 
