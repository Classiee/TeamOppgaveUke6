
let bil;
let kulhetsFaktor = 20;
let updateImg;
let kompisDialog;
let bilDialog;
let exitText;
let myTimeout = setTimeout(start, 1000)

updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>
        <div class="progressBar">
            <div style="width: ${kulhetsFaktor}%" class="updateBar">${kulhetsFaktor}</div>
        </div>
            <img class="image" src="${updateImg ?? 'IMG/carempty.jpg'}"/>
            ${kompisDialog ?? ''}
            ${bilDialog ?? ''}
            ${exitText ?? ''}
        </div>
    `;
}
function start() {
    exitText = `<div class="gameOver">Ready?
            <button class="gameOverBtn" onclick="placeHolder()">Start</button></div>`;
    kompisDialog = '';
    bilDialog = '';
        updateView();
}
function placeHolder(){
    exitText = '';
    bilDialog = `
        <div class="bilDialog"> 
            <button onclick = "hilse()">👋</button>
            <button onclick = "hilse()">👊</button>
            <button onclick = "hilse()">🖕</button>
        </div>`;
    kompisDialog = `
        <div class="kompisDialog">Halla kompis!
            </div>`;
            updateView();
}

function gameOver(){
    exitText = `<div class="gameOver">Game Over!
            <button class="gameOverBtn" onclick="location.reload()">Try again</button></div>`;
    updateView();
        }

function Kompis() {
    const hilsninger = ["high five", "fist bump", "nikk"];
    this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];

    this.hils = function (hilsen) {
        if (hilsen === this.riktigHilsen) {
            if (bil.kulhet > 70) {
                // getElementById("result").innerHTML = "Du hilste riktig, og bilen din er blitt kul!";
                bil.kulhet += 10;
            } else {

                alert("Greit nok, men du kan bli mye kulere!");
                bil.kulhet -= 5;
            }
        } else {
            alert("Du hilste feil, og bilen din er ikke kul!");
            bil.kulhet -= 10;
            if (bil.kulhet > 70) {
                alert("Du er fortsatt kul, men dette ble en klein situasjon.");
            } else {
                alert("Du fikk en kald skulder av kompisen din, det svekket bilens kulhet.");
            }
        }
        skjulHilseValg();
    };
}

function Kompis1() {
    const hilsninger = ["high five", "fist bump", "nikk"];
    this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];

    this.hils = function (hilsen) {
        if (hilsen === this.riktigHilsen) {
            if (bil.kulhet > 70) {
                // getElementById("result").innerHTML = "Du hilste riktig, og bilen din er blitt kul!";
                bil.kulhet += 10;
            } else {
                alert("Greit nok, men du kan bli mye kulere!");
                bil.kulhet -= 5;
            }
        } else {
            alert("Du hilste feil, og bilen din er ikke kul!");
            bil.kulhet -= 10;
            if (bil.kulhet > 70) {
                alert("Du er fortsatt kul, men dette ble en klein situasjon.");
            } else {
                alert("Du fikk en kald skulder av kompisen din, det svekket bilens kulhet.");
            }
        }
        skjulHilseValg();
    };
}

function Kompis2() {
    const hilsninger = ["high five", "fist bump", "nikk"];
    this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];

    this.hils = function (hilsen) {
        if (hilsen === this.riktigHilsen) {
            if (bil.kulhet > 70) {
                // getElementById("result").innerHTML = "Du hilste riktig, og bilen din er blitt kul!";
                bil.kulhet += 10;
            } else {
                alert("Greit nok, men du kan bli mye kulere!");
                bil.kulhet -= 5;
            }
        } else {
            alert("Du hilste feil, og bilen din er ikke kul!");
            bil.kulhet -= 10;
            if (bil.kulhet > 70) {
                alert("Du er fortsatt kul, men dette ble en klein situasjon.");
            } else {
                alert("Du fikk en kald skulder av kompisen din, det svekket bilens kulhet.");
            }
        }
        skjulHilseValg();
    };
}

function jehovasVitne() {

}

function bestemor() {

}

function flatEarther() {

}

function upgrade() {

}

function hilse() {
    window.aktivKompis.hils(hilsen);
}

function randomEvent() {

}

function kjør() {

}

function skjulHilseValg() {
    document.getElementById("ukjent").style.display = "none";
    document.getElementById("ukjent").style.display = "block";
}
