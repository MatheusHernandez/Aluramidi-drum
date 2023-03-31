function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


// for(let count = 0; count <= listaDeTeclas.length; count++){
//     const tecla = listaDeTeclas[count]
//     const instrumento = tecla.classList[1]
//     console.log(instrumento)

//     tecla.classList[1] = som[count].classList[1].play()
     
// }
// let count = 0

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