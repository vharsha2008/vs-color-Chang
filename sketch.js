var fixedrect,moverect;

function setup() {
  createCanvas(800,400);
  moverect=createSprite(400, 200, 50, 50);
  moverect.shapeColor="blue";
  moverect.debug=true;
  fixedrect=createSprite(200,200,90,90);
  fixedrect.shapeColor="blue";
  fixedrect.debug=true;

}

function draw() {
  background(255,255,255);  

  moverect.x=World.mouseX;
  moverect.y=World.mouseY;

  if(moverect.x-fixedrect.x<fixedrect.width/2+moverect.width/2
    &&fixedrect.x-moverect.x<fixedrect.width/2+moverect.width/2
    &&moverect.y-fixedrect.y<fixedrect.height/2+moverect.height/2
    &&fixedrect.y-moverect.y<fixedrect.height/2+moverect.height/2)
  {
    moverect.shapeColor="yellow";
    fixedrect.shapeColor="yellow";
  }
  else{

    moverect.shapeColor="blue";
    fixedrect.shapeColor="blue";

  }

  drawSprites();
}