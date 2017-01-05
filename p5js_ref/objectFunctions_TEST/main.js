//-------------------- second -------------------//
// var bubbles = [];
//
// function setup () {
//   createCanvas(600, 400);
//   for (var i = 0; i < 20; i++) {
//     bubbles[i] = new Bubble (random(0, width),random(0, height));
//   }
// }
//
// function draw () {
//   background(0);
//   for (var i = 0; i < bubbles.length; i++) {
//     bubbles[i].move();
//     bubbles[i].display();
//   }
//
//   if (bubbles.length  > 50) {
//     bubble.splice(0, 1);
//   }
// }
//
// function mousePressed () {
//   bubbles.push(new Bubble (mouseX, mouseY))
// }
//-------------------- second -------------------//
// var bubbles = []
//
// function setup () {
//   createCanvas(600,400);
//   for (var i = 0; i < 5; i++) {
//     var x = random(width)
//     var y = random(height)
//     bubbles.push(new Bubble(x, y))
//   }
// }
//
// function mousePressed () {
//   for (var i = 0; i < bubbles.length; i++) {
//     bubbles[i].bubbleClicked()
//   }
// }
//
// function draw () {
//   background(0)
//   for (var i = 0; i < bubbles.length; i++) {
//     bubbles[i].display()
//     bubbles[i].move()
//   }
// }
//
// console.log(bubbles)
//-------------------- second -------------------//
var bubbles = []

function setup () {
  createCanvas(600, 400)
}

function mouseDragged () {
  var b = new Bubble(mouseX, mouseY)
  bubbles.push(b);
}

function draw () {
  background(0)
  for (var i = bubbles.length -1; i >= 0; i--) {
    bubbles[i].display()
    bubbles[i].update()
    if (bubbles[i].isFinished()) {
      bubbles.splice(i, 1)
    }
  }
}
