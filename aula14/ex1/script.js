function calcular(){
    var ini = document.getElementById('inicio')
    var res = document.getElementById('res')
    var fin = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var final = Number(fin.value)
    var inicial = Number(ini.value)
    var passo = Number(pas.value)
    if(ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Por favor, digite um valor!!'
    }else if(passo == 0){
        window.alert('Passo inexistente, vamos utilizar o passo 1')
        passo = 1
        res.innerHTML = 'Contando: '
        if(inicial < final){
            for(let c=inicial;c<=final;c=c+passo){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            for(let c=inicial;c>=final;c=c-passo){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }else{
        res.innerHTML = 'Contando: '
        if(inicial < final){
            for(let c=inicial;c<=final;c=c+passo){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            for(let c=inicial;c>=final;c=c-passo){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}