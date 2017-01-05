var bubbles = []

function setup () {
  createCanvas(600,400)
}

function preload() {
  img = loadImage('images/bomb-300px.png') //---> image can't be loaded because chrome blocks directory images
}

function mousePressed () {
  var b = new Bubble(mouseX, mouseY)
  bubbles.push(b)
}

function draw () {
  background(0)
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display()
    bubbles[i].update()
  }
}
