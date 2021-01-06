var bullet, wall, speed, weight, height = 400, thickness;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,140)
  weight = random(400,1500)
  bullet = createSprite(30,200,70,20);
  bullet.shapeColor = "white"
  thickness = random(22,83)
  wall = createSprite(1500,200,thickness,height/2)
 
}

function draw() {
  background("black");  
  drawSprites();
  bullet.velocityX = speed
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if(deformation <10 ){
      bullet.shapeColor = "green"

    }  else if (deformation>10){

      bullet.shapeColor = "red"
    }
  }
}