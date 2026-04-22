const numbers = []
const select = document.getElementById("numbers")

function check () {
    var number = document.getElementById("number").value
    console.log(number)
    
    if(number < 1 || number > 100 || number.trim() == ''){
        alert("digite um número válido")
        return
    }

    numbers.push(number)

    console.log(`Adicionou no array o ${number}`)

    const option = document.createElement("option")

    option.text = `Valor ${number} adicionado`
    option.value = number

    select.appendChild(option)
}


function clear() {

}