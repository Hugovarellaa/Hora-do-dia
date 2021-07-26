var atualizar = setInterval(horario, 1000);


function horario() {

    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.toLocaleString().slice(-9);
    var display = hora.slice(1, -6)
    msg.innerHTML = `Agora são ${hora} horas.`

    if (display < 12) {
        // Bom dia!
        img.src = "./_Imagens/manha.png"
        document.body.style.background = '#f0c56f'
        document.body.style.color = '#f0c56f'
        msg2.innerHTML = `Bom dia !`

    } else if (display <= 18) {
        // Boa tarde!
        img.src = "./_Imagens/tarde.png"
        document.body.style.background = '#ffb86e'
        document.body.style.color = '#ffb86e'
        msg2.innerHTML = `Boa tarde !`

    } else if (display >= 19) {
        // Boa noite!
        img.src = "./_Imagens/noite.png"
        document.body.style.background = '#1f3a4d'
        document.body.style.color = '#1f3a4d'
        msg2.innerHTML = `Boa noite !`

    }
}