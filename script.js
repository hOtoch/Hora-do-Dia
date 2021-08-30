function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
  
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#f3d2b2'
        msg2.innerHTML = 'Bom dia!'
    }else if(hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#fd9b1a'
        msg2.innerHTML = "Boa tarde!"
    } else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#584164'
        msg2.innerHTML = "Boa noite!"
    }
}
