const body = document.querySelector('body')
const div = document.querySelector('div')
var paraPintar = 0
var cor = 'red'
var contB = 0

const section = document.querySelector('section');
var cordenadaDiv = div.getBoundingClientRect()
var direitaEsquerda = cordenadaDiv.x
var cimaBaixo = cordenadaDiv.y

function fechar(){
    const img  = document.querySelector('img')
    img.style.display = 'block'
    section.style.display = 'none'

}
function abrir(){
    const img  = document.querySelector('img')
    section.style.display = 'block'
    img.style.display = 'none'
}


body.onkeydown = (e) => {

    if(section.style.display == 'none'){
    if(e.key == 'a'){ cor = 'blue';}
    if(e.key == 's'){ cor = 'green';}
    if(e.key == 'd'){ cor = 'yellow';}
    if(e.key == 'f'){ cor = 'pink';}
    if(e.key == 'g'){ cor = 'brown';}
    if(e.key == 'h'){ cor = 'orange';}
    if(e.key == 'j'){ cor = 'black';}
    if(e.key == 'k'){ cor = 'gray';}
    if(e.key == 'l'){ cor = 'Red';}

    if(e.key == 'w'){
        removerTodos()
    }
    if(e.key == 'r'){ 
        removerBloco()
    }

    if(e.key == 'z'){
        if(paraPintar == 1){
            paraPintar = 0
        } else{
            paraPintar = 1
        }
    }
    if(e.key == 'ArrowRight'){
        criarBloco()
        if(direitaEsquerda !=1001.1875){
        direitaEsquerda += 5
        var cordenadaDE = direitaEsquerda + 'px'
        div.style.left = cordenadaDE
        }
    }if(e.key == 'ArrowLeft'){
        criarBloco()
        if(direitaEsquerda !=1.1875){
        direitaEsquerda -= 5
        var cordenadaED = direitaEsquerda + 'px'
        div.style.left = cordenadaED
        }

    }if(e.key == 'ArrowUp'){
        criarBloco()
        if(cimaBaixo != 2.09375){
        cimaBaixo -= 5
        var cordenadaCB = cimaBaixo + 'px'
        div.style.top= cordenadaCB
        }
        
    } if(e.key == 'ArrowDown'){
        criarBloco()
        if(cimaBaixo!=632.09375){
        cimaBaixo += 5
        var cordenadaBC = cimaBaixo + 'px'
        div.style.top= cordenadaBC
      } 
    }
}
}

function criarBloco(){
    if( paraPintar != 1){
    var divBloco = document.createElement('div');
    body.prepend(divBloco);
    const divB = document.querySelector('div')

    divB.style.backgroundColor = cor
    var cordenadaDE = direitaEsquerda + 'px'
    divB.style.left = cordenadaDE

    var cordenadaCB = cimaBaixo + 'px'
    divB.style.top= cordenadaCB;
    contB++

}
}
function removerBloco(){
    if(contB != 0){
        body.firstElementChild.remove()
        contB--
    }
}

function removerTodos(){
for(let i = contB; i>0;i--){
     body.firstElementChild.remove()
}
}