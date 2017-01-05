/*  global $ */
//
// var KeyController = function () {
//   this.KEYS = {
//     LEFT: 37,
//     RIGHT: 39,
//     Space: 32
//   }
var shipLocationX = 0
var shipLocationY = 0

function parse (selector, cssProperty) {
  return parseInt(selector.css(cssProperty).slice(0, -2))
}

console.log('js is running..')

console.log('----------- ship logic -----------')
$('#spaceship').click(function () {
  console.log('I am good')
})

$('body').keydown(function (e) {
  if (e.which === 37) {
    console.log('LEFT_ARROW has been pushed!')
    $('#spaceship').css({
      left: '-=50px'
    }, 100)
    console.log('Ship moved 50px to the left')
    shipLocationX = parse($('#spaceship'), 'left')
    console.log(`coordinates are x: ${shipLocationX}, y: ${shipLocationY}` + '\n-------------------------')
  } else if (e.which === 39) {
    console.log('RIGHT_ARROW has been pushed!')
    $('#spaceship').css({
      left: '+=50px'
    }, 100)
    console.log('Ship moved 50px to the right')
    shipLocationX = parse($('#spaceship'), 'left')
    console.log(`coordinates are x: ${shipLocationX}, y: ${shipLocationY}` + '\n-------------------------')
  }
})

var bulletCounter = 0
var bulletDelete = 0

function createBullets (e) {
  var bullet = $('<div>').attr({
    class: 'bullet',
    id: bulletCounter
  })
  if (e.which === 32) {
    console.log('spacebar has been pushed!')
    $('.container').append(bullet)
    console.log(`this is the ${bulletCounter} bullet`)
    $('#' + bulletCounter).css({
      left: 500 + shipLocationX
    })
    var interval = setInterval(function () {
      $('.bullet').css({
        top: '-=5px'
      })
      if (parse($('.bullet'), 'top') === -565) {
        clearInterval(interval)
        $('#' + bulletDelete).remove()
        console.log(' \u00D7 \u00D7 \u00D7 bullet removed!! \u00D7 \u00D7 \u00D7 ')
        bulletDelete++
        $('.bullet').css({
          top: '0px'
        })
      }
    }, 1)
    bulletCounter++
    console.log('added 1 to bullet counter' + '\n-------------------------')
  }
}

var box = $('<div>').attr({
  class: 'alien'
})

$('.container').append(box)

$('body').keydown(function (e) {
  createBullets(e)
})
