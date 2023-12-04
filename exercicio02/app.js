function mostrarnumero(){
    let numero = document.getElementById("numero").value
    document.getElementById("resposta").innerText = "o numero informado foi cem " + numero
    document.getElementById("numero").value = ""
}