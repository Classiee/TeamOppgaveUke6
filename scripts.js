let bil = 

function Kompis() {
    const hilsninger = ["high five", "fist bump", "nikk"];
    this.riktigHilsen = hilsninger[Math.floor(Math.random() * hilsninger.length)];
    
    this.hils = function(hilsen) {
        if (hilsen === this.riktigHilsen) {
            if (bil.kulhet > 70) {
                // getElementById("result").innerHTML = "Du hilste riktig, og bilen din er blitt kul!";
                bil.kulhet += 10;
                
            }
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
}

function Kompis1() {
    
}

function Kompis2(){
    
}

function jehovasVitne(){
    
}

function bestemor(){
    
}

function flatEarther(){
    
}

function upgrade(){
    
}

function hilse(){
    
}

function randomEvent(){
    
}

function kjør(){
    
}

function skjulHilseValg(){
    
}

>>>>>>> Stashed changes
