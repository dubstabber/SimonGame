let level;
let pattern;
let userPattern;
let started = false;
let error = false;

$(document).on("keypress",() => {
    if(!started) {
        started = true;
        error  = false;
        level = 0;
        pattern = [];
        userPattern = [];
        newBlock();
    }
});

$("#green").click(() => {
    if(started){
        new Audio("./sounds/green.mp3").play();
        checkBlocks(0, "#green");
    }
})

$("#red").click(() => {
    if(started){
        new Audio("./sounds/red.mp3").play();
        checkBlocks(1, "#red");
    }
})

$("#yellow").click(() => {
    if(started){
        new Audio("./sounds/yellow.mp3").play();
        checkBlocks(2, "#yellow");
    }
})

$("#blue").click(() => {
    if(started){
        new Audio("./sounds/blue.mp3").play();
        checkBlocks(3, "#blue");
    }
})

function checkBlocks(id, color) {
    userPattern.push(id);
    $(color).addClass("pressed");

    for(let i = 0; i < userPattern.length; i++){
        if(pattern[i] !== userPattern[i])
            error = true;
    }

    if(error){
        new Audio("./sounds/wrong.mp3").play();
        $("#level-title").html("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        },100);
        started = false;
    } else if(pattern.length === userPattern.length) {
        userPattern = [];
        setTimeout(newBlock, 700);
    }

    setTimeout(() => {
        $(color).removeClass("pressed")
    }, 100);
}

function newBlock() {
    let randomBlock = Math.floor(Math.random() * 4);
    pattern.push(randomBlock);
    level++;
    $("#level-title").html("Level "+ level);

    switch(randomBlock){
        case 0:
            new Audio("./sounds/green.mp3").play();
            $("#green").fadeOut(300).fadeIn(300);
            break;
        case 1:
            new Audio("./sounds/red.mp3").play();
            $("#red").fadeOut(300).fadeIn(300);
            break;
        case 2:
            new Audio("./sounds/yellow.mp3").play();
            $("#yellow").fadeOut(300).fadeIn(300);
            break;
        case 3:
            new Audio("./sounds/blue.mp3").play();
            $("#blue").fadeOut(300).fadeIn(300);
            break;
    }

}