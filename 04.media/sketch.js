let img;
let song;
let capture;

// Load the image.
function preload() {
  img = loadImage('kitten.jpg');
  song = loadSound("piano.wav");
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  capture= createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function draw(){
  background(200)
  // Draw the image.
  image(img, 0, 0, windowWidth, 500);
  image(capture,0, 0, 320, 240);
}

function mouseClicked(){
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  // play or loop the song
  if(!song.isPlaying()){
    song.loop();
    song.amp(0.2);
  }
}
  