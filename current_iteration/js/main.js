//============================ global variables ============================//
var ship
var power_up = [] // attack speed
var power_up2 = [] // ship speed
var enemy_arr = []
var enemy_arr2 = []
var enemy_arr3 = []
var number_of_invaders = 13
var enemy_spacing = 60
var lazer = []
var enemy_shots_tick = 0
var player_shots_tick = 40
var power_up_counter = 0
var powerATS_up_fell = false
var powerMS_up_fell = false
var power_duration = 0
var powerup_ats_duration = 200
var powerup_ms_duration = 200
var enemy_lazer = []
var bullet_size = 2
var base_arr = []
var ship_hp = 3
var base_hp = 3
var game_over = false
var player_win = false
var rate_of_fire = 40 // lower number is faster rate
var enemy_rate_of_fire = 80 // lower number is faster rate
var enemy_speed = 1/2 // lower number is slower movement
var total_enemy = number_of_invaders*3
var enemy_left

// image variables //
var xwing_img
var xwing_flame_gif
var tiefighter_img
var asteroid_img
var powerup1_img
var powerup2_img

console.log('is game over?? ' + game_over)

var button_start
var button_refresh
var score
var powerup_time
var starting_screen
var win_statment
var lose_statement
var mission_briefing
var title
var easy_img
var medium_img
var hard_img

var start_song
var imperial_song

//============================ helper functions ============================//
function preload () {
  imperial_song = loadSound('audio/imperial march.mp3')
}
// push new ship into variable //
function create_ship(hp) {
  if (game_over === false) {
    ship = new MainShip(hp)
    console.log('created new ship')
  }
}

// push new enemy in array //
function create_enemy(arr, enemyAmount, dist, speed, arrayNumber) {
  for (var i = 0; i < enemyAmount; i++) {
    arr[i] = new Enemy(i * enemy_spacing + 115, dist, speed) // dist is the height of which it's drawn
  }
  console.log('created ' + arr.length + ' enemies in array ' + arrayNumber)
  console.log('------- end report -------');
}

// push new base into given array //
function create_base(arr, baseNum, hp) {
  for (var i = 0; i < baseNum; i++) {
    arr[i] = new Base(i*width/5 + 93, height - 70, hp)
  }
}

// draw enemy on canvas //
function enemy_draw (arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].show()
    arr[i].move()
    if (arr[i].y > height - 100) {
      game_over = true
      ship.isDestroyed = true
    }
  }
}

// draw base on canvas //
function base_draw (arr, r, g, b) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].show(0, 255, 0)
  }
}

// collision check //
function checkCollision_enemy (lazer_value, secondObject) {
  for (var i = 0; i < secondObject.length; i++) {
    // collision logic for ship lazer to enemy //
    if (lazer_value.collides(secondObject[i])) {
      console.log('HITTTT!!!!')
      secondObject[i].explode()
      lazer_value.disappear()
    }
    // delete logic for enemy by splice //
    if (secondObject[i].toDelete) {
      secondObject.splice(i, 1)
      console.log('!!!DDDestroyed!!!')
    }
  }
}

// check base collision //
function checkCollision_base (lazer_value, secondObject) {
  for (var i = 0; i < secondObject.length; i++) {
    // collision logic for ship lazer to enemy //
    if (lazer_value.collides(secondObject[i])) {
      console.log('HITTTT!!!!')
      secondObject[i].damage()
      lazer_value.disappear()
    }
    // delete logic for base hp //
    if (secondObject[i].baseHp === 0) {
      secondObject.splice(i, 1)
      console.log('!!!DDDestroyed!!!')
    }
  }
}

// check ship collision //
function checkCollision_ship (lazer_value, secondObject) {
  if (lazer_value.collides(secondObject)) {
    secondObject.damage()
    lazer_value.disappear()
    console.log('lazer vapourized');
  }
  // delete logic for ship hp //
  if (secondObject.shipHp === 0) {
    console.log('!!! SHIP TO BE DELETED !!!')
    // what to do with ship when destroyed //
    game_over = true
    ship.isDestroyed = true
    console.log(game_over)
  }
}

function start_animation () {
  loop()
  button_start.hide()
  starting_screen.hide()
  mission_briefing.hide()
  title.hide()
  console.log('start')
  start_song.stop()
  imperial_song.play()
}

