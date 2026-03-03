let hunger = 50;
let hygiene = 50;
let play = 50;

function updateBars() {
  document.getElementById("hunger").style.width = hunger + "%";
  document.getElementById("hygiene").style.width = hygiene + "%";
  document.getElementById("play").style.width = play + "%";
}

function feed() {
  hunger = Math.min(100, hunger + 10);
  updateBars();
}

function wash() {
  hygiene = Math.min(100, hygiene + 10);
  updateBars();
}

function playPet() {
  play = Math.min(100, play + 10);
  updateBars();
}

function changeName() {
  let newName = prompt("Enter new pet name:");
  if (newName) document.getElementById("petName").innerText = newName;
}
window.onload = function() {
  const user = localStorage.getItem("user");
  if (user) {
    document.getElementById("welcomeUser").innerText = user;
  }
  updateBars();
}
