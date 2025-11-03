

let x, y, r, g, b;
let pupil= 100; //starting radius of black circle
let speed=2;

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw(){

  
  r= random(0,255);
  g=random(0,255);
  b=random(0,255);
  x=random(0,600)
  y=random(0,400)
  noStroke();
  fill(r,g,b, 100);
  circle(x,y,24);

  fill(255)
  circle(300,200,300);

  

  fill(95,98,14)
  circle(300,200,200);

  fill(95,98,14)
  circle(300,200,150);

  fill(0)
  circle(300,200,pupil);

  pupil+=speed;
  
  if (pupil> 150 || pupil< 50) {
    speed*=-1;
  }
}
