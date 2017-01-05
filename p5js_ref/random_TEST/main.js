var spot = {
  x: 100,
  y: 50
}

var col = {
  r: 0,
  g: 0,
  b: 0,
  a: 0
}

function setup () {
  createCanvas(600,400);
  background(0);
}

function draw () {
  col.r = random (0, 255);
  col.g = 0;
  col.b = random(0, 150);
  col.a = random(0, 100);
  spot.x = random(0, width);
  spot.y = random(0, height);
  noStroke();
  fill(col.r, col.g, col.b, col.a);
  ellipse(spot.x, spot.y, 25, 25);
}
