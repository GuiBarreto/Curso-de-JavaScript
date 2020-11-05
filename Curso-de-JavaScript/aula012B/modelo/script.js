function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem' 
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotohomemBebe.png')
            }else if(idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'fotohomemJovem.png')
            }else if(idade >= 21 && idade <50) {
                //adulto
                img.setAttribute('src', 'fotohomemAdulto.png')
            }else {
                img.setAttribute('src', 'fotohomemIdoso.png')
                //idoso
            }   
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'fotomulherBebe.png')
                //criança
            }else if(idade >= 10 && idade < 21) {
                img.setAttribute('src', 'fotomulherJovem.png')
                //jovem
            }else if(idade >= 21 && idade <50) {
                img.setAttribute('src', 'fotomulherAdulta.png')
                //adulta
            }else {
                img.setAttribute('src', 'fotomulherIdosa.png')
                //idosa
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}