function restart_animation () {
  location.reload()
}

// function easyfunction () {
//   number_of_invaders = 10
//   console.log('clicked')
// }

//============================ creation logic ============================//
function setup () {
  createCanvas(900, 600)
  frameRate(60)

  // create main ship //
  create_ship(ship_hp)

  // create enemies //
  // row 1 //
  create_enemy(enemy_arr, number_of_invaders, 30, enemy_speed, 1)

  // row 2 //
  create_enemy(enemy_arr2, number_of_invaders, 70,  enemy_speed, 2)

  // row 3 //
  create_enemy(enemy_arr3, number_of_invaders, 110,  enemy_speed, 3)

  create_base(base_arr, 5, base_hp)

  // stop animation from running //
  noLoop()

  // create power up //
  power_up[0] = new PowerUp()
  power_up2[0] = new PowerUp()

  // DOM manipulation //
  // images //
  xwing_img = loadImage('images/xwing.png')
  xwing_flame_gif = loadImage('images/Fire_Animated_Text_Divider.gif-c200')
  tiefighter_img = loadImage('images/tiefighter.png')
  asteroid_img = loadImage('images/asteroid.png')
  powerup1_img = loadImage('images/r2.png')
  powerup2_img = loadImage('images/yoda.png')


  // input //
  // easy_img = createButton('start!', 'startbutton')
  // easy_img.position(100,500)
  // easy_img.mousePressed(easyfunction)
  // easy_img.class('test')
  //
  // medium_img = createButton('start!', 'startbutton')
  // medium_img.position(100,500)
  // medium_img.mousePressed(mediumfunction)
  // medium_img.class('test')
  //
  // hard_img = createButton('start!', 'startbutton')
  // hard_img.position(100,500)
  // hard_img.mousePressed(hardfunction)
  // hard_img.class('test')

  button_start = createButton('start!', 'startbutton')
  button_start.position(540,500)
  button_start.mousePressed(start_animation)
  button_start.class('startbutton')

  button_refresh = createButton('restart', 'restartbutton')
  button_refresh.position(1030, 7)
  button_refresh.mousePressed(restart_animation)
  button_refresh.class('restartbutton')

  starting_screen = createElement('div')
  starting_screen.attribute('id','starting_screen')
  starting_screen.position(0, 0)

  win_statment = createElement('div')
  win_statment.attribute('id', 'win_statment')
  win_statment.position(400, 240)
  win_statment.html('The Death Star has been destroyed!! </br> PULL OUT SKYWALKER!')
  win_statment.hide()

  lose_statment = createElement('div')
  lose_statment.attribute('id', 'lose_statment')
  lose_statment.position(410, 240)
  lose_statment.html('Unfortunately, you are not strong with the force, my young padawan..')
  lose_statment.hide()

  title = createElement('div')
  title.attribute('id', 'title')
  title.position(365, 80)
  title.html('Trench Run')

  mission_briefing = createElement('div')
  mission_briefing.attribute('id', 'mission_briefing')
  mission_briefing.position(325, 180)
  mission_briefing.html('Believe in yourself Luke and may the force be with you.. </br> r2 will boost your fire rate </br> and try not to forget about master yoda.. </br> arrow keys to move </br> space to fire')

  score = createElement('div', 'score')
  powerup_time = createElement('div', 'power')

  start_song = loadSound('audio/star wars theme.mp3', loadStart)
}

function loadStart() {
  // start_song.play()
}

