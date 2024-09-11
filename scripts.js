
let bil;
let kulhetsFaktor = 0;
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
            <div style="width: ${kulhetsFaktor}%" class="updateBar"><strong>${kulhetsFaktor}</strong></div>
        </div>
            <img class="image" src="${updateImg ?? 'IMG/carempty.jpg'}"/>
            ${kompisDialog ?? ''}
            ${bilDialog ?? ''}
            ${exitText ?? ''}
        </div>
    `;
        if (kulhetsFaktor >= 100) {
            gameWon();
        } else if (kulhetsFaktor < 0) {
            gameOver();
        }
}
function gameOver(){
    exitText = `
    <div class="gameOver">Game Over!
    <button class="gameOverBtn" onclick="location.reload()">Try again</button></div>`;
    kompisDialog = '';
    bilDialog = '';
    updateView();
}
function gameWon(){
    exitText = `
        <div class="gameOver">DU VANT!
        <button class="gameOverBtn" onclick="location.reload()">Try again</button></div>`;
    kompisDialog = '';
    bilDialog = '';
    updateView();
}
function start() {
    exitText = `<div class="gameOver">Ready?
            <button class="gameOverBtn" onclick="placeHolder()">Start</button></div>`;
    kompisDialog = '';
    bilDialog = '';
        updateView();
}

function placeHolder(){
    if (kulhetsFaktor <= 30) {
        updateImg = 'IMG/caroil.jpg';
    } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
        updateImg = 'IMG/caroilupgrade1.jpg';
    } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
        updateImg = 'IMG/caroilupgrade2.jpg';
    }
    exitText = '';
    bilDialog = `
        <div class="bilDialog"> 
            <button onclick = "">Upgrades? Tja...</button>
            <button onclick = "">why, kjerra er jo grom?</button>
        </div>`;
    kompisDialog = `
        <div class="kompisDialog">Vil du ha en Upgrade?
            </div>`;
            updateView();
}



function Kompis(type) {
    bilDialog = `
        <div class="bilDialog"> 
            <button onclick="this.hilse('high five')">👋</button>
            <button onclick="this.hilse('fist bump')">👊</button>
            <button onclick="this.hilse('nikk')">🖕</button>
        </div>`;
    kompisDialog = `
        <div class="kompisDialog">Halla kompis!
            </div>`;
    const hilsninger = ["high five", "fist bump", "nikk"];
    this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];

    let baseImg, upgrade1Img, upgrade2Img;
    switch (type) {
        case 1:
            baseImg = "IMG/carkompis1.png";
            upgrade1Img = "IMG/carkompis1upgrade1.png";
            upgrade2Img = "IMG/carkompis1upgrade2.png";
            break;
        case 2:
            baseImg = "IMG/carkompis2.png";
            upgrade1Img = "IMG/carkompis2upgrade1.png";
            upgrade2Img = "IMG/carkompis2upgrade2.png";
            break;
        case 3:
            baseImg = "IMG/carkompis3.png";
            upgrade1Img = "IMG/carkompis3upgrade1.png";
            upgrade2Img = "IMG/carkompis3upgrade2.png";
            break;
        default:
            baseImg = "IMG/carempty.jpg";
            upgrade1Img = "IMG/carempty.jpg";
            upgrade2Img = "IMG/carempty.jpg";
    }

    if (kulhetsFaktor <= 30) {
        updateImg = baseImg;
    } else if (kulhetsFaktor > 30 && kulhetsFaktor <= 60) {
        updateImg = upgrade1Img;
    } else if (kulhetsFaktor > 60 && kulhetsFaktor <= 100) {
        updateImg = upgrade2Img;
    }
    skjulHilseValg();

    this.hilse = (hilsen) => {
        if (hilsen === this.riktigHilsen) {
            if (kulhetsFaktor > 70) {
                kulhetsFaktor += 10;
            } else {
                alert("Greit nok, men du kan bli mye kulere!");
            }
        } else {
            alert("Du hilste feil, og bilen din er ikke kul!");
            kulhetsFaktor -= 10;
            if (kulhetsFaktor < 70) {
                alert("Du er fortsatt kul, men dette ble en klein situasjon.");
            } else {
                alert("Du fikk en kald skulder av kompisen din, det svekket bilens kulhet.");
            }
        }
        updateView();
    };
}

function jehovasVitne() {
    bilDialog = `
        <div class="bilDialog"> 
            <button onclick="this.hilse('high five')">👋</button>
            <button onclick="this.hilse('fist bump')">👊</button>
            <button onclick="this.hilse('nikk')">🖕</button>
        </div>`;
    kompisDialog = `
    <div class="kompisDialog"></div>`;
    
    const hilsninger = ["high five", "fist bump", "nikk"];
    this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];
    
    this.hilse = (hilsen) => {
        if (hilsen === this.riktigHilsen) {
            if (kulhetsFaktor > 70) {
                kulhetsFaktor += 10;
            } else {
                alert("Greit nok, men du kan bli mye kulere!");
            }
        } else {
            alert("Du hilste feil, og bilen din er ikke kul!");
            kulhetsFaktor -= 10;
            if (kulhetsFaktor < 70) {
                alert("Du er fortsatt kul, men dette ble en klein situasjon.");
            } else {
                alert("Du fikk en kald skulder av kompisen din, det svekket bilens kulhet.");
            }
        }
        updateView();
    };
}

function bestemor() {
    bilDialog = `
        <div class="bilDialog"> 
            <button onclick="this.hilse('high five')">👋</button>
            <button onclick="this.hilse('fist bump')">👊</button>
            <button onclick="this.hilse('nikk')">🖕</button>
        </div>`;
    kompisDialog = `
    <div class="kompisDialog"></div>`;
    
    const hilsninger = ["high five", "fist bump", "nikk"];
    this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];
    
    this.hilse = (hilsen) => {
        if (hilsen === this.riktigHilsen) {
            if (kulhetsFaktor > 70) {
                kulhetsFaktor += 10;
            } else {
                alert("Greit nok, men du kan bli mye kulere!");
            }
        } else {
            alert("Du hilste feil, og bilen din er ikke kul!");
            kulhetsFaktor -= 10;
            if (kulhetsFaktor < 70) {
                alert("Du er fortsatt kul, men dette ble en klein situasjon.");
            } else {
                alert("Du fikk en kald skulder av kompisen din, det svekket bilens kulhet.");
            }
        }
        updateView();
    };
}

function flatEarther() {
    bilDialog = `
        <div class="bilDialog"> 
            <button onclick="this.hilse('high five')">👋</button>
            <button onclick="this.hilse('fist bump')">👊</button>
            <button onclick="this.hilse('nikk')">🖕</button>
        </div>`;
    kompisDialog = `
    <div class="kompisDialog"></div>`;
    
    const hilsninger = ["high five", "fist bump", "nikk"];
    this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];
    
    this.hilse = (hilsen) => {
        if (hilsen === this.riktigHilsen) {
            if (kulhetsFaktor > 70) {
                kulhetsFaktor += 10;
            } else {
                alert("Greit nok, men du kan bli mye kulere!");
            }
        } else {
            alert("Du hilste feil, og bilen din er ikke kul!");
            kulhetsFaktor -= 10;
            if (kulhetsFaktor < 70) {
                alert("Du er fortsatt kul, men dette ble en klein situasjon.");
            } else {
                alert("Du fikk en kald skulder av kompisen din, det svekket bilens kulhet.");
            }
        }
        updateView();
    };
}

function upgrade() {

}


function hilse(hilsen) {
    if (hilsen === this.riktigHilsen) {
        if (kulhetsFaktor > 70) {
            kulhetsFaktor += 10;
            } else {
                alert("Greit nok, men du kan bli mye kulere!");
            }
    }   else {
            alert("Du hilste feil, og bilen din er ikke kul!");
            kulhetsFaktor -= 10;
            if (kulhetsFaktor < 70) {
                alert("Du er fortsatt kul, men dette ble en klein situasjon.");
            } else {
                alert("Du fikk en kald skulder av kompisen din, det svekket bilens kulhet.");
            }
        }  
    updateView();
}

function randomEvent() {

}