function inizializza() {

    var sesso = [" ", "Maschio", "Femmina","preferisco non definire"];
    var x = document.getElementById("sesso");
    for (var i = 0; i < sesso.length; i++) {
        x.add(new Option(sesso[i]));
    }

    var color = [" ","Verdi","Azzurri", "Marroni"];
    x= document.getElementById("coloreocchi");
    for (var i = 0; i < color.length; i++) {
        x.add(new Option(color[i]));
    }

    var provincia = [" ","Como", "Milano", "Brescia", "Torino", "Genova"];
    x = document.getElementById("provincia");
    for(var i=0;i<provincia.length;i++){
        x.add(new Option(provincia[i]));
    }
}

function attivaOfferta(){
    alert("offerta comprata");
}