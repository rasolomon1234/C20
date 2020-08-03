var frect, mrect;
function setup() {
  createCanvas(800,400);
  frect = createSprite(200, 200, 50, 80);
  mrect = createSprite(400,200,80,30);
  mrect.shapeColor = "green";
    frect.shapeColor = "green";
}

function draw() {
  background("black");
  mrect.x  = World.mouseX;
  mrect.y = World.mouseY; 
  if (frect.x - mrect.x < frect.width/2+mrect.width/2 && 
    mrect.x - frect.x < frect.width/2+mrect.width/2 && 
    frect.y - mrect.y < frect.height/2+mrect.height/2 && 
    mrect.y- frect.y < frect.height/2+mrect.height/2){
    mrect.shapeColor = "red";
    frect.shapeColor = "red";
  } 
  else {
    mrect.shapeColor = "green";
    frect.shapeColor = "green";
  }
  drawSprites();
}