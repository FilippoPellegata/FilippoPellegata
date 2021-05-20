function readSingleFile(e) {
    var contents = "";
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        elaboraContents(contents);
    };
    reader.readAsText(file);
}



function elaboraContents(contents) {
    var element = document.getElementById('file-content');
    var lines = contents.split("\n");


    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        let elements = line.split(";");
        var linea = document.createElement("tr");

        if (i == 0) {
            for (let j = 0; j < elements.length; j++) {
                var cella = document.createElement("th");
                cella.innerHTML = elements[j];
                linea.appendChild(cella);
            }
            document.getElementById("tabella1").appendChild(linea);
        } else {
            for (let j = 0; j < elements.length; j++) {
                var cella = document.createElement("td");
                cella.innerHTML = elements[j];
                linea.appendChild(cella);
            }
            document.getElementById("tabella2").appendChild(linea);
        }
    }

}