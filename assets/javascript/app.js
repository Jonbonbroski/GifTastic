var cartoons = ["Snoopy","Ed, Edd n Eddy","Bugs Bunny","Foghorn Leghorn", "Donald Duck"]

var userInput = $("#search-bar").val();

$("#buttons").ready(function(){

    for(i = 0; i < cartoons.length; i++){
        var cartBtn = $("<button type=\"button\" value=" +cartoons[i] + " class=\"button btn btn-outline-danger\">"+ cartoons[i] + "</button>")
        $("#buttons").append(cartBtn);

    }



});

$(".button").on("click", function(){

    var character = $(this).attr("value");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" +
    character + "&api_key=XfB2v2RwWIh0fLf2fKm81XDc4QeYA2Nf=10";

    $.ajax({
        url:queryUrl,
        method:"GET",
    })
        .then(function(result){
            $("#gifs").append(result);

        });
});

