function elabora()
{
    var cognome=document.getElementById("cognome").value;
    var nome=document.getElementById("nome").value;
    var giorno=parseInt(document.getElementById("giorno").value);
    var mese=document.getElementById("mese").value;
    var anno=parseInt(document.getElementById("anno").value);
    var punteggio=0;
    if(!controllaCampi(cognome,nome,giorno,mese,anno))
    {
       
        if(document.getElementById("risposta1").value=="SQL")
            punteggio++;
        if(document.getElementById("risposta2").value=="2")
            punteggio++;
        if(document.getElementById("r1").checked)
            punteggio++;
        if(document.getElementById("c1").checked)
            punteggio++;
        if(document.getElementById("c3").checked)
            punteggio++;
        if(document.getElementById("risposta5").value=="1 byte")
            punteggio++;
        
        document.getElementById("punteggio").innerHTML=punteggio;
    }
    else
        alert("Campi non inseriti o inseriti non correttamente!");

}