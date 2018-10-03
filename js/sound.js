export default class Sound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("loop", true);
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.soundOn = false;
  }

  play() {
    this.sound.play();
  }

  stop() {
    this.sound.pause();
  }
}
