let chilometriDaPercorrere=prompt("inserire chilometri da percorrere");
chilometriDaPercorrere=parseInt(chilometriDaPercorrere);

let etaPasseggero=prompt("inserire eta' passeggero");
etaPasseggero=parseInt(etaPasseggero);

let prezzoPerBiglietto=chilometriDaPercorrere*0.21;
let prezzoFinal;
let sconto;
let prezzoFinale;
let euro="€";

if(etaPasseggero<18){
    sconto=prezzoPerBiglietto*0.21;
    prezzoFinaleIntero=prezzoPerBiglietto-sconto;
    prezzoFinale=prezzoFinaleIntero.toFixed(2) + euro;
}else if(etaPasseggero>65){
    sconto=prezzoPerBiglietto*0.40;
    prezzoFinaleIntero=prezzoPerBiglietto-sconto;
    prezzoFinale=prezzoFinaleIntero.toFixed(2) + euro;
}else{
    prezzoFinale=prezzoPerBiglietto.toFixed(2) + euro;
}
document.getElementById("chilometriDaPercorrere").innerHTML= chilometriDaPercorrere;
document.getElementById("etaPasseggero").innerHTML= etaPasseggero;
document.getElementById("prezzoFinale").innerHTML= prezzoFinale;