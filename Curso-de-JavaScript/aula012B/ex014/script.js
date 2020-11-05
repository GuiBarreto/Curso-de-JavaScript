
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} Hrs.`
    if(hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#ffccc1'
    }else if(hora >= 12 && hora < 19) {
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#fcad09'
    }else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#051632'
    }
}
