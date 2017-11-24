var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
var calcular = document.getElementById("calcular");
var select = document.getElementById("opcoes");
var operacao = select.value;
select.addEventListener("change", function() {
  operacao = this.value;
});

calcular.addEventListener("click", function() {
  var result = document.getElementById("result");

  switch (operacao) {
    case "+":
    result.textContent = valor1.value + valor2.value;
      break;

    case "-":
    result.textContent = valor1.value - valor2.value;
      break;
    case "*":
      result.textContent = valor1.value * valor2.value;
      break;
    case "/":
    result.textContent = valor1.value / valor2.value;
  }

  
});
