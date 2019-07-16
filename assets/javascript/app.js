var animals = ["Dog", "Cat", "Rabbit", "Hamster", "Skunk", "Goldfish", "Bird", "Ferret", "Turtle", "Sugar Glider", "Chinchilla", "Hedgehog", "Hermit Crab", "Gerbil", "Pygmy Goat", "Chicken", "Capybara", "Teacup Pig", "Serval", "Salamander", "Frog"];

function createAnimalButtons() {
    $("#animal-buttons-display").empty();

    for (var i = 0; i < animals.length; i++) {
        var newButton = $("<button>").text(animals[i]);
        $("#animal-buttons-display").append(newButton);
    }
}
function addAnAnimal() {
    userInput = $("#new-animal-input").val();

}
createAnimalButtons();