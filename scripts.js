let bil;
let kulhetsFaktor = 0;
let updateImg;
let kompisDialog;
let bilDialog;
let exitText;
let overText;

updateView();
function updateView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    <div>
        <div class="progressBar">
            <div style="width: ${kulhetsFaktor}%" class="updateBar"><strong>${kulhetsFaktor}%</strong></div>
        </div>
        <div class="text">😎</div>
            <img class="image" src="${updateImg ?? 'IMG/carempty.jpg'}"/>
            ${kompisDialog ?? ''}
            ${bilDialog ?? ''}
            ${exitText ?? ''}
            ${overText ?? ''}
        </div>
    `;
    if (kulhetsFaktor >= 100) {
        gameWon();
    } else if (kulhetsFaktor < 0) {
        gameOver();
    }
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
            <button class="gameOverBtn" onclick="flatEarther()">Start</button></div>`;
    kompisDialog = '';
    kulhetsFaktor = 20;
    bilDialog = '';
    updateView();
}

function jehovasVitne() {
    exitText = '';
    kompisDialog =`<div class="kompisDialog">Oh, hi there...Would you mind if I step inside your personal sphere to talk to you about the this li'l fancy book?"</div>`
    if (kulhetsFaktor <= 30) {
        updateImg = "IMG/carjehovas.jpg";
    } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
        updateImg ="IMG/carjehovasupgrade1.jpg";
    } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
        updateImg ="IMG/carjehovasupgrade2.jpg";
    }
    bilDialog = `
    <div class="bilDialog"> 
        <button onclick = "greetingJehova(1)">💸(Maybe he's on to something.)</button>
        <button onclick = "greetingJehova(2)">🧙‍♂️(This is one slick ass mf)</button>
        <button onclick = "greetingJehova(3)">🐔(Be the cock)</button>
    </div>`;
    updateView();
  }
  
  function greetingFlat(alt) {
      if (alt == 1){
          bilDialog = `
          <div class="bilDialog">Howdy,partner! Want to invest in a space-laser?</div>`;
          kompisDialog = `
          <div class="kompisDialog">Sounds like a great investment!</div>`;
          overText = `
          <div class="overText">Great job, you just scammed a scammer! You earn 10 respect.</div>`;
          kulhetsFaktor += 10;
      }
      else if (alt == 2){
          bilDialog = `
          <div class="bilDialog">Please don't...</div>`;
          kompisDialog = `
          <div class="kompisDialog">Let me elaborate about the lizardmen...</div>`;
          overText = `
          <div class="overText">The Flat-Earther hands you a tinfoil-hat.<br> You lose 15 respect</div>`;
          kulhetsFaktor -= 15;    
      }
      else {
        overText = `
          <div class="overText">The left hemisphere of your brain is f**cking toast! You'll be forever changed. <br> You lose -25 respect!</div>`;
          kulhetsFaktor -= 25;
      }
      updateView();
  }
  function greetingJehova(alt2){
    {
        if (alt2 == 1){
            kompisDialog = `
            <div class="kompisDialog">Can I offer you eternal redemption through a subscription paid service?</div>`;
            bilDialog = `
            <div class="bilDialog">I'm unsure...</div>`;
            overText = `
            <div class="overText">"Oh no, you are persuaded to cut them a check, now they hang around your ride in anticipation of more $. <br> You lose respect -20!"</div>`;
            kulhetsFaktor -= 10;
            }   
        else if (alt2 == 2){
            kompisDialog = `
            <div class="kompisDialog">May I offer you some holy water straight from the heavens, my good sir?</div>`;
            bilDialog = `
            <div class="bilDialog">I'm really confused...</div>`;
            overText = `
            <div class="overText">With a silver tongue and an enticing offer you are now forever indebted through various subscription models.<br> You lose 15 respect</div>`;
            kulhetsFaktor -= 15;
            }
    
        else {
            kompisDialog = `
            <div class="kompisDialog">May pray for you, mister?</div>`;
            bilDialog = `
            <div class="bilDialog">Sure thing...</div>`;
            overText = `
            <div class="overText">You make the most out of the situation and form a cult. <br> You earn 25 respect.</div>`;
            kulhetsFaktor += 25;
        }
    }
    updateView();
}
function greetingBestemor(alt3) {
    if (alt3 == 1){
        kompisDialog = `
        <div class="kompisDialog">🤬🤬🤬</div>`;
        bilDialog = `
        <div class="bilDialog">Better collect that life insurance💰</div>`;
        overText = `
        <div class="overText">You stomp on the gas and deliver granny to the good lord. <br> You earn 20 respect.</div>`;
        kulhetsFaktor += 20;
        }

    else if (alt3 == 2){
        kompisDialog = `
        <div class="kompisDialog">Let me tell you a story, young one...</div>`;
        bilDialog = `
        <div class="bilDialog">Red light.</div>`;
        overText = `
        <div class="overText">You feel exsausted from listening to granny's lessons from life. <br> You lose 15 respect.</div>`;
        kulhetsFaktor -= 15;    
    }
    else {
        kompisDialog = `
        <div class="kompisDialog">These prices, the youth, things were different when I were young...</div>`;
        bilDialog = `
        <div class="bilDialog">Please don't...</div>`;
        overText = `
        <div class="overText">Granny yaps on and on about how things were better before, it takes forever and you were spotted by the hood. <br> You lose 25 respect.</div>`;
        kulhetsFaktor -= 25;
    }
    updateView();
}

  function bestemor() {
    exitText = '';
    if (kulhetsFaktor <= 30) {
        updateImg = "IMG/cargrandma.jpg";
      } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
        updateImg = "IMG/cargrandmaupgrade1.jpg";
      } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
        updateImg = "IMG/cargrandmaupgrade2.jpg";
      }
      kompisDialog = `
      <div class="kompisDialog">I'm off my medication.</div>`;
      bilDialog = `
      <div class="bilDialog"> 
          <button onclick = "greetingBestemor(1)">🚗(Gas,gas,gas)</button>
          <button onclick = "greetingBestemor(2)">👵(Listen to a story)</button>
          <button onclick = "greetingBestemor(3)">😴(Trip down memory lane)</button>
      </div>`
      updateView();
}

function flatEarther() {
    exitText = '';
    if (kulhetsFaktor <= 30) {
        updateImg = "IMG/carflat.jpg";
      } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
        updateImg = "IMG/carflatupgrade1.jpg";
      } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
        updateImg = "IMG/carflatupgrade2.jpg";
      }
      kompisDialog = `
      <div class="kompisDialog">Well hello there, I'm from the Flat-earth society! Care to engage in a rational discussion about 5G, vaccines and the lizardpeople?;</div>`;
      bilDialog = `
      <div class="bilDialog"> 
          <button onclick = "greetingFlat(1)">🕵️‍♂️(Make a deal)</button>
          <button onclick = "greetingFlat(2)">🐸(Tell me more)</button>
          <button onclick = "greetingFlat(3)">🧠(?)</button>
      </div>`;
      updateView();
}

