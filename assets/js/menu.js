$("#hamburger").click(function() {
   
    $(".menu").css({ "transform": "translate(0px)" });
    $("#hamburger").hide();

});

$("#closeIcon").click(function() {
  
    $(".menu").css({ "transform": "translate(-200px)" });
    $("#hamburger").show(200);
});
