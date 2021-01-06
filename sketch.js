var wall,car;
var weight,speed

function setup() {
  createCanvas(800,800);
  

  car=createSprite(50,50,50,50);
  wall=createSprite(300,200,60,400);

  speed=random(50,100);
  weight=random(500,1500);
}

function draw() {
  background(255,255,255);  



car.velocityX=speed;

if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500

  if(deformation>180){
    car.shapeColor="red"
    
  }

  if(deformation<180 && deformation>100){
    car.shapeColor="yellow"
    
  }

  if(deformation<100){
    car.shapeColor="green"
   
  }
}

  drawSprites();
}