// GLOBAL VARIABLES
//----------------------------------------------------
// QUESTION VARIABLES
// var questions = {
//     question1: {
//         q: "What was the Beatles' first album release?",
//         a: "Please Please Me"
//     },
//     question2: {
        
//     },
//     question3: {
        
//     },
//     question4: {
        
//     },
//     question5: {
        
//     },
//     question6: {
        
//     },
//     question7: {
        
//     },
//     question8: {
        
//     },
//     question9: {
        
//     },
//     question10: {
        
//     }
// }
// Starting statistics are 0
var correct = 0;
// 
//----------------------------------------------------




// FUNCTIONS
//----------------------------------------------------
// START GAME

// END GAME- evaluate answers to questions and add to totals
function endGame() {
    alert("Time's Up!");
    $("#score").html("You got " + correct + " questions right!");
}

//----------------------------------------------------




// MAIN PROCESS
//----------------------------------------------------
// Starts the game by clicking the button, giving the player 30 seconds to answer questions
$("#startGame").click(function(){
    $(this).hide();
    $("#main-container").show();
    setTimeout(endGame, 1000 * 10);
})


//----------------------------------------------------
