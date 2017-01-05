/* global $ requestAnimationFrame */

console.log('js started...')

// jQuery test //
$('#screen').click(function () {
  console.log('clicked')
})

var Game = function () {
  // select game canvas //
  var screen = document.getElementById('screen').getContext('2d')
  this.size = {
    x: screen.canvas.width,
    y: screen.canvas.height
  }

  this.bodies = createInvaders(this, 24).concat(new Player(this))

  var self = this
  var animate = function () {
    // requestAnimationFrame uses recursive function
    requestAnimationFrame(animate)
  }
  // calling my function to start //
  animate()
}

var Invader = function (game, coordinates) {
  this.game = game
  this.coordinates = coordinates
  this.size = { x: 15, y: 15 }
  // what's this?? //
  this.partrolX = 0
  this.speedX = 0.3
}

// create invaders constructor //
var createInvaders = function (game, enemyNumber) {
  var invaders = []
  for (var i = 0; i < enemyNumber; i++) {
    // x = invader x coordinates for every iteration
    // y = invader y coordinates for every iteration
    var x = 35 + (i % 8) * 30
    var y = 35 + (i % 3) * 30
    // creating new object invader into invaders array //
    invaders.push(new Invader(game, { x: x, y: y}))
  }
  // return an array of invaders //
  return invaders
}
