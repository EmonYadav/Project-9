
function setup() {
  createCanvas(400,400);
  
}

function draw() 
{
  background(0);

  if (keyIsDown(UP_ARROW)){

    background('red')
    
    }
    
    else if (keyIsDown(DOWN_ARROW)){
      background('orange')
    }
    
    else if (keyIsDown(RIGHT_ARROW)){
      backgroung('blue')
    }
    
    else if (keyIsDown(LEFT_ARROW)){
      background('green')
    }




drawSprite();

}




