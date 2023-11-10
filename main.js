//Declaraão/criação da função tocaSomPom
function tocaSomPom(ideElementoAudio){  
    document.querySelector(ideElementoAudio).play();
}

//criando a refêrencias constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
while(contador < listaDeTeclas.length){  
    const teclas = listaDeTeclas[contador]
    const efeito = teclas.classList[1];
    const idAudio = `#som_"${efeito}`;
    teclas.onclick = function(){   
        tocaSomPom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
} 
