const numbers = []
const select = document.getElementById("numbers")
const res = document.getElementById("res")
const total = document.querySelector(".qnt")
const result = document.querySelector(".soma")
const lastNumber = document.querySelector(".maior")
const firstNumber = document.querySelector(".menor")
const average = document.querySelector(".media")

function check() {
    let input = document.getElementById("number")
    let number = Number(input.value)

    if (input.value.trim() === '' || number < 1 || number > 100 || numbers.includes(number)) {
        alert("Digite um número válido e que não esteja na lista")
        return
    }

    numbers.push(number)

    const option = document.createElement("option")

    option.text = `Valor ${number} adicionado`
    option.value = number

    select.appendChild(option)

    input.value = ""
}


function clean() {
    var clean = numbers.length = 0

    select.innerHTML = ''
    res.innerHTML = ''
}

function calculation() {
    let list = numbers.sort((a, b) => a - b)
    let qnt = numbers.length
    
    //verificação
    
    if(qnt === 0){
        alert("Adicione um número")
        return
    }

    //total de números

    
    total.innerHTML = `Na sua lista tem ${qnt} números`

    //maior numero

    let maior = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maior) {
            maior = numbers[i]
        }
    }

    lastNumber.innerHTML = `O maior número da lista é ${maior}`

    //menor número

    let menor = numbers[0]

    firstNumber.innerHTML = `O menor número da lista é ${menor}`

    //soma

    let soma = 0

    for(let i = 0; i < numbers.length; i++){
        soma += numbers[i]
    }

    result.innerHTML = `A soma entre eles é de ${soma}`

    //media

    let calculo = soma / numbers.length
    let media = Number(calculo.toFixed(2))

    average.innerHTML = `A media entre eles é ${media}`
}