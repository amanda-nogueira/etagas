/**
 * @link https://github.com/amanda-nogueira/etagas.git
 */

if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
        console.log('Service Worker Registrado.')
    })
}
function calcular() {
    let gasolina = Number(document.getElementById('gasolina').value)
    let etanol = Number(document.getElementById('etanol').value)
    let kmlGasolina = Number(document.getElementById('kmGasolina').value)
    let kmlEtanol = Number(document.getElementById('kmEtanol').value)
   
    if (etanol < (kmlEtanol / kmlGasolina) * gasolina) {
        document.getElementById("status").src = "./img/etanol.png"
    } else {
        document.getElementById("status").src = "./img/gasolina.png"
    }
}