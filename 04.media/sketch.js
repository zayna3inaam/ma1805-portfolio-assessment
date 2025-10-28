let img; // Declare variable 'img'.

let hum;
let capture;
let video;


function preload() {
  img = loadImage('Antenna.jpg'); // Load image
   hum = loadSound("humm.wav");
  video=createVideo('TheSea.mov')
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
   capture.hide();
}

function draw() {
  // Display image at actual size at x/y (0,0)
  image(img, 0, 0);
  // Displays half size image at x/y (0, 100)
  //image(img, 0, 100, img.width/2, img.height/2);

 // image(capture,200,200, 320, 240)
  image(video, 100, 0, 350, 240);

}

function mouseClicked(){
  hum.loop();
  hum.amp(0.2); 
  video.loop(0.2);

  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}