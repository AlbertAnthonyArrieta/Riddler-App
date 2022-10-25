var coins = 0;

function addcoins(amount) {
    coins += amount;
}

$(#add100).on("click", addcoins(100));