function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio).play();

    if(elemento && elemento.localName === "audio") {
        elemento.play()
    }
    else{
        console.log('Elemento não encontrado')
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let i = 0; i <= listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i]
    const instrumento = tecla.classList[1]
    console.log(instrumento)

    const idAudio = `#som_${instrumento}`
    tecla.onclick = function(){
        tocaSom(idAudio)
    }
     

    tecla.onkeydown = function (evento) {
        if(evento.code === 'Space' || evento.code ==="Enter"){
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove ('ativa')
    }
}

// while (count < listaDeTeclas.length) {
//     const tecla = listaDeTeclas[count];

//     const instrumento = tecla.classList[1];

//     console.log(instrumento)

//     const idAudio = `#som_${instrumento}`

//     tecla.onclick = function() {
//         som(idAudio)
//     };

//     count++
    
// }