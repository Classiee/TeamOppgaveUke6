const app = document.getElementById("app");
let bil;
let kulhetsFaktor = 0;
let updateImg;
let kompisDialog;
let bilDialog;
let exitText;

updateView();
function updateView() {

    document.getElementById('app').innerHTML = /*HTML*/`
    <div>
        <div class="progressBar">
            <div style="width: ${kulhetsFaktor}%" class="updateBar">${kulhetsFaktor}</div>
            Kulhet:
        <img class="image" src="${updateImg ?? 'IMG/carempty.jpg'}"/>
        </div>
    </div>
    `;
}

function start() {

}

function goodJob() {

}

function badJob() {

}

function Kompis(type) {
        app.innerHTML += /*HTML*/`
            <button onclick = "hilse()">👋</button>
            <button onclick = "hilse()">👊</button>
            <button onclick = "hilse()">🙂‍↕️</button>
            `;
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

    const kompis1 = new Kompis(1);
    const kompis2 = new Kompis(2);
    const kompis3 = new Kompis(3);
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
    app.innerHTML += /*HTML*/`
    <button onclick = "hilse()">👊</button>
    <button onclick = "hilse()">🙏</button>
    <button onclick = "hilse()">🫵</button>
    `;
}

function bestemor() {
    app.innerHTML += /*HTML*/`
    <button onclick = "hilse()">👊</button>
    <button onclick = "hilse()">🙏</button>
    <button onclick = "hilse()">🫵</button>
    `;
}

function flatEarther() {
    app.innerHTML += /*HTML*/`
    <button onclick = "hilse()">👊</button>
    <button onclick = "hilse()">🙏</button>
    <button onclick = "hilse()">🫵</button>
    `;
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
