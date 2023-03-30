const tocaSom = document.querySelectorAll('#som').play()
const listaDeTeclas = document.querySelectorAll('.tecla')

for(var count = 0; count <= listaDeTeclas.length; count++){
    listaDeTeclas[count].onclick = tocaSom[count]
}


