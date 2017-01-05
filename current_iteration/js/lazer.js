function Lazer (x, y) {
  this.x = x; //x coordinates
  this.y = y; // y coordinates
  this.width = 3
  this.height = 20
  this.toDelete = false
  this.lazerSpeed = 3

  //methods//
  // show //
  this.show = function (r, g, b) {
    fill(r, g, b);
    rect(this.x, this.y, this.width, this.height);
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

  this.bullet = function (bulletSize) {
    this.width = bulletSize
  }

  this.disappear = function () {
    this.toDelete = true
  }

  this.move = function (dir) {
    this.y = this.y - this.lazerSpeed * dir // moves lazer up or down
  }
}
