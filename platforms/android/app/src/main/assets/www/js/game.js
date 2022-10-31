//TODO: pop up messages for errors and wins


var coins = 250;
var progress = 0;

var $$ = Dom7;
var levels = [
    {
        level: 1,
        riddle: 'What has to be broken before you can use it?',
        answer: "egg",
        hint1: 'It is a food',
        hint2: '3 letter word',
    },
    {
        level: 2,
        riddle: 'What can run but cannot walk?',
        answer: 'river',
        hint1: 'Not an animal',
        hint2: 'Made up of water',
    },
    {
        level: 3,
        riddle: 'What can you put in a bucket to make it weigh less?',
        answer: 'hole',
        hint1: 'Not an object you can fill the bucket with',
        hint2: 'What can you do to the bucket itself?',
    },
    {
        level: 4,
        riddle: 'What goes all around the world but stays in a corner?',
        answer: 'stamp',
        hint1: 'A Small object',
        hint2: 'What is on a letter?',
    },
    {
        level: 5,
        riddle: 'What kind of ship has two mates but no captain?',
        answer: 'relationship',
        hint1: 'Not an actual transporting ship',
        hint2: 'word ends with "ship"',
    },
    {
        level: 6,
        riddle: 'What can you catch but never throw?',
        answer: 'cold',
        hint1: 'Not an object',
        hint2: 'A Sickness',
    },
    {
        level: 7,
        riddle: 'What begins with an "e" and only contains one letter?',
        answer: 'envelope',
        hint1: 'Not necessarily a specific word. ',
        hint2: 'Something to do with a post-letter?',
    },
    {
        level: 8,
        riddle: 'What is full of holes but still holds water?',
        answer: 'sponge',
        hint1: 'You can find this object at a sink',
        hint2: 'Who lives in a pineapple under the sea?',
    },
    {
        level: 9,
        riddle: 'What is always found on the ground but never gets dirty?',
        answer: 'shadow',
        hint1: 'Something to do with light',
        hint2: 'Not a physical object, but follow a physical object',
    },

    {
        level: 10,
        riddle: 'Always old, sometimes new. Never sad, sometimes blue. Never empty, sometimes full. Never pushes, always pulls.',
        answer: 'moon',
        hint1: 'New ____, Blue ____, Full ____? ',
        hint2: 'What shines bright at the sky at night?',
    },


];

//levels

//-----------------------------------------------

function resetGame() {
    coins = 250;
    progress = 0;
    $(".coins").html(coins);
}

function levelup() {
    progress++;
    addcoins(25)

    $('#levelnum').html(levels[progress].level);
    $('#riddle').html(levels[progress].riddle);
    $('#answerInput').val('');
    $('#hint1').html('<a id="hint1btn" class="button button-round button-fill color-primary link buttonmenu">HINT 1 $50</a>')
    $('#hint2').html('<a id="hint2btn" class="button button-round button-fill color-primary link buttonmenu">HINT 2 $50</a>')
    $('#revanswer').html('<a id="answerbtn" class="button button-round button-fill color-primary link buttonmenu">REVEAL ANSWER $200</a>')

    $('#hint1btn').on("click", function () {
        if (coins >= 50) {
            console.log("purchased hint 1");
            deletecoins(50);
            $('#hint1').html('HINT 1: ' + levels[progress].hint1);
        } else {
            console.log("Insufficient Funds");
            // CREATE POPUP
        }
    })
    $('#hint2btn').on("click", function () {
        if (coins >= 50) {
            console.log("purchased hint 2");
            deletecoins(50);
            $('#hint2').html('HINT 2: ' + levels[progress].hint2);
        } else {
            console.log("Insufficient Funds");
            // CREATE POPUP
        }
    })
    $('#answerbtn').on("click", function () {
        if (coins >= 200) {
            console.log("purchased reveal answer");
            deletecoins(50);
            $('#revanswer').html('ANSWER: ' + levels[progress].answer);
        } else {
            console.log("Insufficient Funds");
            // CREATE POPUP
        }
    })

}

function addcoins(amount) {
    coins += amount;
    $(".coins").html(coins);
}

function deletecoins(amount) {
    coins -= amount;
    $(".coins").html(coins);
}

//Global Script for all pages
$$(document).on('page:init', function (e) {
    //Global variables
    $(".coins").html(coins);
    $('.open-alert').on('click', function () {
        app.alert('Hello');
    });


    //settings page
    $("#add100").on("click", function () {
        addcoins(100);
        console.log("ADDING COINS")
    });

    $(".resetGame").on("click", function () {
        resetGame();
        console.log("Game Reset")
    });



    $('#darkmode').on('click', function () {
        $("body").toggleClass('dark');
    });


    //level page
    $('#levelnum').html(levels[progress].level);
    $('#riddle').html(levels[progress].riddle);

    //hints
    $('#hint1btn').on("click", function () {
        if (coins >= 50) {
            console.log("purchased hint 1");
            deletecoins(50);
            $('#hint1').html('HINT 1: ' + levels[progress].hint1);
        } else {
            alert("Insufficient Funds");
            // CREATE POPUP
        }
    })
    $('#hint2btn').on("click", function () {
        if (coins >= 50) {
            console.log("purchased hint 2");
            deletecoins(50);
            $('#hint2').html('HINT 2: ' + levels[progress].hint2);
        } else {
            alert("Insufficient Funds");
            // CREATE POPUP
        }
    })
    $('#answerbtn').on("click", function () {
        if (coins >= 200) {
            console.log("purchased reveal answer");
            deletecoins(200);
            $('#revanswer').html('ANSWER: ' + levels[progress].answer);
        } else {
            alert("Insufficient Funds");
            // CREATE POPUP
        }
    })

    //submission
    $('#submit').on("click", function () {
        if ($("#answerInput").val().toLowerCase() == levels[progress].answer) {
            alert("Correct!");
            levelup();
            if (progress == 9) {
                $('#submit').html('<a href="/finish/" class="button button-fill button-round">SUBMIT</a>')
            }
        } else {
            alert("Incorrect Answer");
            incorrectAnswer();
        }
    })
})


