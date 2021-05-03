function creaPDF(){

    var doc=new jsPDF();
    doc.setFont("verdana");

    doc.text(75,20,"Creare un pdf con javascript");
    doc.text(20,30,"Questo file pdf");

    doc.addPage();
    doc.text(20,20,"Prima Pagina:");
    var nome=document.getElementById("nome").value;
    doc.text(20,20,"il nome \u00E8: "+nome);

    var cognome=document.getElementById("cognome").value;
    doc.text(20,20,"il cognome \u00E8: "+cognome);


    var numero=document.getElementById("numero").value;
    doc.text(20,20,"il numero \u00E8: "+numero);

    var mail=document.getElementById("mail").value;
    doc.text(20,20,"la mail \u00E8: "+mail);

    var mess=document.getElementById("mess").value;
    doc.text(20,20,"il messaggio \u00E8: "+mess);

    doc.addPage();
    doc.text(20,200,"fine documento");

    doc.save("pdfp.pdf");






}