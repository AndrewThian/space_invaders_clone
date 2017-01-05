//---------------------- clicked on Object --------------//
// function Bubble (x, y) {
//   this.x = x
//   this.y = y
//   this.diameter = 30
//   this.col = color(255,100)
//
//   this.display = function () {
//     stroke(255);
//     fill(this.col)
//     ellipse(this.x, this.y, this.diameter, this.diameter);
//   }
//
//   this.bubbleClicked = function () {
//     var d = dist(mouseX, mouseY, this.x, this.y)
//     if (d < this.diameter/2) {
//     this.col = color(random(0, 255), random(0, 255), random(0, 255))
//     }
//   }
//
//   this.move = function () {
//     this.x = this.x + random(1, -1);
//     this.y = this.y + random(1, -1);
//   }
// }
//--------------------- second ----------------------//
function Bubble (x, y) {
  this.x = x
  this.y = y
  this.lifespan = 255;

  this.display = function () {
    // stroke(255)
    noStroke()
    fill(255, this.lifespan)
    ellipse(this.x, this.y, 50, 50)
  }

  this.update = function () {
    this.x = this.x + random (-1, 1)
    this.y = this.y + random (-1, 1)
    this.lifespan = this.lifespan - 1
  }

  this.isFinished = function () {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }
}
