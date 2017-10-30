$(function($) {
  $(".btnBoxSend").val("");
});
$("#msgArquivo").toggleClass("invisivel");
$("#notice").toggleClass("invisivel");

$("#send").click(function() {
    var text = $(".btnBoxSend").val();

    if (text != "") {
        var nome = "Adriel";
        var data = criaData();
        var span = '<span class="NomeEData">' + nome + " - " + data + "</span>";
        var p = '<div class="divParagrafo">'+'<span>' + text +'<span>' + "</div>";
        var post = '<div class="postModel">' + span + p + "</div>";
        $(".btnBoxSend").val("");
        $("#posts").prepend(post);
        $("#notice").stop().fadeOut();

    } else {
  
        $("#notice").css({"background-color": "#e74848"});
        $("#notice").text("ERRO: Digita alguma coisa carai");
        $("#notice").stop().fadeIn();

    }
});

function criaData() {
    var data = new Date();

    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    var str_hora = hora + ":" + min;
    return str_hora;
}

$("#upload").change(function() {
    var dir = $("#upload").val();
    var msg = "Arquivo Selecionado: " + dir;

    // $(".fa-times").toggle();
    // $(".fa-upload").toggle();

    $("#arquivoReport").text(msg);
    $("#msgArquivo").fadeIn();
});

$(".iCloseFile").click(function() {
    $("#msgArquivo").fadeOut();
    $("#upload").val("");
});