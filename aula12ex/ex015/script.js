function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.marginTop = '20px'
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/criancaM-250.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imagens/jovemM-250.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './imagens/adultoM-250.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/idosoM-250.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', './imagens/criancaF-250.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imagens/jovemF-250.jpg')
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', './imagens/adultoF-250.jpg')
            } else {
                // Idosa
                img.setAttribute('src', './imagens/idosaF-250.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}