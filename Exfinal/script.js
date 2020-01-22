let vet = []
function adicionar(){
    var num = document.getElementById('num')
    var sel = document.getElementById('sel')
    var fim = document.getElementById('final')
    if(num.value.length == 0){
        window.alert('Digite um valor!')
    }else{
        let n = Number(num.value)
        fim.innerHTML = ''
        if(n>=1 && n<=100){
            if(vet.indexOf(n) == -1){
                vet.push(n)
                let item = document.createElement('option')
                item.text = `O número ${n} foi adicionado`
                sel.appendChild(item)
            }else{
                window.alert('Valor repetido')
            } 
        }else{
            window.alert('Digite um valor entre 1 e 100')
        }

    }
    num.value=''
    num.focus() 
}
function finalizar(){
    if(vet.length == 0){
        window.alert('Digite algum valor antes de finalizar!')
    }else{

        var fim = document.getElementById('final')
        vet.sort()
        let soma=0;
        let maior=0;
        let menor=vet[0];
        let media=0;
        for(let c=0;c<vet.length;c++){
            soma+=vet[c]
            if(vet[c]>maior){
                maior=vet[c]
            }
        }
        media=soma/Number(vet.length)
        fim.innerHTML = `<p>Ao todo, temos ${vet.length} números cadastrados.</p>`
        fim.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        fim.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        fim.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        fim.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }

}