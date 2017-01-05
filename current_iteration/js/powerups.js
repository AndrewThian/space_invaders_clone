function PowerUp () {
  this.x = random(20, width - 20); //x coordinates
  this.y = 20; // y coordinates
  this.width = 20
  this.height = 20
  this.toDelete = false

  //methods//
  this.show = function (img) {
    noStroke()
    noFill()
    rectMode(CENTER)
    rect(this.x, this.y, this.width, this.height);
    imageMode(CENTER)
    image(img, this.x, this.y, 40, 40)
  }

  // collision detection //
  this.collides = function (object) {
    var d = dist(this.x, this.y, object.x, object.y)
    if (d < this.width + object.width/2 && d < this.height + object.height*2) {
      return true
    } else {
      return false
    }
  }

  this.explode = function () {
    this.toDelete = true
  }

  this.move = function () {
    this.x = this.x + random(-1, 1)
    this.y = this.y + random(-1, 1) + 2
  }

  this.disappear = function () {
    this.toDelete = true
  }
}
