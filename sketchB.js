var xRand;
var yRand;
var randColor;
var randLetter;
var letters;
var c1;
var c2;
var letterPressed;
var checked;
var wins;
var loses;

function setup()
{
    createCanvas(1000, 1000);
    xRand = random(10, 480);
    yRand = random(10, 480);
    randColor = color(random(17,80), random(150,255), random(4,80));
    letters = ['q','w','e','r','t','y','u','i','o','p'];
    randLetter = random(letters);
    c1 = color(214, 0, 0);
    c2 = color(23, 255, 0);
    letterPressed = '';
    checked = false;
    wins = 0;
    loses = 0;
}

function draw()
{   
    background(255,255,255);
    
    fill(0,0,0);
    stroke(0,0,0);
    textSize(32);
    text("Welcome to the keyboard game!",10,50);
    
    textSize(16);
    text("Random letters will apear in the rectangle bellow. You'll have 3 seconds\nto hit the correct key on your keyboard", 10, 75);
    
    text("Hits: " + wins + "  Misses: " + loses, 10, 120)
    
    translate(10,170);
    setGradient(0, 0, 500, 500, c2, c1);
    
    stroke(randColor);
    fill(randColor);
    text(randLetter, xRand, yRand);
    
    if(letterPressed != '' && checked == false){
        if(letterPressed === randLetter){
            wins = wins + 1;
        }else{
            loses = loses + 1;
        }
        checked = true;
    }
}

setInterval(randomLetters, 3000);

function randomLetters(){
    xRand = random(10, 485);
    yRand = random(10, 485);
    randColor = color(random(17,80), random(150,255), random(4,80));
    randLetter = random(letters);
    checked = false;
    letterPressed = '';
}

function keyPressed(){
    switch(keyCode){
        case 81:
            letterPressed = 'q';
            break;
        case 87:
            letterPressed = 'w';
            break;
        case 69:
            letterPressed = 'e';
            break;
        case 82:
            letterPressed = 'r';
            break;
        case 84:
            letterPressed = 't';
            break;
        case 89:
            letterPressed = 'y';
            break;
        case 85:
            letterPressed = 'u';
            break;
        case 73:
            letterPressed = 'i';
            break;
        case 79:
            letterPressed = 'o';
            break;
        case 80:
            letterPressed = 'p';
            break;
    }
}


//Code borrowed from p5js.org examples
function setGradient(x, y, w, h, c1, c2) {
    noFill();
    
    for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
    }
}
