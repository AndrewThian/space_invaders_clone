var img;
// var canvas;

function setup() {


  createCanvas(400, 400);
}

function draw() {
  // noStroke();
  background(51);
  // image(img, 0, 0)
  img = createImg("http://makepixelart.com/peoplepods/files/images/1335.original.png");
  image(img, mouseX-img.width/2, mouseY-img.height/2);
}

function mouseClicked () {
  img.hide()
}

// var img;
// var test
// // var canvas;
//
// function setup() {
//
//   // img = createImg("http://makepixelart.com/peoplepods/files/images/1335.original.png");
//   createCanvas(400, 400);
//   test = new Image()
// }
//
// function Image () {
//   this.show = function () {
//     img = createImg("http://makepixelart.com/peoplepods/files/images/1335.original.png");
//   }
// }
//
// function draw() {
//   // noStroke();
//   background(51);
//   // image(img, 0, 0)
//   test.show()
// }
