//Create variables 
var dog,happyDog,database,dogImg;
var foodS,foodStock;

function preload()
{
  dog=loadImage("images/dogImg");
 happyDog=loadImage("images/dogImg");
}

function setup() {
  createCanvas(500,500);
database=firebase.database;
foodStock=database.ref('food');
foodStock.on("value",readStock);
dog.addImage("dog",dogImg);
  
}


function draw() {  
  background(46, 139, 87);
  if (keyDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);

    
  }

  drawSprites();
  textSize(20);
  textColor(blue);
  text("PRESS UP ARROW TO FEED DOG MILK!!!");

}



