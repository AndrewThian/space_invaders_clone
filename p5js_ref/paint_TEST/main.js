function setup () {
  createCanvas(200, 200)
  background(100,100,100)
}

function draw () {
  // background(250, 250, 100)
  rect(mouseX, mouseY, 20, 20)
  fill(250, 250, 200, 50)
  noStroke()
}

function mouseClicked () {
  background(100,100,100)
}
