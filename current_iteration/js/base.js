function Base (x, y, hp) {
  this.x = x; //x coordinates
  this.y = y; // y coordinates
  this.width = 40
  this.height = 30
  this.baseHp = hp

  //methods//
  this.show = function (r, g, b) {
    noStroke()
    // fill(r, g, b);
    rectMode(CENTER)
    rect(this.x, this.y, this.width, this.height);
    imageMode(CENTER)
    image(asteroid_img, this.x, this.y, 40, 40)
  }

  this.damage = function () {
    this.baseHp -= 1
  }
}
