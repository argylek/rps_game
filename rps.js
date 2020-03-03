// creating stored variables to be used later

var userScore = 0;
var compScore = 0;
var ties = 0;
var winPercent = 0;
var lossPercent = 0;
var tiePercent = 0;


// setting variables that are going to be our finals with a sys(system) prefix 
var sysUserScore = document.getElementById('userScore');
var sysCompScore = document.getElementById('compScore');
var sysUserPick = document.getElementById('userPick');
var sysCompPick = document.getElementById('compPick');
var sysTies = document.getElementById('ties');
var sysFinalResult = document.getElementById('finalResult');
var sysWinPercent = document.getElementById('winPercent');
var sysLossPercent = document.getElementById('lossPercent');
var sysTiePercent = document.getElementById('tiePercent');

// setting up game win and loss conditions
var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    console.log("Tie.")
    return result = ["You tied with the computer!", "tie"]; 
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      console.log("rock > scissors");
      return result = ["Rock beats scissors! User wins!", "user"];
    } else if (choice2 === "paper") {
      console.log( "paper > rock" );
      return result = ["Paper covers rock! Computer Wins :'(", "comp"];
    }
  } else if (choice1 === "paper") {
    if (choice2 === "scissors") {
      console.log("scissors > paper");
      return result = ["Scissors cut all the paper - Computer Wins :(", "comp"];
    } else if (choice2 === "rock") {
      console.log( "paper > rock" )
      return result = ["Paper Covers Rock. User wins!", "user"];
    }
  } else if (choice1 === "scissors") {
    if (choice2 === "paper") {
      console.log("scissors > paper ")
      return result = ["Scissors cut up paper. User wins!", "user"]
    } else if (choice2 === "rock") {
      console.log("rock > scissors ")
      return result = ["Rock smashes scissors to bits! Computer wins :(", "comp"]
    }
  }
}

//logic behind computers choice

var computerGo = function() {
  console.log("Computer turn is happening");
  var compChoice = Math.random();
  // computer is selecting a random number between 1 and 0
  // computer will now have a rock paper or scissors based on the random roll
  if (compChoice < 0.34 ) {
    var compChoice = "rock";
    // console.log("Computer's choice is" + compChoice);
  } else if(compChoice <= 0.67 ) {
    var compChoice = "paper";
    // console.log("Computer's choice is" + compChoice);
  } else {
    var compChoice = "scissors";
    // console.log("Computer's choice is " + compChoice )
  }
  console.log("Computer choice is " + compChoice);
  return compChoice
};

// click functions
var userChoice = function(choice) {
  console.log("User choice is ", choice)
  var compChoice = computerGo();
  var userChoice = choice;
  // compare user and computer choices
  console.log(compare(userChoice, compChoice));
  console.log(result[0]);

  var getResult = (function() {
    if (result[1] === "user"){
      userScore++;
      // console.log("+1 to user. userScore is now " + userScore);
      return userScore;
    } else if (result[1] === "comp") {
      compScore++;
      // console.log("+1 to computer. compScore is now" + compScore);
      return compScore;
    } else {
      ties++;
      console.log("It was a tie. number of ties is " + ties);
    }
  }() )


// get percentages of wins and losses
  // var getPercents = (function() {
  //   totalPercent = userScore +
  //   winPercent =
  // })
  console.log("User score is now " + userScore + ", computer score is " + compScore + ".");
  console.log("Win percent is: " + winPercent + "Loss Percent is : " lossPercent);
  //update stored variables
  sysUserScore.textContent = userScore;
  sysCompScore.textContent = compScore;
  sysUserPick.textContent = userChoice;
  sysCompPick.textContent = compChoice;
  sysTies.textContent = ties;
  sysWinPercent = winPercent;
  sysLossPercent = lossPercent;
  sysTiePercent = tiePercent;
  sysFinalResult.textContent = result[0];
}

var rockBox = document.getElementById('rock');
rockBox.addEventListener('click', function() {
  userChoice("rock");
}, false);

var paperBox = document.getElementById('paper');
paperBox.addEventListener('click', function() {
  userChoice("paper");
}, false);

var scissorBox = document.getElementById('scissor');
scissorBox.addEventListener('click', function() {
  userChoice("scissors");
}, false);