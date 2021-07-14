
var gardenImage, garden, catImage, cat;
var mouseImage, mouse, catImage2, cat2;


function preload() 
{
   gardenImage= loadImage("images/garden.png")
   catImage= loadImage("images/cat1.png");
   mouseImage= loadImage("images/mouse1.png");
   catImage2= loadImage("images/cat2.png");
}

function setup()
{
    createCanvas(1000,800);
    garden= createSprite (500,400);
    garden.addImage(gardenImage);
    cat= createSprite(500,600);
    cat.addImage(catImage);
    cat.scale= 0.1;
    mouse= createSprite(300,600);
    mouse.addImage(mouseImage);
    mouse.scale= 0.1;
    cat2= createSprite (21,22);
    cat.addImage(catImage2);
    cat.scale= 0.1;

}

function draw()
 {
    background(255);
    
    

    drawSprites();
}


function keyPressed()
{
  console.log("key pressed..."+keyCode);

  if(keyCode=== LEFT_ARROW)
  {
    cat.velocityX= -5;
    cat.addAnimation("carRunning", catImag2);
    cat.changeAnimation("catRunning");
  }

}
