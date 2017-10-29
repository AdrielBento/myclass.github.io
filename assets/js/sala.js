$("#send").click(function() {
  var text = $(".btnBoxSend").val();
  var nome = "Adriel";
  var data = criaData();
  var span = '<span class="NomeEData">' + nome + " - " + data + "</span>";
  var p = '<div class="divParagrafo">' + text + "</div>";
  var post = '<div class="postModel">' + span + p + "</div>";
  $("#posts").prepend(post);
});

function criaData() {
  var data = new Date();
 
  var hora = data.getHours();
  var min = data.getMinutes();
  var seg = data.getSeconds();
  var str_hora = hora + ":" + min + ":" + seg;
  return str_hora;
}