//============================ game / display logic ============================//
function draw () {
  clear()

  if (ship.poweredUpATT === true) {
    fill('rgba(6, 250, 6, 0.15)')
    rect(0, 0, width*2, height*2)

  }

  if (ship.poweredUpMS === true) {
    fill('rgba(250, 50, 6, 0.15)')
    rect(0, 0, width*2, height*2)
  }


  if (ship.isDestroyed === false) {
    ship.show()
    ship.move()

    for (var i = 0; i < power_up.length; i++) {
      if (power_up_counter > 400 /* time to spawn power up */ && powerATS_up_fell === false) {
        power_up[i].show(powerup1_img)
        power_up[i].move()
      }
    }

    for (var i = 0; i < power_up2.length; i++) {
      if (power_up_counter > 1200 /* time to spawn power up */ && powerMS_up_fell === false) {
        power_up2[i].show(powerup2_img)
        power_up2[i].move()
      }
    }

    // enemy display //
    // row 1 //
    enemy_draw(enemy_arr, 255, 0, 0)
    // row 2 //
    enemy_draw(enemy_arr2, 0, 255, 0)
    // row 3 //
    enemy_draw(enemy_arr3, 0, 0, 255)

    base_draw(base_arr, 0, 255, 0)

    // power up attack speed logic
    for (var i = 0; i < power_up.length; i++) {
      if (power_up[i].collides(ship)) {
        powerATS_up_fell = true
        ship.boostATT()
        power_up[i].disappear()
        console.log('Attack speed power up boost!');
      }
      // logic for ship power up  //
      if (power_up[i].toDelete) {
        power_up.splice(i, 1)
      }
      if (power_up.length > 0) {
        if (power_up[i].y > height - 10) {
          power_up.splice(i, 1)
          // console.log('powerup out of bounds... deleted');
        }
      }
    }

    function stop_power_up_att () {
      rate_of_fire = 40
    }

    function reset_duration_att () {
      power_duration = -1
    }

    if (ship.poweredUpATT === true) {
      rate_of_fire = 10
      if (power_duration > powerup_ats_duration) {
        ship.poweredUpATT = false
        stop_power_up_att()
        reset_duration_att()
        console.log('buff removed!!');
      }
      power_duration++
    }

    // power up move speed
    for (var i = 0; i < power_up2.length; i++) {
      if (power_up2[i].collides(ship)) {
        powerMS_up_fell = true
        ship.boostMS()
        power_up2[i].disappear()
        console.log('Move speed power up boost!');
      }
      // logic for ship power up  //
      if (power_up2[i].toDelete) {
        power_up2.splice(i, 1)
      }
      if (power_up2.length > 0) {
        if (power_up2[i].y > height - 10) {
          power_up2.splice(i, 1)
          // console.log('powerup out of bounds... deleted');
        }
      }
    }

    function stop_power_up_ms () {
      ship.shipSpeed = 4
    }

    function reset_duration_ms () {
      power_duration = -1
    }

    if (ship.poweredUpMS === true) {
      ship.shipSpeed = 10
      if (power_duration > powerup_ms_duration) {
        ship.poweredUpMS = false
        stop_power_up_ms()
        reset_duration_ms()
        console.log('buff removed!!')
      }
      power_duration++
    }

    // enemy lazer logic //
    for (var i = 0; i < enemy_lazer.length; i++) {
      enemy_lazer[i].show(0, 255, 0)
      enemy_lazer[i].move(-1)
      enemy_lazer[i].bullet(bullet_size)
      // ship check collision //
      checkCollision_ship(enemy_lazer[i], ship)

      // base check collision //
      checkCollision_base(enemy_lazer[i], base_arr)

      if (enemy_lazer[i].toDelete) {
        enemy_lazer.splice(i, 1)
        // console.log('lazer hit target... removed!')
      }
    }

    for (var i = 0; i < enemy_lazer.length; i++) {
      if (enemy_lazer.length > 0) {
        // console.log('true')
        // console.log(enemy_lazer[i])
        if (enemy_lazer[i].y > height + 20) {
          enemy_lazer.splice(i, 1)
        }
      }
    }

    // ship lazer logic //
    if (lazer.length > 0) {
      for (var i = 0; i < lazer.length; i++) {
        lazer[i].show(255, 0, 0)
        lazer[i].move(1)

        // row 1 collision detection //
        checkCollision_enemy(lazer[i], enemy_arr)

        // row 2 collision detection //
        checkCollision_enemy(lazer[i], enemy_arr2)

        // row 3 collision detection //
        checkCollision_enemy(lazer[i], enemy_arr3)

        // base friendly fire //
        checkCollision_base(lazer[i], base_arr)

        // delete logic for lazer //
        if (lazer[i].toDelete) {
          lazer.splice(i, 1)
          // console.log('lazer hit target... removed!')
        }
      }
    }


    //============================ draw helper functions ============================//
    var edge = false

    // border check function //
    function checkBorderCollision (arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].x > width - 20 || arr[i].x < 20) {
          edge = true
        }
      }
    }

    // check if edge touch max width then shift down //
    function checkEdge (arr) {
      if (edge) {
        for (var i = 0; i < arr.length; i++) {
          arr[i].shiftDown()
        }
      }
    }

    // shift row function //
    function shiftRow (arr) {
      checkBorderCollision(arr)
      checkEdge(arr)
    }

    // randomized lazer logic //
    function createEnemyLazer (arr, lazerArr) {
      if (enemy_shots_tick % enemy_rate_of_fire === 0 && arr.length > 0) {
        var index = Math.floor(Math.random()*arr.length)
        newlaser = new Lazer(arr[index].x, arr[index].y + 20)
        // console.log('enemy firing!');
        lazerArr.push(newlaser)
        // console.log('enemy has fired ' + lazerArr.length + ' lazers beams')
        // console.log('------- end report -------');
      }
    }

    //============================ boundaries functions ============================//
    // row 1 //
    shiftRow(enemy_arr)

    // row 2 //
    shiftRow(enemy_arr2)

    // row 3 //
    shiftRow(enemy_arr3)

    //============================ enemy firing ============================//
    enemy_shots_tick++
    player_shots_tick++
    power_up_counter++


    // row 1 //
    createEnemyLazer (enemy_arr, enemy_lazer)

    // row 2 //
    createEnemyLazer (enemy_arr2, enemy_lazer)

    // row 3 //
    createEnemyLazer (enemy_arr3, enemy_lazer)

    // player automated shots //
    if (player_shots_tick > rate_of_fire && ship.fire === 1) {
      var newlazer = new Lazer(ship.x, height - 50)
      lazer.push(newlazer)
      player_shots_tick = 0
    }

    // lose conditions //
    // if (base_arr.length === 0) {
    //   game_over = true
    //   ship.isDestroyed = true
    //
    // } else {
    //   game_over = false
    // }

  }
  // main ship display//

  if (game_over === true) {
    ship.isDestroyed = true
  }

  // draw function update //
  enemy_left = enemy_arr.length + enemy_arr2.length + enemy_arr3.length

  score.html('score: ' + (total_enemy - enemy_left))
  score.position(200, 10)
  score.class('score')

  powerup_time.html('power up: ' + (power_duration) + '/200')
  powerup_time.position(400, 10)
  powerup_time.class('score')

  if (enemy_left === 0) {
    ship.finish_animation()
    win_statment.show()
    imperial_song.stop()
  } else if (game_over === true) {
    lose_statment.show()
    imperial_song.stop()
  }
}
//============================ end of draw() ============================//



