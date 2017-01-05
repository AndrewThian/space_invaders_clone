function Bubble (x, y) {
  this.x = x
  this.y = y
  this.d = 20

  this.display = function () {
    // noStroke()
    // fill(255)
    image(img, this.x, this.y)
  }

  this.update = function () {
    this.x = this.x + random(1, -1)
    this.y = this.y + random(1, -1)
  }
}
