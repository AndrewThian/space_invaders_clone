/* global $ requestAnimationFrame Image */

// test js and jquery
// console.log('js running...')
//
// $('#cannon').click(function () {
//   console.log('jQuery running')
// })

var keydowns = {
  left: false,
  right: false,
  space: false
}

// checking keydown //
$('body').on('keydown', function (e) {
  switch (e.keyCode) {
    case 37:
      keydowns.left = true
      break
    case 39:
      keydowns.right = true
      break
    case 32:
      keydowns.space = true
      break
  }
})

// checking keyup //
$('body').on('keyup', function (e) {
  switch (e.keyCode) {
    case 37:
      keydowns.left = false
      break
    case 39:
      keydowns.right = false
      break
    case 32:
      keydowns.space = false
      break
  }
})

function createAliens () {
  var aliens = ['images/Alien_2_Enlarged.png', 'images/Alien_3_Enlarged.png', 'images/Alien_4_Enlarged.png']
  $(aliens).map(function (index, aliens) {
    // create new image tag
    var image = new Image()
    // img tag source
    image.src = aliens
    $('#game').append(image)
  })
}

// animate function //
function draw () {
  // similar to setTimeout for animation
  requestAnimationFrame(draw)
  var moveDistance = 3
  var left = $('#cannon').position().left

  // bullet animation //
  if ($('#bullet').length > 0) {
    $('#bullet').css({
      top: $('#bullet').position().top - 3
    })
    // checking bullet position //
    if ($('#bullet').position().top < 0) {
      $('#bullet').remove()
    }
  }
  // if keydowns === true
  // ship movements //
  if (keydowns.left) {
    $('#cannon').css({left: left - moveDistance})
  }
  if (keydowns.right) {
    $('#cannon').css({left: left + moveDistance})
  }
  if (keydowns.space) {
    if ($('#bullet').length === 0) {
      $('#game').append('<div id="bullet">')
      $('#bullet').css({
        left: left + $('#cannon').width() / 2 - 2.5,
        top: ($('#cannon').position().top + 10) - $('#cannon').height()
      })
    }
  }
}

$(function () {
  createAliens()
  draw()
})
