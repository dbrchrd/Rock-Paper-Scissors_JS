let player_card = document.querySelectorAll(".card");
let rock_card = player_card[0];
let paper_card = player_card[1];
let scissors_card = player_card[2];
let card = "No card";
let bot_card = "No card";

rock_card.onclick = async () => {
  console.log("rock");
  card = "r";
  console.log(bot_play());
}
