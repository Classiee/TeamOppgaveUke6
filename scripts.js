const app = document.getElementById("app");
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
            <div style="width: ${kulhetsFaktor}%" class="updateBar">${kulhetsFaktor}</div>
            Kulhet:
        <img class="image" src="${updateImg ?? "IMG/carempty.jpg"}"/>
        </div>
    </div>
    `;
}

function start() {}

function goodJob() {}

function badJob() {}

function Kompis() {
  app.innerHTML += /*HTML*/ `
    <button onclick = "hilse()">👋</button>
    <button onclick = "hilse()">👊</button>
    <button onclick = "hilse()">🙂‍↕️</button>
    `;

  const hilsninger = ["high five", "fist bump", "nikk"];
  this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];

  const hilsninger = ["high five", "fist bump", "nikk"];
  this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];

  if (kulhetsFaktor <= 30) {
    updateImg = "IMGcarkompis1.png";
  } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
    updateImg = "IMGcarkompis1upgrade1.png";
  } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
    updateImg = "IMGcarkompis1upgrade2.png";
  }

  this.hils = function (hilsen) {
    if (hilsen === this.riktigHilsen) {
      if (kulhetsFaktor > 60) {
        kulhetsFaktor += 10;
        updateImg = "IMGcarkompis1upgrade2.png";
      } else {
        alert("Greit nok, men du kan bli mye kulere!");
        kulhetsFaktor -= 5;
      }
    } else {
      alert("Du hilste feil, og bilen din er ikke kul!");
      kulhetsFaktor -= 10;
      if (kulhetsFaktor < 70) {
        alert("Du er fortsatt kul, men dette ble en klein situasjon.");
      } else {
        alert(
          "Du fikk en kald skulder av kompisen din, det svekket bilens kulhetsFaktor."
        );
      }
    }
    skjulHilseValg();
  };
}

function Kompis1() {
  app.innerHTML += /*HTML*/ `
    <button onclick = "hilse()">👋</button>
    <button onclick = "hilse()">👊</button>
    <button onclick = "hilse()">🙂‍↕️</button>
    `;

  const hilsninger = ["high five", "fist bump", "nikk"];
  this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];

  this.hils = function (hilsen) {
    if (hilsen === this.riktigHilsen) {
      if (kulhetsFaktor > 70) {
        kulhetsFaktor += 10;
      } else {
        alert("Greit nok, men du kan bli mye kulere!");
        kulhetsFaktor -= 5;
      }
    } else {
      alert("Du hilste feil, og bilen din er ikke kul!");
      kulhetsFaktor -= 10;
      if (kulhetsFaktor > 70) {
        alert("Du er fortsatt kul, men dette ble en klein situasjon.");
      } else {
        alert(
          "Du fikk en kald skulder av kompisen din, det svekket bilens kulhetsFaktor."
        );
      }
    }
    skjulHilseValg();
  };

  const hilsninger = ["high five", "fist bump", "nikk"];
  this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];

  if (kulhetsFaktor <= 30) {
    updateImg = "IMGcarkompis2.png";
  } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
    updateImg = "IMGcarkompis2upgrade1.png";
  } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
    updateImg = "IMGcarkompis2upgrade2.png";
  }

  this.hils = function (hilsen) {
    if (hilsen === this.riktigHilsen) {
      if (kulhetsFaktor > 70) {
        alert("Kul hilsen tilbake! Kompisen din er imponert.");
        kulhetsFaktor += 10;
      } else {
        alert("Greit nok, men du kan bli mye kulere!");
        kulhetsFaktor -= 5;
      }
    } else {
      alert("Du hilste feil, og bilen din er ikke kul!");
      kulhetsFaktor -= 10;
      if (kulhetsFaktor > 70) {
        alert("Du er fortsatt kul, men dette ble en klein situasjon.");
      } else {
        alert(
          "Du fikk en kald skulder av kompisen din, det svekket bilens kulhetsFaktor."
        );
      }
    }
    skjulHilseValg();
  };
}

function Kompis2() {
  app.innerHTML += /*HTML*/ `
    <button onclick = "hilse()">👋</button>
    <button onclick = "hilse()">👊</button>
    <button onclick = "hilse()">🙂‍↕️</button>
    `;

  const hilsninger = ["high five", "fist bump", "nikk"];
  this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];

  this.hils = function (hilsen) {
    if (hilsen === this.riktigHilsen) {
      if (kulhetsFaktor > 70) {
        kulhetsFaktor += 10;
      } else {
        alert("Greit nok, men du kan bli mye kulere!");
        kulhetsFaktor -= 5;
      }
    } else {
      alert("Du hilste feil, og bilen din er ikke kul!");
      kulhetsFaktor -= 10;
      if (kulhetsFaktor > 70) {
        alert("Du er fortsatt kul, men dette ble en klein situasjon.");
      } else {
        alert(
          "Du fikk en kald skulder av kompisen din, det svekket bilens kulhetsFaktor."
        );
      }
    }
    skjulHilseValg();
  };

  const hilsninger = ["high five", "fist bump", "nikk"];
  this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];

  if (kulhetsFaktor <= 30) {
    updateImg = "IMGcarkompis3.png";
  } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
    updateImg = "IMG/carkompis3upgrade1.png";
  } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
    updateImg = "IMGcarkompis3upgrade2.png";
  }

  this.hils = function (hilsen) {
    if (hilsen === this.riktigHilsen) {
      if (kulhetsFaktor > 70) {
        alert("Kul hilsen tilbake! Kompisen din er imponert.");
        kulhetsFaktor += 10;
      } else {
        alert("Greit nok, men du kan bli mye kulere!");
        kulhetsFaktor -= 5;
      }
    } else {
      alert("Du hilste feil, og bilen din er ikke kul!");
      kulhetsFaktor -= 10;
      if (kulhetsFaktor > 70) {
        alert("Du er fortsatt kul, men dette ble en klein situasjon.");
      } else {
        alert(
          "Du fikk en kald skulder av kompisen din, det svekket bilens kulhetsFaktor."
        );
      }
    }
    skjulHilseValg();
  };
}

function jehovasVitne() {
  app.innerHTML += /*HTML*/ `
    <button onclick = "hilse()">👊</button>
    <button onclick = "hilse()">🙏</button>
    <button onclick = "hilse()">🫵</button>
    `;
}

function bestemor() {
  app.innerHTML += /*HTML*/ `
    <button onclick = "hilse()">👊</button>
    <button onclick = "hilse()">🙏</button>
    <button onclick = "hilse()">🫵</button>
    `;
}

function flatEarther() {
  app.innerHTML += /*HTML*/ `
    <button onclick = "hilse()">👊</button>
    <button onclick = "hilse()">🙏</button>
    <button onclick = "hilse()">🫵</button>
    `;
}

function upgrade() {
  skjulHilseValg();
}

function hilse() {}

function randomEvent() {}

function kjør() {}

function skjulHilseValg() {
  document.getElementById("ukjent").style.display = "none";
  document.getElementById("ukjent").style.display = "block";
}
