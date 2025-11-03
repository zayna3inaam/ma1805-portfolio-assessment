let img;
let song;

// Load the image.
function preload() {
  img = loadImage('kitten.jpg');
  song = loadSound("piano.wav");
}

function setup(){
  createCanvas(windowWidth,windowHeight)
}

function draw(){
  background(200)
  // Draw the image.
  image(img, 0, 0, width, 500);
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
  