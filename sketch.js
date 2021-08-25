var cnv;
let screen = 0
let character;
let character_y = 250
let character_x = 200
let survived_days = 0
let bulletsLocation =[]
let mouseLocation = []
let backgroundImg = ''
let villageimg = ''
let rockimg = ''
let rocklocation = []
let monsterimg = ''
let monsterlocation = [800,1000]


function preload() {
  character = loadImage('Materials/character_walk_right.gif');
  backgroundImg = loadImage('/Materials/village mountain.jpeg')
  rockimg = loadImage('/Materials/unnamed.png')
  monsterimg = loadImage('/Materials/monster.gif')
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(800,1000 );
  centerCanvas();
  }

function windowResized() {  
  centerCanvas();
}

function draw(){

  background(220,0,200);
  image(backgroundImg,0,0, 800, 1000);
  image(character, character_y,character_x, 80, 80);
  
  image(monsterimg,400,600,120,120);

  image(rockimg,character_y+30,character_x+52,30,30);
  
  ellipse(bulletsLocation[0], bulletsLocation[1], 33 ,33);
  console.log(mouseLocation)
 
  
  if (character_y >= 1050) {
    character_y = 1045
  } else if(character_x >= 450){
    character_x = 445
  }   

  

  
  bulletsLocation =[(bulletsLocation[0]) , bulletsLocation[1]+5] 


  noStroke();
  textAlign(LEFT);
  textFont('Helvetica');
  textSize(15);
  fill(235);
  text("use keys wasd: move", 35, 35);
  text("space bar: throw", 35, 65);
	
  
  
  
}

function startScreen(){
  background(96, 157, 255)
  fill(255)
  textAlign(CENTER);
  text('WELCOME TO MY CATCHING GAME', width / 2, height / 2)
  text('click to start', width / 2, height / 2 + 20);
  reset();
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
    bulletsLocation = []
    bulletsLocation.push(character_y+65,character_x+35)
    mouseLocation =[]
    mouseLocation.push(mouseX,mouseY)
    console.log(bulletsLocation)
  } 
  
}


