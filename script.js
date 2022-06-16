$("button").on("click", function(){
    let mt = $("input").eq(0).val();
    let rt = $("input").eq(1).val();
    $("ol").append("<li>", "Movie Title: " + mt + " ==> ","Rating: " + rt)
    
    $("ol").append("<button id='delete-b'>delete</button>")

    $("#delete-b").on("click", function(){
        this.parentNode.remove();
    })
});
