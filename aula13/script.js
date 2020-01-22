function verificar(){
    var ano = new Date()
    var anoAtual = ano.getFullYear()
    var txt = document.getElementById('nasc')
    var res = document.getElementById('res')
    if(txt.value.length == 0 || txt.value > anoAtual){
        window.alert('Verifique os dados!!')
    }else{
        var rsex = document.getElementsByName('sex')
        var s = anoAtual - Number(txt.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(rsex[0].checked){
            genero = 'Homem'
            if(s >=0 && s<10){
                img.setAttribute('src', 'Fotos/foto-bebe-m.png')
            }else if(s<21){
                //Jovem
                img.setAttribute('src', 'Fotos/foto-jovem-m.png')
            }else if(s<50){
                //Adulto
                img.setAttribute('src', 'Fotos/foto-adulto-m.png')
            }else{
                //Idoso
                img.setAttribute('src', 'Fotos/foto-idoso-m.png')
            }
        }else if(rsex[1].checked){
            genero = 'Mulher'
            if(s >=0 && s<10){
                img.src='./Fotos/foto-bebe-f.png'
            }else if(s<21){
                //Jovem
                img.src='./Fotos/foto-jovem-f.png'
            }else if(s<50){
                //Adulto
                img.src='./Fotos/foto-adulto-f.png'
            }else{
                //Idoso
                img.src='./Fotos/foto-idoso-f.png'
            }
        }
        res.style.textAlign ='center'
        res.innerText = `Detectamos ${genero} de ${s} anos`
        res.appendChild(img)
    }
}
