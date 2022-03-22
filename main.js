let chilometriDaPercorrere=prompt("inserire chilometri da percorrere");
chilometriDaPercorrere=parseInt(chilometriDaPercorrere);
let etaPasseggero=prompt("inserire eta' passeggero");
etaPasseggero=parseInt(etaPasseggero);
let prezzoPerBiglietto=chilometriDaPercorrere*0.21;
let prezzoFinale;
let sconto;
if(etaPasseggero<18){
    sconto=prezzoPerBiglietto*0.20;
    prezzoFinale=prezzoPerBiglietto-sconto;
    alert(prezzoFinale.toFixed(2));
}else if(etaPasseggero>65){
    sconto=prezzoPerBiglietto*0.40;
    prezzoFinale=prezzoPerBiglietto-sconto;
    alert(prezzoFinale.toFixed(2));
}else{
    sconto=prezzoPerBiglietto;
    alert(prezzoFinale.toFixed(2));
}

//etaPasseggero>=18)||(etaPasseggero<=65