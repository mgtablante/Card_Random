/* eslint-disable */
import "bootstrap";
import "./style.css";

function main() {
  document.getElementById("btn").addEventListener("click", changeCard);
}
function changeCard() {
  let poker = ["heart", "spades", "blackclub", "diamond"];
  let card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let numberRandom = Math.floor(Math.random() * card.length);
  console.log(card[numberRandom]);

  let elementCard = document.querySelector(".myCard");
  let elementNumber = document.querySelector(".theNumber");
  elementNumber.innerHTML = card[numberRandom];

  let randomPoker = poker[Math.floor(Math.random() * poker.length)];
  elementCard.className = "myCard";
  elementCard.classList.add(randomPoker);
}

window.addEventListener("load", () => main());
