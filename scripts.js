let bil;
let kulhetsFaktor = 0;
let updateImg;
let kompisDialog;
let bilDialog;
let exitText;

updateView();
function updateView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    <div>
        <div class="progressBar">
            <div style="width: ${kulhetsFaktor}%" class="updateBar"><strong>${kulhetsFaktor}%</strong></div>
        </div>
        <div class="text">😎</div>
            <img class="image" src="${updateImg ?? "IMG/carempty.jpg"}"/>
            ${kompisDialog ?? ""}
            ${bilDialog ?? ""}
            ${exitText ?? ""}
        </div>
    `;
  if (kulhetsFaktor >= 100) {
    gameWon();
  } else if (kulhetsFaktor < 0) {
    gameOver();
  }
  randomEvent();
}

function gameOver() {
  exitText = `
    <div class="gameOver">Game Over!
    <button class="gameOverBtn" onclick="location.reload()">Try again</button></div>`;
  kompisDialog = "";
  bilDialog = "";
  updateView();
}

function gameWon() {
  exitText = `
        <div class="gameOver">DU VANT!
        <button class="gameOverBtn" onclick="location.reload()">Try again</button></div>`;
  kompisDialog = "";
  bilDialog = "";
  updateView();
}

function start() {
  exitText = `<div class="gameOver">Ready?
            <button class="gameOverBtn" onclick="placeHolder()">Start</button></div>`;
  kompisDialog = "";
  bilDialog = "";
  updateView();
}

function placeHolder() {
  if (kulhetsFaktor <= 30) {
    updateImg = "IMG/caroil.jpg";
  } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
    updateImg = "IMG/caroilupgrade1.jpg";
  } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
    updateImg = "IMG/caroilupgrade2.jpg";
  }
  exitText = "";
  bilDialog = `
        <div class="bilDialog"> 
            <button onclick = "upgrade()">Upgrades? Tja...</button>
            <button onclick = "">why, kjerra er jo grom?</button>
        </div>`;
  kompisDialog = `
        <div class="kompisDialog">Vil du ha en Upgrade?
            </div>`;
  updateView();
}

function kompis() {
  bilDialog = `
          <div class="bilDialog"> 
              <button onclick = "hilse('high five')">👋</button>
              <button onclick = "hilse('fist bump')">👊</button>
              <button onclick = "hilse('nikk')">🖕</button>
          </div>`;

  this.riktigHilsen = "high five";

  if (kulhetsFaktor <= 30) {
    updateImg = "IMG/carkompis1.png";
  } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
    updateImg = "IMG/carkompis1upgrade1.png";
  } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
    updateImg = "IMG/carkompis1upgrade2.png";
  }

  document.querySelector(".kompisDialog").innerHTML = kompisDialog;

  updateView();
}

function kompis() {
  bilDialog = `
            <div class="bilDialog"> 
                <button onclick = "hilse('high five')">👋</button>
                <button onclick = "hilse('fist bump')">👊</button>
                <button onclick = "hilse('nikk')">🖕</button>
            </div>`;

  riktigHilsen = "high five";

  if (kulhetsFaktor <= 30) {
    updateImg = "IMG/carkompis1.png";
  } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
    updateImg = "IMG/carkompis1upgrade1.png";
  } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
    updateImg = "IMG/carkompis1upgrade2.png";
  }

  updateView();
}

function kompis1() {
  bilDialog = `
            <div class="bilDialog"> 
                <button onclick = "hilse('high five')">👋</button>
                <button onclick = "hilse('fist bump')">👊</button>
                <button onclick = "hilse('nikk')">🖕</button>
            </div>`;
  const hilsninger = ["high five", "fist bump", "nikk"];
  riktigHilsen = "nikk";

  if (kulhetsFaktor <= 30) {
    updateImg = "IMG/carkompis2.png";
  } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
    updateImg = "IMG/carkompis2upgrade1.png";
  } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
    updateImg = "IMG/carkompis2upgrade2.png";
  }

  updateView();
}

function kompis2() {
  bilDialog = `
            <div class="bilDialog"> 
                <button onclick = "hilse('high five')">👋</button>
                <button onclick = "hilse('fist bump')">👊</button>
                <button onclick = "hilse('nikk')">🖕</button>
            </div>`;
  const hilsninger = ["high five", "fist bump", "nikk"];
  riktigHilsen = "fist bump";

  if (kulhetsFaktor <= 30) {
    updateImg = "IMG/carkompis3.png";
  } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
    updateImg = "IMG/carkompis3upgrade1.png";
  } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
    updateImg = "IMG/carkompis3upgrade2.png";
  }

  updateView();
}

function jehovasVitne() {
  bilDialog = `
        <div class="bilDialog"> 
            <button onclick = "hilse()">👋</button>
            <button onclick = "hilse()">👊</button>
            <button onclick = "hilse()">🖕</button>
        </div>`;
  kompisDialog = `
    <div class="kompisDialog"></div>`;
}

function bestemor() {
  bilDialog = `
        <div class="bilDialog"> 
            <button onclick = "hilse()">👋</button>
            <button onclick = "hilse()">👊</button>
            <button onclick = "hilse()">🖕</button>
        </div>`;
  kompisDialog = `
    <div class="kompisDialog"></div>`;
}

function flatEarther() {
  bilDialog = `
        <div class="bilDialog"> 
            <button onclick = "hilse()">👋</button>
            <button onclick = "hilse()">👊</button>
            <button onclick = "hilse()">🖕</button>
        </div>`;
  kompisDialog = `
    <div class="kompisDialog"></div>`;
}

function upgrade() {}

function hilse(hilsen) {
  if (hilsen === riktigHilsen) {
    kulhetsFaktor += 25;
    alert("Riktig hilsen! Kulhetsfaktor økt.");
    updateView();
    randomEvent();
  } else {
    alert("Du hilste feil, og bilen din er ikke kul!");
    kulhetsFaktor -= 10;
    alert("Kulhetsfaktor redusert.");
    updateView();
    randomEvent();
  }
}

function randomEvent() {
  let randomEncounter = Math.floor(Math.random() * 5) + 1;

  if (randomEncounter == 1) {
    kompis();
  } else if (randomEncounter == 2) {
    kompis1();
  } else if (randomEncounter == 3) {
    kompis2();
  } else if (randomEncounter == 4) {
    jehovasVitne();
  } else if (randomEncounter == 5) {
    flatEarther();
  } else {
    bestemor();
  }
}
