function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 200, 50, 50);
 movingrect  = createSprite(400,100,40,40);
}

function draw() {
  background(255,255,255); 
  movingrect.y = mouseY
  movingrect.x = mouseX 
  if(fixedrect.x-movingrect.x < fixedrect.width/2+movingrect.width/2
    && movingrect.x-fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && movingrect.y - fixedrect.y < movingrect.height/2+fixedrect.height/2
    && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2){
    fixedrect.shapeColor = "blue"
    movingrect.shapeColor = "blue"
  }
  else{
    fixedrect.shapeColor = "red"
    movingrect.shapeColor = "red"
  }
  drawSprites();
}