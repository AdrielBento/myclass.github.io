var form = $("#formCadastro").serialize();
var cadastrar = $("#cadastrar");

cadastrar.click(function() {
    
  $.ajax({
    url: "",
    method: "POST",
    data: form,

    success: function() {},
    erro: function() {}
  });

});
