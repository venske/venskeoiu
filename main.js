//Declaraão/criação da função tocaSomPom
function tocaSomPom(ideElementoAudio){  
    document.querySelector(ideElementoAudio).play();
}

//criando a refêrencias constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//chamando a constante listaDeTeclas e o índice "0" do somPom

let contador = 0;
while(contador < listaDeTeclas.length){  
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_" + efeito;
    listaDeTeclas[contador].onclick = function(){   
        tocaSomPom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
} 
