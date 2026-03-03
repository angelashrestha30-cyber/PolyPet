// LOGIN SYSTEM
function login() {
  localStorage.setItem("loggedIn", "true");
  window.location.href = "dashboard.html";
}

function register() {
  localStorage.setItem("loggedIn", "true");
  window.location.href = "dashboard.html";
}

function checkLogin() {
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
  }
}

// PET NAME
function changeName() {
  let name = prompt("Enter your pet's new name:");
  if (name) {
    document.getElementById("petName").innerText = name;
  }
}

// PET LEVEL SYSTEM
let hunger = 50;
let hygiene = 50;
let play = 50;

function updateBars() {
  if (document.getElementById("hungerFill")) {
    document.getElementById("hungerFill").style.width = hunger + "%";
    document.getElementById("hygieneFill").style.width = hygiene + "%";
    document.getElementById("playFill").style.width = play + "%";
  }
}

function feedPet() {
  hunger = Math.min(100, hunger + 10);
  updateBars();
}

function washPet() {
  hygiene = Math.min(100, hygiene + 10);
  updateBars();
}

function playPet() {
  play = Math.min(100, play + 10);
  updateBars();
}

// WORLD CLOCK
function addCountry() {
  let timezone = prompt("Enter timezone (ex: Asia/Tokyo, Europe/Berlin)");

  const div = document.createElement("div");

  setInterval(() => {
    const time = new Date().toLocaleString("en-US", {
      timeZone: timezone
    });
    div.innerText = timezone + ": " + time;
  }, 1000);

  document.getElementById("clockList").appendChild(div);
}

// SCHEDULE SESSION
function scheduleSession() {
  const date = document.getElementById("sessionDate").value;
  if (date) {
    alert("Session scheduled on " + date);
  }
}
