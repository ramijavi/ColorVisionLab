//This is a simple template for you to experiment with

//This is a comment  ... the two slashes at the start mean that the computer ignores it

//You can look up more commands here ... https://p5js.org/reference/
function preload(){
    
    img = loadImage("Benham2disk.jpg");
    
}

let angle = 0;
let increase = 0.3;

function setup()
{
    createCanvas(1000, 600);
    angleMode(DEGREES);
}

function draw()
{   
    //this command clears the background to black (try changing the numbers)
    background(255,255,255);
    
    translate(300,300);
    rotate(angle);
    
    translate(-200,-200);
    image(img,0,0);
    
    angle = angle + increase;
    
    //Debugging code
    //print(increase);
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        increase = increase * 2;
    }
    else if(keyCode === DOWN_ARROW){
        increase = increase / 2;
    }
    else if(keyCode === RIGHT_ARROW){
        if (increase < 0){
            increase = increase*(-1); 
        }
    }
    else if (keyCode === LEFT_ARROW){
        if (increase > 0){
            increase = increase*(-1);   
        }
    }
}