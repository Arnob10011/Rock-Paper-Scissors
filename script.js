const hands = document.querySelectorAll(".hand");

let SCORE = 0;

function clickedHand(hand) {
  const clickedHandImg = hand.target.getAttribute("src");
  // removing the game and result section
  const gameSection = document.querySelector(".game");
  const result = document.querySelector(".result");
  gameSection.style.display = "none";
  result.style.display = "flex";
  //  inserting the clicked hand
  const me = document.querySelector(".me img");
  me.src = clickedHandImg;
  // clicked hand for me and robot;
  const myPicked = hand.target.id;
  const robotPick = pickHandForRobot();
  referee(myPicked, robotPick);
}

function pickHandForRobot() {
  const pickedHand = ["Rock", "Paper", "Scissors"];

  const choose = Math.floor(Math.random() * 3);

  const robot = document.querySelector(".robot img");

  robot.src = `./images/${pickedHand[choose]}.png`;

  return pickedHand[choose];
}

Array.from(hands).forEach((hand) => {
  hand.addEventListener("click", clickedHand);
});

function referee(me, robot) {
  console.log(me, robot);

  if (me === "Rock" && robot === "Scissors") {
    generateText("You Won");
    getScore(++SCORE);
  }

  if (me === "Paper" && robot === "Rock") {
    generateText("You Won");
    getScore(++SCORE);
  }
  if (me === "Scissors" && robot === "Paper") {
    generateText("You Won");
    getScore(++SCORE);
  }
  // winning for the robot

  if (me === "Rock" && robot === "Paper") {
    generateText("You Lose");
  }

  if (me === "Paper" && robot === "Scissors") {
    generateText("You Lose");
  }
  if (me === "Scissors" && robot === "Rock") {
    generateText("You Lose");
  }

  if (me === robot) {
    generateText("It's a Tie");
  }
}
function generateText(text) {
  document.querySelector(".referee__content").textContent = text;
}

function getScore(score) {
  const scoreEl = document.querySelector(".score");
  scoreEl.textContent = score;
}

const playBtn = document.querySelector(".play--again");

playBtn.addEventListener("click", function () {
  const gameSection = document.querySelector(".game");
  const result = document.querySelector(".result");
  gameSection.style.display = "flex";
  result.style.display = "none";
});
