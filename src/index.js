function check () {
    
    let number = document.getElementById("number").value

    console.log(number)

    if(number < 1 || number > 100 || number.trim() == ''){
        alert("digite um número válido")
    } return
}


function main() {
    check()
}
