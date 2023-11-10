//Declaraão/criação da função tocaSomPom
function tocaSomPom(ideElementoAudio){  
    document.querySelector(ideElementoAudio).play();
}
//criando a refêrencias constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0;contador < listaDeTeclas.lengthlet; contador++){  
    const teclas = listaDeTeclas[contador]
    const efeito = teclas.classList[1];
    const idAudio = `#som_"${efeito}`;
    teclas.onclick = function(){   
        tocaSomPom(idAudio);
    }
} 
