var cnv;
let character;
let character_y = 0
let character_x = 0
let survived_days = 0
let bulletsLocation =[]
let mouseLocation = []
let backgroundImg = ''
let villageimg = ''

function preload() {
  character = loadImage('/Materials/character_walk_right.gif');
  backgroundImg = loadImage('/Materials/6aLfv.png')
  villageimg = loadImage('/Materials/preview-cottage.png')


}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

}

function setup() {
  cnv = createCanvas(1100,500);
  centerCanvas();
  angleMode(DEGREES);


  }

function windowResized() {  
  centerCanvas();
}

function draw(){
  angleMode(DEGREES);
  background(220,0,200);
  image(backgroundImg,0,0, 1100,  500)
  image(villageimg,250,100,500,250)
  image(character, character_y,character_x, 50, 50)
  ellipse(mouseX, mouseY, 33, 33);
  ellipse(bulletsLocation[0], bulletsLocation[1], 33 ,33);
  console.log(mouseLocation)
  stroke(160); 
  line(250, 0, 250, height); 

  
  if (character_y >= 1050) {
    character_y = 1045
  } else if(character_x >= 450){
    character_x = 445
  }   


  
  bulletsLocation =[(bulletsLocation[0])+5 , bulletsLocation[1]] 
  
  
  
}

function keyPressed() {
  if (keyCode === 87) {
    character_x = character_x - 20;
    console.log('UP') 
  } else if (keyCode === 83) {
    character_x = character_x + 20;
  } if (keyCode === 65) {
    character_y = character_y - 20;
  } else if (keyCode === 68) {  
    character_y = character_y + 20;
  } if (keyCode === 32){
    console.log('SPACE BAR')
  } 
  
}

function mousePressed(event) {
  bulletsLocation = []
  bulletsLocation.push(character_y+65,character_x+35)
  mouseLocation =[]
  mouseLocation.push(mouseX,mouseY)
  console.log(bulletsLocation)
  

}

