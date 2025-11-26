
function verificar() {
    let $real = Number(document.getElementById("inReais").value)
    if (Calculo == 1){
    h2.innerText = "Transformando do Real para o Dolar: " + ($real / 5.29).toFixed(2)}
     if (Calculo == 2){
    h2.innerText = "Transformando do Dolar para o Real: " + $real * 5.29}
}