let player_card = document.querySelectorAll(".card");
let rock_card = player_card[0];
let paper_card = player_card[1];
let scissors_card = player_card[2];
let card = "No card";
let bot_card = "No card";
// console.log(rock_card, paper_card, scissors_card);
const bot_play = () => {
  let bot_card_int = parseInt((Math.random() * (3 - 1 + 1)), 10) + 1;
  switch (bot_card_int) {
    case 1:
    bot_card = "r"
      break;
    case 2:
    bot_card = "p"
      break;
    case 3:
    bot_card = "s"
      break;
    default:
      "No card"
  }
  return bot_card;
}
rock_card.onclick = async () => {
  console.log("rock");
  card = "r";
  console.log(bot_play());
}
paper_card.onclick = () => {
  console.log("paper");
  card = "p";
  console.log(bot_play());
}
scissors_card.onclick = () => {
  console.log("scissors");
  card = "s";
  console.log(bot_play());
}
