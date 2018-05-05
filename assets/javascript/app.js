// GLOBAL VARIABLES
//----------------------------------------------------
// Starting statistics are 0
var correct = 0;
// 
//----------------------------------------------------


// FUNCTIONS
//----------------------------------------------------
// START GAME
$("#startGame").click(function(){
    $(this).hide();
    $("#main-container").show();
    setTimeout(endGame, 1000 * 30);
})

// END GAME- evaluate answers to questions and add to totals
function endGame() {
    alert("Time's Up!");
    // TODO: EVALUATE ANSWERS TO QUESTIONS WITH IF STATEMENTS

    $("#score").html("You got " + correct + " questions right!");
}
//----------------------------------------------------




// MAIN PROCESS
//----------------------------------------------------


//----------------------------------------------------
