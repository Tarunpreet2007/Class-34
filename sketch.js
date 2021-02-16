var ball1;
var database;
var position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();

    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";
    var ballpositionref=database.ref('ball/position');
    ballpositionref.on("value",readposition);
}

function draw(){
    background("white");
    if(position!==undefined){

    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
}
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x' : ball1.x + x,
        'y' : ball1.y + y
    });
   
}
function readposition(data){
position=data.val();
ball1.x=position.x;
ball1.y=position.y;
}


