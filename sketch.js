var cnv;
let screen = 0
let score =0
let character;
let character_y = 250
let character_x = 200
let survived_days = 0
let bulletsLocation =[]
let mouseLocation = []
let backgroundImg = ''
let villageimg = ''
let rockimg = ''
let rocklocation = [0,0]
let monsterimg = ''
let monsterlocation = [255,400]
let bulletsFired = []
let heroimg = ''

class projectile {
  constructor(){
    this.x = 0
    this.y = 0
    this.speed = 0 }
}

function preload() {
  character = loadImage('Materials/character_walk_right.gif');
  backgroundImg = loadImage('Materials/village_mountain.jpeg')
  rockimg = loadImage('Materials/unnamed.png')
  monsterimg = loadImage('Materials/monster2.gif')
  heroimg = loadImage('Materials/hero.jpeg')
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(500,600);
  centerCanvas();
  }

function windowResized() {  
  centerCanvas();
}

function draw(){

  if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

function gameOn(){
  
  background(220,0,200);
  image(backgroundImg,0,0, 500, 600);
  image(character, character_y,character_x, 65, 65 );
  image(monsterimg,monsterlocation[0],monsterlocation[1],45,60);
  image(rockimg,character_y+25,character_x+39 ,30,30);
  image(rockimg,bulletsLocation[0]-35, bulletsLocation[1]+20, 33 ,33);
 
  monsterlocation = [monsterlocation[0], monsterlocation[1]-1]

  if (character_y >= 1050) {
    character_y = 1045
  } else if(character_x >= 450){
    character_x = 445
  }   

  
  // MOVING Stone to y and x by speed 5
  
  bulletsLocation =[(bulletsLocation[0]) , bulletsLocation[1]+5] 

  // Running Monster to top

  
  monsterlocation = [monsterlocation[0], monsterlocation[1]-0,01]



  // HITBOX and Counting on hit

  if (bulletsLocation[1] == monsterlocation[1] && bulletsLocation[0] >= monsterlocation[0]+10 && bulletsLocation[0] <= monsterlocation[0]+65){
    score += 1 
    monsterlocation = [Math.floor(Math.random() * (480 - 270 + 1) ) + 270,700]
    console.log('HIT')
 } else if (monsterlocation[1] <= 0 ){
    score -= 1 
    monsterlocation = [Math.floor(Math.random() * (480 - 270 + 1) ) + 270,700]
    console.log('HITMISS')
 } else




 monsterlocation = [monsterlocation[0], monsterlocation[1]-0,01]
 




  

  noStroke();
  textAlign(LEFT);
  textFont('Helvetica');
  textSize(15);
  fill(235);
  text("use keys wasd: move", 35, 35);
  text("space bar: throw", 35, 65);
  textSize(30);
  textAlign(LEFT);
  fill(235);
  text('Score: ' + score ,35,110)
	
  
  
}

function startScreen(){
  image(heroimg,0,100,500,400)
  fill(255)
  textAlign(CENTER);
  textSize(25,10,25)
  text('CLICK WITH MOUSE TO START', width / 2, height / 2+40)
  

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
    console.log('SPACE')
    bulletsLocation = []
    bulletsLocation.push(character_y+65,character_x+35)


  } 
  
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}
