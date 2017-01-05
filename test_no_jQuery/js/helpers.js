// Helper functions

// Screen constructor
function Screen (width, height) {
  this.canvas = document.createElement('canvas')
  // setting canvas height and width
  this.canvas.width = this.width = width
  this.canvas.height = this.height = height
  this.context = this.canvas.getContext('2d')

  document.body.appendChild(this.canvas)
}
Screen.prototype.drawSprite = function (sp, x, y) {
  this.context.drawImage(sp.img, sp.x, sp.y, sp.w, sp.h, x, y, sp.w, sp.h)
}

// Sprite constructor
function Sprite (img, x, y, w, h) {
  this.img = img
  this.x = x
  this.y = y
  this.w = w
  this.h = h
}

// InputHandler

function InputHandler () {
  this.down = {}
  this.pressed = {}

  var _this = this
  document.addEventListener('keydown', function (evt) {
    _this.down[evt.keyCode] = true
  })
  document.addEventListener('keyup', function (evt) {
    delete _this.down[evt.keyCode]
    delete _this.pressed[evt.keyCode]
  })
}

InputHandler.prototype.isDown = function (keycode) {
  return this.down[code]
}

InputHandler.prototype.isPressed = function (keycode) {
  if (this.pressed[code]) {
    return false
  }
}
