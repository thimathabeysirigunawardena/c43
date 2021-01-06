
var translate
var hand







function setup() {
  createCanvas(800,400);
  hand=createSprite(100,200,60,60)
  hr = hour();
  mn = minute();
  sc = second();
  hand=angleMode(DEGREES);
  

}

function draw() {
  background(0);  
  drawSprites();
  scAngle = map(sc, 0, 60, 0, 360);
  push();
  rotate(scAngle)
  stroke(255,4,0)
  strokeWeight(7);
  line(0,0,100,0)
  translate();
  pop();
  ellipse(width/2, height/2, d, d);
  
  
 
}
 
