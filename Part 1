$(function () {
    console.log("Let's get ready to party with jQuery!");

    $("img").addClass("image-center")

    $("p:last-child").remove();

    $("#title").css("font-size", Math.random() * 100 + "px");

    $("ol").append($("<li>Yeah!!! </li>"));

    $("aside").empty()
    $("aside").append($("<p>", {text: "Apologizing for the list's existence."}))
    
    $(".form-control").on('keyup blur change', function () {
        let R = $(".form-control").eq(0).val();
        let G = $(".form-control").eq(1).val();
        let B = $(".form-control").eq(2).val();
        $("body").css("background-color",
        "rgb(" + R + "," + G + "," + B + ")");
      });

    $("img").on("click", function(){
        this.remove()
    })

});
