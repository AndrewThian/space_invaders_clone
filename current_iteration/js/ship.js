function MainShip (hp) {
  this.x = width/2 + 5;
  this.y = height-30
  this.width = 30
  this.height = 30
  this.xdir = 0
  this.shipSpeed = 4
  this.shipHp = hp
  this.fire = 0
  this.shooting = 1
  this.poweredUpATT = false
  this.poweredUpMS = false
  this.isDestroyed = false

  //methods//
  this.show = function () {
    if (this.isDestroyed === false) {
      noFill()
      noStroke()
      rect(this.x, this.y, this.width, this.height);
      imageMode(CENTER)
      image(xwing_img, this.x, this.y, 40, 40)
    }
    if (this.shipHp < 3) {
      imageMode(CENTER)
      image(xwing_flame_gif, this.x, this.y + 2, 20, 20)
    }
    if (this.shipHp < 2) {
      imageMode(CENTER)
      image(xwing_flame_gif, this.x - 5, this.y - 10, 20, 20)
    }
  }

  this.setDir = function (dir) {
    this.xdir = dir
  }

  this.move = function () {
    this.x += this.xdir*this.shipSpeed
  }

  this.damage = function () {
    this.shipHp -= 1
  }

  this.engage = function (fire) {
    this.fire = fire
  }

  this.shoot = function () {
    this.shooting = this.shooting * this.fire
  }

  this.boostATT = function () {
    this.poweredUpATT = true
  }

  this.boostMS = function () {
    this.poweredUpMS = true
  }

  this.finish_animation = function () {
    if (this.y > -20) {
      this.y -= 5
    }
  }
}
