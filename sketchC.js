var grid;

function setup()
{
    createCanvas(1000, 1000);
    
    grid = [];

    for (i=0; i<14; i++){
        grid[i]=[];
        for (a=0; a<14; a++){
            grid[i][a]=[]
            grid[i][a][0]= random(["RED", "GREEN", "BLUE", "BLACK"]);
            grid[i][a][1]= random(["RED", "GREEN", "BLUE", "BLACK"]);
        }
    }

}

function draw()
{   
    background(255,255,255);
    textSize(20);
    fill(0,0,0);
    
    for (i=0; i<14; i++){
        for (a=0; a<14; a++){
            //print(grid[i][a] + " ");
            switch(grid[i][a][1]){
                case "RED":
                    fill(255,0,0);
                    break;
                case "GREEN":
                    fill(0,255,0);
                    break;
                case "BLUE":
                    fill(0,0,255);
                    break;
                case "BLACK":
                    fill(0,0,0);
                    break;
            }
            text(grid[i][a][0], (i*85), (a*85)-25);
        }
        print("\n");
    }
}
