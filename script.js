let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')
let res = window.document.querySelector('div#res')
let vetor = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window,alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(vetor.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = vetor.length
        let maior = vetor [0]
        let menor = vetor [0]
        let soma = 0
        let media = 0
        for (let pos in vetor) {
            soma += vetor[pos]
            if (vetor[pos] > maior) {
                maior = vetor[pos]
            }
            if (vetor[pos] < menor) {
                menor = vetor[pos]
            }
        }
         media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados!</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}


   
