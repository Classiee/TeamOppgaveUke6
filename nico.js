let kulhetsFaktor = 0;
let updateImg;
let kompisDialog;
let bilDialog;
let exitText;
let overText;

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
  } else if(randomEncounter == 5){
    flatEarther();
  }
  else {
    bestemor();
  }
  updateView();
}

function jehovasVitne() {
  kompisDialog =`<div class="kompisDialog">Oh, hi there...Would you mind if I step inside your personal sphere to talk to you about the this li'l fancy book?"</div>`
  if (kulhetsFaktor <= 30) {
    updateImg ="IMG/carjehovasupgrade.jpg";
  } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
    updateImg ="IMG/carjehovasupgrade1.jpg";
  } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
    updateImg = "IMG/carjehovasupgrade2.jpg";
  }
  bilDialog = `
  <div class="bilDialog"> 
      <button onclick = "greetingJehova(1)">💸(Maybe he's on to something.)</button>
      <button onclick = "greetingJehova(2)">🧙‍♂️(This is one slick ass mf)</button>
      <button onclick = "greetingJehova(3)">🐔(Be the cock)</button>
  </div>`;

  function greetingFlat(alt) {
    if (alt == 1){
        bilDialog = `
        <div class="bilDialog">Hey,partner! Want to invest in a precision-laser?</div>`;
        kompisDialog = `
        <div class="kompisDialog>Sounds like a great investment!</div>`;
        overText = `
        <div class="gameOver">Excellent, you just scammed a scammer!<br> You earn 10 respect.</div>`;
        kulhetsFaktor += 15;
    }
    else if (alt == 2){
        kompisDialog = `
        <div class="kompisDialog">Let me elaborate about Pizzagate...</div>`;
        bilDialog = `
        <div class="bilDialog">Please don't...</div>`;
        overText = `
        <div class="gameOver">The Flat-Earther hands you a tinfoil-hat.<br> You lose 15 respect</div>`;
        kulhetsFaktor -= 5;    
    }
    else {
        overText = `
        <div class="gameOver">Too much information, your left hemisphere of your brain is f**cking toast! You'll be forever scarred. <br> You lose -25 respect!</div>`;
        kulhetsFaktor -= 10;
    }
}
}


function bestemor() {
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
      
}

function flatEarther() {
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
}

function greetingFlat(alt) {
    if (alt == 1){
        bilDialog = `
        <div class="bilDialog">Howdy,partner! Want to invest in a space-laser?</div>`;
        kompisDialog = `
        <div class="kompisDialog">Sounds like a great investment!</div>`;
        overText = `
        <div class="gameOver">Great job, you just scammed a scammer! You earn 10 respect.</div>`;
        kulhetsFaktor += 20;
    }
    else if (alt == 2){
        bilDialog = `
        <div class="bilDialog">Please don't...</div>`;
        kompisDialog = `
        <div class="kompisDialog">Let me elaborate about the lizardmen...</div>`;
        overText = `
        <div class="gameOver">The Flat-Earther hands you a tinfoil-hat.<br> You lose 15 respect</div>`;
        kulhetsFaktor -= 5;    
    }
    else {
      overText = `
        <div class="gameOver">The left hemisphere of your brain is f**cking toast! You'll be forever changed. <br> You lose -25 respect!</div>`;
        kulhetsFaktor -= 10;
    }
}

function greetingJehova(alt2){
    {
        if (alt2 == 1){
            kompisDialog = `
            <div class="kompisDialog">Can I offer you eternal redemption through a subscription paid service?</div>`;
            bilDialog = `
            <div class="bilDialog">I'm unsure...</div>`;
            overText = `
            <div class="gameOver">"Oh no, you are persuaded to cut them a check, now they hang around your ride in anticipation of more $. <br> You lose respect -20!"</div>`;
            kulhetsFaktor -= 10;
            }   
        else if (alt2 == 2){
            kompisDialog = `
            <div class="kompisDialog">May I offer you some holy water straight from the heavens, my good sir?</div>`;
            bilDialog = `
            <div class="bilDialog">I'm really confused...</div>`;
            overText = `
            <div class="gameOver">With a silver tongue and an enticing offer you are now forever indebted through various subscription models.<br> You lose 15 respect</div>`;
            kulhetsFaktor -= 5;
            }
    
        else {
            kompisDialog = `
            <div class="kompisDialog">May pray for you, mister?</div>`;
            bilDialog = `
            <div class="bilDialog">Sure thing...</div>`;
            overText = `
            <div class="gameOver">You make the most out of the situation and form a cult. <br> You earn 25 respect.</div>`;
            kulhetsFaktor += 15;
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
        <div class="gameOver">You stomp on the gas and deliver granny to the good lord. <br> You earn 20 respect.</div>`;
        kulhetsFaktor += 20;
        }

    else if (alt3 == 2){
        kompisDialog = `
        <div class="kompisDialog">Let me tell you a story, young one...</div>`;
        bilDialog = `
        <div class="bilDialog">Red light.</div>`;
        overText = `
        <div class="gameOver">You feel exsausted from listening to granny's lessons from life. <br> You lose 15 respect.</div>`;
        kulhetsFaktor -= 5;    
    }
    else {
        kompisDialog = `
        <div class="kompisDialog">These prices, the youth, things were different when I were young...</div>`;
        bilDialog = `
        <div class="bilDialog">Please don't...</div>`;
        overText = `
        <div class="gameOver">Granny yaps on and on about how things were better before, it takes forever and you were spotted by the hood. <br> You lose 25 respect.</div>`;
        kulhetsFaktor -= 10;
    }
}

