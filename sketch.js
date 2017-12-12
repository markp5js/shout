var f00, f01, f02, f03, f04, f05, f06, f07, f08, f09, f10;
var f11, f12, f13, f14, f15, f16, f17, f18, f19, f20;
var f21, f22, f23, f24, f25, f26, f27, f28, f29, f30;
var mic;
var int;
var mid, peaks, lastPeak;
var w, h;
var fireloop;

function preload() {
}

function setup() {
  lastPeak = 0;
  mic = new p5.AudioIn();
  mic.start();
  frameRate(24);
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);
  background(0);
  noStroke();
  textFont("HK Nova");
  textAlign(LEFT);
  fill(255);
  text("loading", 480, 300);
  fireloop = loadAnimation("images/Fire0000.png", "images/Fire0004.png");
  endloop = loadAnimation("images/Fire0030.png", "images/Fire0034.png");
  song = loadSound("fire.mp3", loaded);
  // f00 = createImg("images/Fire0000.gif");
  f05 = loadImage("images/Fire0005.jpg");
  f06 = loadImage("images/Fire0006.jpg");
  f07 = loadImage("images/Fire0007.jpg");
  f08 = loadImage("images/Fire0008.jpg");
  f09 = loadImage("images/Fire0009.jpg");
  f10 = loadImage("images/Fire0010.jpg");
  f11 = loadImage("images/Fire0011.jpg");
  f12 = loadImage("images/Fire0012.jpg");
  f13 = loadImage("images/Fire0013.jpg");
  f14 = loadImage("images/Fire0014.jpg");
  f15 = loadImage("images/Fire0015.jpg");
  f16 = loadImage("images/Fire0016.jpg");
  f17 = loadImage("images/Fire0017.jpg");
  f18 = loadImage("images/Fire0018.jpg");
  f19 = loadImage("images/Fire0019.jpg");
  f20 = loadImage("images/Fire0020.jpg");
  f21 = loadImage("images/Fire0021.jpg");
  f22 = loadImage("images/Fire0022.jpg");
  f23 = loadImage("images/Fire0023.jpg");
  f24 = loadImage("images/Fire0024.jpg");
  f25 = loadImage("images/Fire0025.jpg");
  f26 = loadImage("images/Fire0026.jpg");
  f27 = loadImage("images/Fire0027.jpg");
  f28 = loadImage("images/Fire0028.jpg");
  f29 = loadImage("images/Fire0029.jpg");
}

function loaded() {
  song.play();
  song.loop();
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  int = 10;

  var mid = lerp(mic.getLevel()*1000, lastPeak, 0.75);
  v = mid;
  lastPeak = v;

  w = (windowWidth/2) - 480;
  h = (windowHeight/2) - 300;
  console.log(v);
  //front loop

  animation(fireloop, windowWidth/2, windowHeight/2);

  if (v >= 7*int) {
    campfire(int);
  }

}

function campfire(i) {

  if (v >= 7*i && v < 8*i) {
    image(f05, w, h);
  } else if (v >= 8*i && v < 9*i) {
    image(f06, w, h);
  } else if (v >= 9*i && v < 10*i) {
    image(f07, w, h);
  } else if (v >= 10*i && v < 11*i) {
    image(f08, w, h);
  } else if (v >= 11*i && v < 12*i) {
    image(f09, w, h);
  } else if (v >= 12*i && v < 13*i) {
    image(f10, w, h);
  } else if (v >= 13*i && v < 14*i) {
    image(f11, w, h);
  } else if (v >= 14*i && v < 15*i) {
    image(f12, w, h);
  } else if (v >= 15*i && v < 16*i) {
    image(f13, w, h);
  } else if (v >= 16*i && v < 17*i) {
    image(f14, w, h);
  } else if (v >= 17*i && v < 18*i) {
    image(f15, w, h);
  } else if (v >= 18*i && v < 19*i) {
    image(f16, w, h);
  } else if (v >= 19*i && v < 20*i) {
    image(f17, w, h);
  } else if (v >= 20*i && v < 21*i) {
    image(f18, w, h);
  } else if (v >= 21*i && v < 22*i) {
    image(f19, w, h);
  } else if (v >= 22*i && v < 23*i) {
    image(f20, w, h);
  } else if (v >= 23*i && v < 24*i) {
    image(f21, w, h);
  } else if (v >= 24*i && v < 25*i) {
    image(f22, w, h);
  } else if (v >= 25*i && v < 26*i) {
    image(f23, w, h);
  } else if (v >= 26*i && v < 27*i) {
    image(f24, w, h);
  } else if (v >= 27*i && v < 28*i) {
    image(f25, w, h);
  } else if (v >= 28*i && v < 29*i) {
    image(f26, w, h);
  } else if (v >= 29*i && v < 30*i) {
    image(f27, w, h);
  } else if (v >= 30*i && v < 31*i) {
    image(f28, w, h);
  } else if (v >= 31*i && v < 32*i) {
    image(f29, w, h);
  } else if (v >= 32*i) {
    animation(endloop, windowWidth/2, windowHeight/2);
  }

}
