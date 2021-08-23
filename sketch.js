var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth - width, windowHeight - height);
  centerCanvas();
  background(255, 0, 200);
}

function windowResized() {
  centerCanvas(windowWidth - width, windowHeight - height);
}