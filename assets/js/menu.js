$("#hamburger").click(function() {
     $(".menu").css({ left: "0%" });
    $("#hamburger").hide();

});

$("#closeIcon").click(function() {
    $(".menu").css({ left: "-100%" });
    $("#hamburger").show(200);
});
