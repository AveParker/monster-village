function setup() {
  var cnv = createCanvas(1400, 750)
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255, 0, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}