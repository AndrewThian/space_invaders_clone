function Enemy (x, y, speed) {
  this.x = x; //x coordinates
  this.y = y; // y coordinates
  this.width = 30
  this.height = 30
  this.toDelete = false

  this.xdir = speed // enemy movements factor

  //methods//
  this.show = function () {
    noFill()
    noStroke()
    rectMode(CENTER)
    rect(this.x, this.y, this.width, this.height);
    imageMode(CENTER)
    image(tiefighter_img, this.x, this.y, 30, 30)
  }

  this.explode = function () {
    this.toDelete = true
  }

  this.move = function () {
    this.x += this.xdir
  }

  this.shiftDown = function () {
    this.xdir *= -1
    this.y += this.height
  }

  this.shoot = function () {
    this.toShoot = true
  }
}
