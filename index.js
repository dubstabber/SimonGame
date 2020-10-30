let level = 1;
let pattern = [];
let userPattern = [];
let started = false;
let error = false;

$(document).on("keypress",() => {
    if(!started) {
        $("#level-title").html("Level "+ level);
        started = true;
        newBlock();
    }
});

$("#green").click(() => {
    checkBlocks(0);
})

$("#red").click(() => {
    checkBlocks(1);
})

$("#yellow").click(() => {
    checkBlocks(2);
})

$("#blue").click(() => {
    checkBlocks(3);
})

function checkBlocks(id) {
    userPattern.push(id);

    for(let i = 0; i < pattern.length; i++){
        if(pattern[i] !== userPattern[i])
            error = true;
    }

    if(error){
        new Audio("./sounds/wrong.mp3").play();
    } else {
        level++;
        setTimeout(newBlock, 700);
    }
}

function newBlock() {
    let randomBlock = Math.floor(Math.random() * 4);
    pattern.push(randomBlock);

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