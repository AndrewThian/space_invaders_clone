function setup () {
  createCanvas(600, 400)
}

function draw () {
  background(50)
  lollipop(100, 100, 50)
  lollipop(200, 100, 100)
}

function lollipop (x, y, diameter) {
  fill(0, 255, 255)
  rect(x - 5, y, 10, 150)

  fill(0, 255, 0)
  ellipse(x, y, diameter)
}
