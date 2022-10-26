var coins = 0;
var $$ = Dom7;

function addcoins(amount) {
    coins += amount;
}

addcoins(200);


$$(document).on('page:init', function(e) {
    $(".coins").html(coins);
})

$("#add100").on("click", addcoins(100));