
let happy=true;//track whether the emoji is smiling or frowning.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  
  //rectangles

  fill(255, 215, 0);
  rect(40, 40, 150, 300);
  fill(173,216,230, 200);
  rect(60, 60, 130, 250);

  
  //face
  fill(255, 255, 0);
 circle(200, 200, 200); 
  
  
  //eyes
  fill(255,255,255)
  circle(150, 180, 50);
  circle(250, 180, 50);
  
  fill(0,0,0)
  circle(150, 180, 10);
  circle(250, 180, 10);
  
  //mouth
  noFill();
stroke(0);
strokeWeight(5);
  
  if(happy) {
arc(200, 220, 100, 50, 0, PI);// smile
  }else {
    
arc(200, 250, 100, 50, PI, 0);// frown
  }
    
}
  
// this function must be outside draw()
  

function mousePressed() {
  happy= !happy; // toggle between smile and frown on click

 
  
  
}

// emoji of "self reflcetion",users can choose whether to have the emoji smile or frown depending on the context.