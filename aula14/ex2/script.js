function tabuada(){
    var num = document.getElementById('num')
    var sel = document.getElementById('tabu')
    
    if(num.value.length == 0){
        window.alert('Digite um número,, por favor.')
    }else{
        var n = Number(num.value)
        let c = 1;
        sel.innerHTML = ''
        while (c<=10) {
            let item = document.createElement('option')
            let res = n*c;
            item.text= `${n} x ${c}=${res}`
            item.value = `tab${c}`
            sel.appendChild(item)
            c++
        }
    }
}