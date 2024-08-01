function setup() {
  createCanvas(1000,800);
  background("blue");
}

function draw() {
  
  fill ("black");
  stroke("lightblue");
  if (mouseIsPressed)
  rect(mouseX,mouseY,50,50)
}
