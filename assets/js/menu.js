var letra = $(".letraMenu");
var arrow = $(".link-arrow");
var iconArrow =$(".icon-arrow");

letra.hide();

arrow.click(function() {
  event.preventDefault();
  letra.toggle();
  iconArrow.toggleClass("fa-bars");
  iconArrow.toggleClass("fa-times")
});
