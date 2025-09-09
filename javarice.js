function start() {
    const bgmusic = document.getElementById('bgmusic');
       bgmusic.play()
    ;

    bgmusic.addEventListener("play", function() {
        const elements = document.querySelectorAll("*");
        elements.forEach((element) => {
            element.style.animationPlayState = "running,running";  // start them animatins
        });
    });
}

function mutesound() {
    const bgmusic = document.getElementById('bgmusic');
    bgmusic.muted = !bgmusic.muted;
}


document.querySelector('.soundbreh').addEventListener('click', function() {
    const button = this;
    if (button.style.backgroundImage == 'url("mute/muted.gif")') {
        button.style.backgroundImage = 'url("mute/unmuted.gif")';
    } else {
        button.style.backgroundImage = 'url("mute/muted.gif")';
    }
});
const elements = document.querySelectorAll('label, button');
elements.forEach(element => {
    element.addEventListener('click', clicksoundlol);
});


function clicksoundlol() {
    const interactionSound = new Audio('sounds/clicksound.mp3');
    interactionSound.play();
}


const row = document.querySelector('.maincont');
row.addEventListener('scroll', function() {
    const scrollLeft = row.scrollLeft;
    row.style.backgroundPosition = `${-scrollLeft * 0.1}px center`; 
    });


const gifMap = {
  s1: "images/testgif.gif",  
  s3: "images/testgif2.gif",
  s5: "images/train.gif",
  s7: "images/testgif5.gif",
};

const boxes = document.querySelectorAll(".s1, .s3, .s5, .s7");
const gifs = document.querySelectorAll(".s1gif, .s3gif, .s5gif, .s7gif");

gifs.forEach(gif => gif.src = ""); // Start in a paused state

boxes.forEach(box => {
  box.addEventListener("animationstart", () => {
    playGif(box); 
  });

  box.addEventListener("animationend", () => {
    pauseGif(box); 
  });
});
function playGif(box) {
  let gifClass, gifSrc;

  if (box.classList.contains("s1")) {
    gifClass = "s1gif";
    gifSrc = gifMap.s1;
  } else if (box.classList.contains("s3")) {
    gifClass = "s3gif";
    gifSrc = gifMap.s3;
  } else if (box.classList.contains("s5")) {
    gifClass = "s5gif";
    gifSrc = gifMap.s5;
  } else if (box.classList.contains("s7")) {
    gifClass = "s7gif";
    gifSrc = gifMap.s7;
  }
  const gif = document.querySelector(`.${gifClass}`);
  if (gif) gif.src = gifSrc; 
}

 function pauseGif(box) {
  let gifClass;

  if (box.classList.contains("s1")) {
    gifClass = "s1gif";
  } else if (box.classList.contains("s3")) {
    gifClass = "s3gif";
  } else if (box.classList.contains("s5")) {
    gifClass = "s5gif";
  } else if (box.classList.contains("s7")) {
    gifClass = "s7gif";
  }
  const gif = document.querySelector(`.${gifClass}`);
  if (gif) gif.src = "";
}