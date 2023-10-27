//Declaraão/criação da função tocaSomPom
function tocaSomPom(){  
    document.querySelector("#som_tecla_pom").play();
}

//criando a refêrencias constante listaDeTeclas e buscando a classe coletiva .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//chamando a constante listaDeTeclas e o índice "0" do somPom

let contador = 0;
while(contador < 9){  
    listaDeTeclas[0].onclick = tocaSomPom;
    contador = contador + 1;
    console.log(contador);
} 
