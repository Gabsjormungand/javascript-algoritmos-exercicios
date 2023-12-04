function mostrarnumero(){
    let numero1 = document.getElementById("numero1").value
    let numero2 = document.getElementById("numero2").value
    let resutado = (parseFloat(numero1) + parseFloat(numero2))
    document.getElementById("resutado").innerText = "A soma dos dois número foi  " + resutado
    
}