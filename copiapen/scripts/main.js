function attTela() {
    var html = document.getElementById("html").value;
    var estilo = document.getElementById("estilo").value;
    var script = document.getElementById("script").value;

    var telona = document.getElementById("telona");
    var estilofinal = "<style>" + estilo + "</style>";
    var scriptfinal = "<script>" + script + "</script>";
    telona.innerHTML =  estilofinal + html;
    var texto = scriptfinal + estilofinal + html;

    document.getElementById("scriptei").innerHTML = script;
}
function bewarje() {
    var html = document.getElementById("html").value;
    var estilo = document.getElementById("estilo").value;
    var script = document.getElementById("script").value;
    var estilofinal = "<style>" + estilo + "</style>";
    var scriptfinal = "<script>" + script + "</script>";
    var texto = scriptfinal + estilofinal + html;
    var blob = new Blob([texto], {
        type: "text/plain;charset=utf-8",
     });
     saveAs(blob, "script.txt");
}
setInterval(attTela, 500);
