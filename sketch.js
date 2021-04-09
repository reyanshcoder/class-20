var fixedrect, movingrect
function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 100, 50);
  fixedrect=createSprite(300, 100, 60, 60)
  movingrect.shapeColor="black"
  fixedrect.shapeColor="yellow"
}

function draw() {
  background(255,255,255);  
  drawSprites();

  movingrect.x=mouseX
  movingrect.y=mouseY
 if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2
  && fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2
  &&movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2
  &&fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor="red"
    movingrect.shapeColor="red" 
 }
 else{
   fixedrect.shapeColor="yellow"
   movingrect.shapeColor="black"
 }
}