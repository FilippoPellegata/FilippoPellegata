function Compra() {
    var km = document.getElementById("idkmetri").value;
    var classe, costoBiglietto, costoTot;




    if(form.c1.checked){
      classe = "Prima classe";
      costoBiglietto = 0.43;
    }
    else if(form.c2.checked){
      classe = "Seconda classe"
      costoBiglietto = 0.20;
    }
    
    var numP = document.getElementById("posti").value;
    if(numP == 1){
      costoTot = costoBiglietto  *numP;
    }
    else if(numP == 2){
      costoTot = costoBiglietto * numP;
    }
    else if(numP == 3){
      costoTot = costoBiglietto * numP;
    }
    else if(numP == 4){
      costoTot = costoBiglietto * numP;
    }
    else if(numP == 5){
      costoTot = costoBiglietto * numP;
    }
    else if(numP == 6){
      costoTot = costoBiglietto * numP;
    }
    
   
        document.getElementById("ris").innerHTML = "Costo:" + costoBiglietto + " €";
    
  }