var coins = 0;
var $$ = Dom7;

function addcoins(amount) {
    coins += amount;
    $(".coins").html(coins);
}

function resetGame() {
    coins = 0;
    $(".coins").html(coins);
}

//Script for the whole App
$$(document).on('page:init', function(e) {
    $(".coins").html(coins);

    $("#add100").on("click", function () {
        addcoins(100);
        console.log("ADDING COINS")
    });

    $("#resetGame").on("click", function () {
        resetGame();
        console.log("Game Reset")
    });
})

