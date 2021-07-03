let player = document.querySelectorAll(".player")[0];
let bot = document.querySelectorAll(".player")[1];
let win = "nobody";
let player_card = document.querySelectorAll(".card");
let rock_card = player_card[0];
let paper_card = player_card[1];
let scissors_card = player_card[2];
let card = "No card";
let bot_card_l = "No card";
let bot_card = document.querySelectorAll(".cardbot");
let rock_card_bot = bot_card[0];
let paper_card_bot = bot_card[1];
let scissors_card_bot = bot_card[2];
let end_screen = document.querySelector(".end-screen");
// console.log(rock_card, paper_card, scissors_card);
const botPlay = () => {
  let bot_card_int = parseInt((Math.random() * (3 - 1 + 1)), 10) + 1;
  switch (bot_card_int) {
    case 1:
    bot_card_l = "r"
      break;
    case 2:
    bot_card_l = "p"
      break;
    case 3:
    bot_card_l = "s"
      break;
    default:
      "No card"
  }
  return bot_card;
}
const botDisplay = () => {
  if (bot_card_l === "r") {
    rock_card_bot.style.display = "flex";
    paper_card_bot.style.display = "none";
    scissors_card_bot.style.display = "none";
  }
  if (bot_card_l === "p") {
    rock_card_bot.style.display = "none";
    paper_card_bot.style.display = "flex";
    scissors_card_bot.style.display = "none";
  }
  if (bot_card_l === "s") {
    rock_card_bot.style.display = "none";
    paper_card_bot.style.display = "none";
    scissors_card_bot.style.display = "flex";
  }
}
const result = () => {
  if (card === bot_card_l) {
    console.log("Equality");
  } else if (card === "s" && bot_card_l === "r") {
    console.log("Rock breaks the scissors\nBot win");
    botWin();
  } else if (card === "r" && bot_card_l === "s") {
    console.log("Rock breaks the scissors\nPlayer win");
    playerWin();
  } else if (card === "r" && bot_card_l === "p") {
    console.log("Paper covers rock\nBot win");
    botWin();
  } else if (card === "p" && bot_card_l === "r") {
    console.log("Paper covers rock\nPlayer win");
    playerWin();
  } else if (card === "p" && bot_card_l === "s") {
    console.log("Scissors cuts paper\nBot win");
    botWin();
  } else if (card === "s" && bot_card_l === "p") {
    console.log("Scissors cuts paper\nPlayer win");
    playerWin();
  }
}
const playerWin = () => {
  player.style.backgroundImage = "linear-gradient(to right, #0F0 40%, #FF0)";
  bot.style.backgroundImage = "linear-gradient(to left, #F00 40%, #FF0)";
}
const botWin = () => {
  player.style.backgroundImage = "linear-gradient(to right, #F00 40%, #FF0)";
  bot.style.backgroundImage = "linear-gradient(to left, #0F0 40%, #FF0)";
}
rock_card.onclick = () => {
  // console.log("rock");
  card = "r";
  botPlay();
  botDisplay();
  rock_card.style.display = "flex";
  paper_card.style.display = "none";
  scissors_card.style.display = "none";
  end_screen.style.zIndex = "10000";
  result();
}
paper_card.onclick = () => {
  // console.log("paper");
  card = "p";
  botPlay();
  botDisplay();
  rock_card.style.display = "none";
  paper_card.style.display = "flex";
  scissors_card.style.display = "none";
  end_screen.style.zIndex = "10000";
  result();
}
scissors_card.onclick = () => {
  // console.log("scissors");
  card = "s";
  botPlay();
  botDisplay();
  rock_card.style.display = "none";
  paper_card.style.display = "none";
  scissors_card.style.display = "flex";
  end_screen.style.zIndex = "10000";
  result();
}
end_screen.onclick = () => {
  window.location.reload()
}
