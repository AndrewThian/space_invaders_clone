// var b1;
// var b2;
//
//
// function setup () {
//   createCanvas (600, 400)
//   b1 = new Bubble(250, 200);
//   b2 = new Bubble(350, 200);
// }
//
// function draw() {
//   background(0)
//
//   b1.update()
//   b2.update()
//   b1.display()
//   b2.display()
//
//   if (b1.intersects(b2)) {
//     b1.changeColor()
//     b2.changeColor()
//   }
// }
//------------------- part2 -----------------------//
var bubbles = []


function setup () {
  createCanvas (600, 400)
  for (var i = 0; i < 400; i++) {
    bubbles[i] = new Bubble(random(width), random(height))
  }
}

function draw() {
  background(0)
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update()
    bubbles[i].display()
    for (var j = 0; j < bubbles.length; j++) {
      if (i !== j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
      }
    }
  }
}
