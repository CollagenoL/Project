let img; 
let imgX = 200, imgY = 150; 
let bgColor = 240; 

function setup() {
  createCanvas(400, 400);
  background(bgColor);


  fill(200, 160, 100);
  rect(0, 300, 400, 100);


  fill(50, 150, 255);
  ellipse(200, 250, 80, 120);


  fill(255, 0, 0);
  ellipse(200, 180, 50, 50);
  ellipse(170, 200, 40, 40); 
  ellipse(230, 200, 40, 40);

  stroke(0, 150, 0);
  strokeWeight(5);
  line(200, 250, 200, 180);
  line(200, 250, 170, 200);
  line(200, 250, 230, 200);

  fill(255, 255, 255);
  ellipse(300, 350, 80, 30);

  fill(255, 0, 0);
  ellipse(300, 330, 40, 40);
  fill(0, 150, 0);
  ellipse(315, 315, 15, 10);


  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/6/68/Solid_black.png');
}

function draw() {
  background(bgColor);


  fill(200, 160, 100);
  rect(0, 300, 400, 100);

  fill(50, 150, 255);
  ellipse(200, 250, 80, 120);

  fill(255, 0, 0);
  ellipse(200, 180, 50, 50);
  ellipse(170, 200, 40, 40);
  ellipse(230, 200, 40, 40);

  stroke(0, 150, 0);
  strokeWeight(5);
  line(200, 250, 200, 180);
  line(200, 250, 170, 200);
  line(200, 250, 230, 200);

  fill(255, 255, 255);
  ellipse(300, 350, 80, 30);

  fill(255, 0, 0);
  ellipse(300, 330, 40, 40);
  fill(0, 150, 0);
  ellipse(315, 315, 15, 10);


  image(img, imgX, imgY, 50, 50);
}


function mouseClicked() {
  imgX = random(0, width - 50); 
  imgY = random(0, height - 50);
}


function keyPressed() {
  if (key === 'c') {
    bgColor = color(random(255), random(255), random(255));
  }
}