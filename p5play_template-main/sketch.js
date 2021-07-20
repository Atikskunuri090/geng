var ball



function preload(){

}


function setup() {
  createCanvas(1920,1080);
  ball = createSprite (960,540)
  
}

function draw() 
{
  background(30);
  drawSprites()
  if (keyDown("right")){
    ball.x = ball.x + 2
  }
  if (keyDown("left")){
    ball.x = ball.x - 2
  }
}




