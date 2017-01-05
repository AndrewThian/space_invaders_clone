var r = 0;
var g = 0
var b = 0;


function setup () {
  createCanvas(600, 400)
}

function draw () {
  r = map(mouseX, 0, 600, 0, 255)
  g = map(mouseY, 0, 600, 255, 0)
  b = map(mouseX, 0, 600, 255, 0)
  background(r, g, b)
  fill(46, 208, 187)
  ellipse(mouseX, mouseY, 60, 60)
}
