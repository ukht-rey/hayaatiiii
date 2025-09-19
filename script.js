document.getElementById("envelope").addEventListener("click", function() {
  this.querySelector(".flap").style.transform = "rotateX(-180deg)";
  this.querySelector(".card").style.transform = "rotateY(180deg)";
});

document.getElementById("playMusic").addEventListener("click", function() {
  let music = document.getElementById("music");
  if (music.paused) {
    music.play();
    this.innerText = "pwoz.";
  } else {
    music.pause();
    this.innerText = "pwessyy";
  }
});
