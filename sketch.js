var retFixo, retMovendo;

function setup() {
  createCanvas(1200,800);
  retFixo = createSprite(600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400,200,80,30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
}

function draw() {
  background(0,0,0);  
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;
  if(isTouching(retMovendo, retFixo)){
    retMovendo.shapeColor = "blue";
    retFixo.shapeColor = "blue";
  }
  else{
    retMovendo.shapeColor = "green";
    retFixo.shapeColor = "green";
  }
 
  drawSprites();
}

function isTouching(sprite1, sprite2){
  if (sprite1.x - sprite2.x < sprite2.width/2 + sprite1.width/2
      && sprite2.x - sprite1.x < sprite2.width/2 + sprite1.width/2
      && sprite1.y - sprite2.y < sprite2.height/2 + sprite1.height/2
      && sprite2.y - sprite1.y < sprite2.height/2 + sprite1.height/2) {
     return true;
  }
  else {
    return false;
  }
}