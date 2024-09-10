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
        
        if (kulhetsFaktor <= 30) {
            updateImg = baseImg;
        } else if (kulhetsFaktor > 30 && kulhetsFaktor <= 60) {
            updateImg = upgrade1Img;
        } else if (kulhetsFaktor > 60 && kulhetsFaktor <= 100) {
            updateImg = upgrade2Img;
        }
        
        this.hils = function (hilsen) {
            if (hilsen === this.riktigHilsen) {
                if (kulhetsFaktor > 60) {
                    kulhetsFaktor += 10;
                    updateImg = upgrade2Img;
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
                    alert("Du fikk en kald skulder av kompisen din, det svekket bilens kulhetsFaktor.");
                }
            }
            skjulHilseValg();
        };
    }
        
        
        
        
        
        

// function Kompis() {
//     app.innerHTML += /*HTML*/`
//     <button onclick = "hilse()">👋</button>
//     <button onclick = "hilse()">👊</button>
//     <button onclick = "hilse()">🙂‍↕️</button>
//     `;
//     const hilsninger = ["high five", "fist bump", "nikk"];
//     this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];
    
//     if (kulhetsFaktor <= 30) {
//         updateImg = "IMG\carkompis1.png";
//       } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
//         updateImg = "IMG\carkompis1upgrade1.png";
//       } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
//         updateImg = "IMG\carkompis1upgrade2.png";
//       }

//     this.hils = function (hilsen) {
//         if (hilsen === this.riktigHilsen) {
//             if (kulhetsFaktor > 60) {
//                 kulhetsFaktor += 10;
//                 updateImg = "IMG\carkompis1upgrade2.png"
//             } else {
//                 alert("Greit nok, men du kan bli mye kulere!");
//                 kulhetsFaktor -= 5;
//             }
//         } else {
//             alert("Du hilste feil, og bilen din er ikke kul!");
//             kulhetsFaktor -= 10;
//             if (kulhetsFaktor < 70) {
//                 alert("Du er fortsatt kul, men dette ble en klein situasjon.");
//             } else {
//                 alert("Du fikk en kald skulder av kompisen din, det svekket bilens kulhetsFaktor.");
//             }
//         }
//         skjulHilseValg();
//     };
// }

// function Kompis1() {
//     app.innerHTML += /*HTML*/`
//     <button onclick = "hilse()">👋</button>
//     <button onclick = "hilse()">👊</button>
//     <button onclick = "hilse()">🙂‍↕️</button>
//     `;
//     const hilsninger = ["high five", "fist bump", "nikk"];
//     this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];
    
//     if (kulhetsFaktor <= 30) {
//         updateImg = "IMG\carkompis2.png";
//       } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
//         updateImg = "IMG\carkompis2upgrade1.png";
//       } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
//         updateImg = "IMG\carkompis2upgrade2.png";
//       }

//     this.hils = function (hilsen) {
//         if (hilsen === this.riktigHilsen) {
//             if (kulhetsFaktor > 70) {
//                 alert("Kul hilsen tilbake! Kompisen din er imponert.");
//                 kulhetsFaktor += 10;
//             } else {
//                 alert("Greit nok, men du kan bli mye kulere!");
//                 kulhetsFaktor -= 5;
//             }
//         } else {
//             alert("Du hilste feil, og bilen din er ikke kul!");
//             kulhetsFaktor -= 10;
//             if (kulhetsFaktor > 70) {
//                 alert("Du er fortsatt kul, men dette ble en klein situasjon.");
//             } else {
//                 alert("Du fikk en kald skulder av kompisen din, det svekket bilens kulhetsFaktor.");
//             }
//         }
//         skjulHilseValg();
//     };
// }

// function Kompis2() {
//     app.innerHTML += /*HTML*/`
//     <button onclick = "hilse()">👋</button>
//     <button onclick = "hilse()">👊</button>
//     <button onclick = "hilse()">🙂‍↕️</button>
//     `;
//     const hilsninger = ["high five", "fist bump", "nikk"];
//     this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];
    
//     if (kulhetsFaktor <= 30) {
//         updateImg = "IMG\carkompis3.png";
//       } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
//         updateImg = "IMG/carkompis3upgrade1.png";
//       } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
//         updateImg = "IMG\carkompis3upgrade2.png";
//       }

//     this.hils = function (hilsen) {
//         if (hilsen === this.riktigHilsen) {
//             if (kulhetsFaktor > 70) {
//                 alert("Kul hilsen tilbake! Kompisen din er imponert.");
//                 kulhetsFaktor += 10;
//             } else {
//                 alert("Greit nok, men du kan bli mye kulere!");
//                 kulhetsFaktor -= 5;
//             }
//         } else {
//             alert("Du hilste feil, og bilen din er ikke kul!");
//             kulhetsFaktor -= 10;
//             if (kulhetsFaktor > 70) {
//                 alert("Du er fortsatt kul, men dette ble en klein situasjon.");
//             } else {
//                 alert("Du fikk en kald skulder av kompisen din, det svekket bilens kulhetsFaktor.");
//                 kulhetsFaktor -= 5;
//             }
//         }
//         skjulHilseValg();
//     };
// }

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

function upgrade() {

}

function hilse() {
    

}

function randomEvent() {

}

function kjør() {

}

function skjulHilseValg() {
    document.getElementById("ukjent").style.display = "none";
    document.getElementById("ukjent").style.display = "block";
}
