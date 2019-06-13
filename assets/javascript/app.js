var cartoons = ["Snoopy","Ed, Edd n Eddy","Bugs Bunny","Foghorn Leghorn", "Donald Duck"]

var userInput = $("#search-bar").val();

$("#buttons").ready(function(){

    for(i = 0; i < cartoons.length; i++){
        var cartBtn = $("<button type=\"button\" char-data=" + cartoons[i] + " class=\"gif-button btn btn-outline-danger\">"+ cartoons[i] + "</button>")
        $("#buttons").append(cartBtn);

    }



//});


// Use this approach for binding events to elements, especially with dynamic elements   
//$("body").on("click", ".someButtonClass", function() {
	// event code - do something
//});

//$("button").on("click", function(){
    $("body").on("click", "#search-button", function(){
        var newChar = $("#search-bar").text().trim();
        var newBtn = $("<button type=\"button\" char-data=" + newChar + " class=\"gif-button btn btn-outline-danger\">"+ newChar + "</button>")
        $("#buttons").append(newBtn);


    });

    $("body").on("click", ".gif-button", function() {


    var character = $(this).attr("char-data");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    character + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
        url:queryURL,
        method:"GET",
    })
        .then(function(response){
            console.log(queryURL);

            console.log(response);
            //
            var data = response.data;
            for(i=0;i<data.length;i++){
            var gifDiv = $("<div>");
            var gifImg = $("<img>");
            gifImg.attr("src", data[i].images.fixed_height_still.url);
            gifImg.attr("class", "gif");
            gifImg.attr("gif-state", "still");
            gifImg.attr("gif-animate",data[i].images.fixed_height.url);
            gifImg.attr("gif-still", data[i].images.fixed_height_still.url);
            $("#gifs").append(gifDiv);
            $(gifDiv).append(gifImg);
            };






        });
    });

    $("body").on("click", ".gif", function() {
        
        var state = $(this).attr("gif-state");

        if(state === "still"){
            $(this).attr("src",$(this).attr("gif-animate"));
            $(this).attr("gif-state","animate");
        }else{
            $(this).attr("src",$(this).attr("gif-still"));
            $(this).attr("gif-state","still");
        }


    });
});
