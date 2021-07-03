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
