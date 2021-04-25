function elabora()
{
    var punteggio=0;
   
       
        if(document.getElementById("risposta1").value=="SQL")
            punteggio++;
        if(document.getElementById("risposta2").value=="2")
            punteggio++;
        if(document.getElementById("r1").checked)
            punteggio++;
        if(document.getElementById("c1").checked&&document.getElementById("c3").checked)
            punteggio++;
        
            
        if(document.getElementById("risposta5").value=="1 byte")
            punteggio++;
        
        document.getElementById("punteggio").innerHTML=punteggio;
    
    

}

function UtenteConPunteggio(){
    var utenteConPunteggio;
    
    utenteConPunteggio+=(document.getElementById("cognome").value).substring(0,3);

    utenteConPunteggio+=(document.getElementById("nome").value).substring(0,3);

    utenteConPunteggio+=(document.getElementById("mese").value).substring(0,3);
    
    utenteConPunteggio+=(document.getElementById("anno").value).substring(2,4);

    utenteConPunteggio+=(parseInt(document.getElementById("punteggio").innerHTML)*10).toString();



    document.getElementById("ucp").innerHTML=utenteConPunteggio;

}