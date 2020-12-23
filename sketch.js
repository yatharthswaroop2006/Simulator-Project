var car,wall;
var speed,weight;
var deformation;
var rating;




function setup() {
  createCanvas(1600,400);
  


 car = createSprite(50, 200, 50, 50);
 car.shapeColor="white";
 
 wall = createSprite(1500, 200, 60,height/2);
 wall.shapeColor=color(80,80,80);

 speed = random(55,70)
 weight = random(400,1500)
}

function draw() {
  background("black");  


  
  car.velocityX = speed;

  if(wall.x-car.x<wall.width/2+car.width/2){

    car.velocityX = 0;
     deformation = 0.5*weight*speed*speed/22509;
  
     if(deformation>=180) {
      car.shapeColor="red";
      rating="D-"
      
      }
  
      if(deformation<180 && deformation>=80) {
        car.shapeColor="yellow";
        rating="B+"
        
      }
  
      if(deformation<80) {
        car.shapeColor="green";
        rating="A"
        
      }
      
      
  }
//textSize()
  text("Speed: "+speed+"km/h",200,50);
      text("Weight: "+weight+"kg",400,50);
      text("Deformation: "+deformation,600,50);
      text("Rating: "+rating,800,50);


  drawSprites();
}