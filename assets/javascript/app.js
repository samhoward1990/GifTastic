var animals = ["Dog", "Cat", "Rabbit", "Hamster", "Skunk", "Goldfish", "Bird", "Ferret", "Turtle", "Sugar Glider", "Chinchilla", "Hedgehog", "Hermit Crab", "Gerbil", "Pygmy Goat", "Chicken", "Capybara", "Teacup Pig", "Serval", "Salamander", "Frog"];
function createAnimalButtons() {
    $("#animal-buttons-display").empty();

    for (var i = 0; i < animals.length; i++) {
        var newButton = $("<button>").text(animals[i]);
        newButton.attr("data-name", animals[i]);
        newButton.addClass("animal-button m-1 btn btn-primary");
        $("#animal-buttons-display").append(newButton);
    }

}

$("#submit-button").on("click", function (event) {
    event.preventDefault();
    var userInput = $("#new-animal-input").val().trim();
    animals.push(userInput);
    createAnimalButtons();

});





$(document).on("click", ".animal-button", function () {
    var userAnimalPressed = $(this).attr("data-name");
    var apiKey = "cGfWihUFPNnLurKthj8p52joUJh3kj98";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userAnimalPressed + "&limit=10&rating=g&api_key=" + apiKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");
            var rating = $("<p>");
            var animalGifs = $("<img>");
            rating.text(results[i].rating);
            animalGifs.attr("src", results[i].images.fixed_height.url);
            animalDiv.append(rating);
            animalDiv.append(animalGifs);
            $("#show-animal-gifs").prepend(animalDiv);

        }
    });
});
createAnimalButtons(); 