//============================ events ============================//

function keyPressed () {
  if (keyCode === 32) {
    ship.engage(1)
  }

  if (keyCode === 39) {
    console.log(keyCode)
    console.log('ship moved 5px to right')
    console.log('ship current location is: ' + ship.x)
    console.log('------- end report -------');
    ship.setDir(1)
  } else if (keyCode === 37) {
    console.log(keyCode)
    console.log('ship moved 5px to left')
    console.log('ship current location is: ' + ship.x)
    console.log('------- end report -------');
    ship.setDir(-1)
  }

  // ship speed power up //
  if (keyCode === 49) {
    ship.shipSpeed = 10
  }
  // ship speed power down //
  if (keyCode === 50) {
    ship.shipSpeed = 4
  }
  // enemy fire rate up //
  if (keyCode === 51) {
    enemy_rate_of_fire = 10
  }
  // ship fire rate up //
  if (keyCode === 52) {
    rate_of_fire = 10
  }
}

function keyReleased () {
  if (keyCode === 37 || keyCode === 39) {
    console.log(keyCode)
    ship.setDir(0)
  }
  if (keyCode === 32) {
    console.log(keyCode)
    ship.engage(0)
  }
}
// fringe case testing//
// function keyPressed () {
//   if (keyCode === 49) {
//     for (var i = 0; i < enemy_arr.length; i++) {
//       enemy_arr.splice(24, 1)
//     }
//   }
//   if (keyCode === 50) {
//     for (var i = 0; i < enemy_arr2.length; i++) {
//       enemy_arr2.splice(24, 1)
//     }
//   }
//   if (keyCode === 51) {
//     for (var i = 0; i < enemy_arr3.length; i++) {
//       enemy_arr3.splice(24, 1)
//     }
//   }
// }
