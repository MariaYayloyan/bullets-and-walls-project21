var wall, thickness;
var bullet, speed, weight;
var bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,15,6);
  bullet.velocityX = speed;
  //bullet.debug = true;

  wall = createSprite(1200,200,thickness, height/2);
 
}

function draw() {
  background("yellow");  
 
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;

    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }

  }
 
  bullet.collide(wall);
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}



