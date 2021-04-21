function calcola()
{
    var altezza=parseInt(document.getElementById("altezza").value);
    var eta=parseInt(document.getElementById("eta").value);
    var sesso=document.getElementById("sesso").value;
    var peso=parseInt(document.getElementById("peso").value);

    var l,b,w,bmi;
    
   
    if(sesso=="maschio")
        l=altezza-100-(altezza-150)/4;
    else if(sesso=="femmina")
        lorenz=altezza-100-(altezza-150)/2;



    
    if(sesso=="maschio")
        b=altezza-100;
    else if(sesso=="femmina")
        b=altezza-104;

    
    w=((altezza-150)*0.75)+50;

    
    bmi=peso/((altezza/100)*(altezza/100));

    
    document.getElementById("lorenz").innerHTML=" "+lorenz.toFixed(2);
    document.getElementById("broca").innerHTML=" "+broca.toFixed(2);
    document.getElementById("wan").innerHTML=" "+wan.toFixed(2);
    document.getElementById("bmi").innerHTML=" "+bmi.toFixed(2);
}