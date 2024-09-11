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
  
}

function jehovasVitne() {
  kompisDialog =`<div class="kompisDialog">Oh, hi there...Would you mind if I step inside your personal sphere to talk to you about the this li'l fancy book?"</div>`
  if (kulhetsFaktor <= 30) {
    updateImg ="IMG/carflatupgrade1.jpg";
  } else if (kulhetsFaktor >= 30 && kulhetsFaktor <= 60) {
    updateImg ="IMG/carflatupgrade1.jpg";
  } else if (kulhetsFaktor >= 60 && kulhetsFaktor <= 100) {
    updateImg = "IMG/carjehovas.jpg";
  }
  bilDialog = `
  <div class="bilDialog"> 
      <button onclick = "greetingJehova(this)">💸(Maybe he's on to something.)</button>
      <button onclick = "greetingJehova(this)">🧙‍♂️(This is one slick ass mf)</button>
      <button onclick = "greetingJehova(this)">🐔(Be the cock)</button>
  </div>`;
  updateView();
}
  function greetingFlat(alt) {
    if (alt == 1){
        bilDialog = `
        <div class="bilDialog">Hey,partner! Want to invest in a precision-laser?</div>`;
        kompisDialog = `
        <div class="kompisDialog>Sounds like a great investment!</div>`;
        exitText = `
        <div class="gameOver">Excellent, you just scammed a scammer!<br> You earn 10 respect.</div>`;
        kulhetsFaktor += 10;
    }
    else if (alt == 2){
        kompisDialog = `
        <div class="kompisDialog">Let me elaborate about Pizzagate...</div>`;
        bilDialog = `
        <div class="bilDialog">Please don't...</div>`;
        exitText = `
        <div class="gameOver">The Flat-Earther hands you a tinfoil-hat.<br> You lose 15 respect</div>`;
        kulhetsFaktor -= 15;    
    }
    else {
        exitText = `
        <div class="gameOver">Too much information, your left hemisphere of your brain is f**cking toast! You'll be forever scarred. <br> You lose -25 respect!</div>`;
        kulhetsFaktor -= 25;
    }
    updateView();
}


function jehovasPenalty(){
    kompisDialog = `
    <div class="kompisDialog">"Oh no, you are persuaded to cut them a check, now they hang around your ride in anticipation of more $. <br> You lose respect -15!"</div>`;
    if (kulhetsFaktor > 0) {
        kulhetsFaktor -= 15;
    }
    updateView();
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
          <button onclick = "greetingBestemor(this)">🚗(Gas,gas,gas)</button>
          <button onclick = "greetingBestemor(this)">👵(Listen to a story)</button>
          <button onclick = "greetingBestemor(this)">😴(Trip down memory lane)</button>
      </div>`
      updateView();
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
          <button onclick = "greetingFlat(this)">🕵️‍♂️(Make a deal)</button>
          <button onclick = "greetingFlat(this)">🐸(Tell me more)</button>
          <button onclick = "greetingFlat(this)">🧠(?)</button>
      </div>`;
      updateView();
}

function greetingFlat(alt) {
    if (alt == 1){
        bilDialog = `
        <div class="bilDialog">Howdy,partner! Want to invest in a space-laser?</div>`;
        kompisDialog = `
        <div class="kompisDialog">Sounds like a great investment!</div>`;
        exitText = `
        <div class="gameOver">Great job, you just scammed a scammer! You earn 10 respect.</div>`;
        kulhetsFaktor += 10;
    }
    else if (alt == 2){
        bilDialog = `
        <div class="bilDialog">Please don't...</div>`;
        kompisDialog = `
        <div class="kompisDialog">Let me elaborate about the lizardmen...</div>`;
        exitText = `
        <div class="gameOver">The Flat-Earther hands you a tinfoil-hat.<br> You lose 15 respect</div>`;
        kulhetsFaktor -= 15;    
    }
    else {
        exitText = `
        <div class="gameOver">The left hemisphere of your brain is f**cking toast! You'll be forever changed. <br> You lose -25 respect!</div>`;
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
            exitText = `
            <div class="gameOver">"Oh no, you are persuaded to cut them a check, now they hang around your ride in anticipation of more $. <br> You lose respect -20!"</div>`;
            kulhetsFaktor -= 20;
            }   
        else if (alt2 == 2){
            kompisDialog = `
            <div class="kompisDialog">May I offer you some holy water straight from the heavens, my good sir?</div>`;
            bilDialog = `
            <div class="bilDialog">I'm really confused...</div>`;
            exitText = `
            <div class="gameOver">With a silver tongue and an enticing offer you are now forever indebted through various subscription models.<br> You lose 15 respect</div>`;
            kulhetsFaktor -= 15;
            }
    
        else {
            kompisDialog = `
            <div class="kompisDialog">May pray for you, mister?</div>`;
            bilDialog = `
            <div class="bilDialog">Sure thing...</div>`;
            exitText = `
            <div class="gameOver">You make the most out of the situation and form a cult. <br> You earn 25 respect.</div>`;
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
        exitText = `
        <div class="gameOver">You stomp on the gas and deliver granny to the good lord. <br> You earn 20 respect.</div>`;
        kulhetsFaktor += 20;
        }

    else if (alt3 == 2){
        kompisDialog = `
        <div class="kompisDialog">Let me tell you a story, young one...</div>`;
        bilDialog = `
        <div class="bilDialog">Red light.</div>`;
        exitText = `
        <div class="gameOver">You feel exsausted from listening to granny's lessons from life. <br> You lose 15 respect.</div>`;
        kulhetsFaktor -= 15;    
    }
    else {
        kompisDialog = `
        <div class="kompisDialog">These prices, the youth, things were different when I were young...</div>`;
        bilDialog = `
        <div class="bilDialog">Please don't...</div>`;
        exitText = `
        <div class="gameOver">Granny yaps on and on about how things were better before, it takes forever and you were spotted by the hood. <br> You lose 25 respect.</div>`;
        kulhetsFaktor -= 25;
    }
    updateView();
}

