var coins = 0;

function addcoins(amount) {
    coins += amount;
    console.log("ADDED MONEY" + coins);
}

// $("#add100").on("click", function () {
//     console.log("I AM HERE");
// });

$('#coins2').html(coins);

$('#testbtn').on("click", function() {
    console.log("testerrr");
});