var coins = 0;
var progress = 1;

var $$ = Dom7;
var levels = [level1, level2] ;

//levels

var level1 = {num: 1, 
    riddle: 'What has to be broken before you can use it?', 
    answer: "egg",
    hint1: 'It is a food',
    hint2: 'A breakfast Food',
    hint3: '3 letter word',
}

var level2 = {num: 2, 
    riddle: 'What can run but cannot walk?', 
    answer: 'river', 
    hint1: 'Not an animal',
    hint2: 'Can be found outdoors',
    hint3: 'Made up of water',
}

//-----------------------------------------------
function levelup() {
    progress++;
}

function addcoins(amount) {
    coins += amount;
    $(".coins").html(coins);
}

function resetGame() {
    coins = 0;
    $(".coins").html(coins);
}



//Global Script for all pages
$$(document).on('page:init', function(e) {
    $(".coins").html(coins);

    //settings page
    $("#add100").on("click", function () {
        addcoins(100);
        console.log("ADDING COINS")
    });

    $("#resetGame").on("click", function () {
        resetGame();
        console.log("Game Reset")
    });


    //level page
    $('#levelnum').html(level1.num);
    $('#riddle').html(level1.riddle);
    $('#submit').on("click", function () {
        if ($("#answerInput").val() == level1.answer) {
            console.log("CORRECT");
        } else {
            console.log("INCORRECT");
        }
    })


})


