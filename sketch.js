var cat,catImg,catImg2,catImg3;
var garden,gardenImg;
var mouse,mouseImg,mouseImg2,mouseImg3;


function preload() {

catImg = loadAnimation("cat2.png","cat3.png");
catImg2 = loadImage("cat1.png");
catImg3 = loadImage("cat4.png");
gardenImg = loadImage("garden.png")
mouseImg = loadAnimation("mouse2.png","mouse3.png");
mouseImg2 = loadImage("mouse1.png");
mouseImg3 = loadImage("mouse4.png");

  

}

function setup(){
    createCanvas(1000,650);
   
          garden = createSprite(height/2,300);
          garden.addImage(gardenImg);
          garden.scale = 1;

          cat = createSprite(700,540,50,50);
          cat.addAnimation("image2",catImg2);
          cat.addAnimation("image",catImg3);
          cat.addAnimation("running",catImg);
          cat.scale = 0.15;

          mouse  = createSprite(90,570);
          mouse.addAnimation("image2",mouseImg2);
          mouse.addAnimation("image",mouseImg3);
          mouse.addAnimation("running",mouseImg);
          mouse.scale = 0.10;

      
      
}

function draw() {
  background(255);

 


  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       cat.addAnimation("image",catImg3);
       cat.changeAnimation("image");
       cat.velocityX = 0 ;

       mouse.addAnimation("image",mouseImg3);
       mouse.changeAnimation("image");
  }



drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
    cat.addAnimation("running",catImg);
    cat.changeAnimation("running");
    cat.velocityX = -2;
    cat.scale = 0.2;

     mouse.addAnimation("running",mouseImg);
     mouse.changeAnimation("running");

  }
      text(mouseX + "hello" + mouseY,1000,405);
     

}