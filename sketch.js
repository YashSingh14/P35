var ball;
var database, position, image, image1;

function preload(){
    image = loadImage("Hot Air Ballon-01.png")
    image1 = loadImage("Hot Air Ballon-02.png")
}

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.addImage(image1);
    var locationOfChild = database.ref("ball/positions");
    locationOfChild.on("value", readop, showerror)
}

function draw(){
    background(image);
    if(keyDown(LEFT_ARROW)){
        ball.x = ball.x-10
    }
    else if(keyDown(RIGHT_ARROW)){
        ball.x = ball.x+10
    }
    else if(keyDown(UP_ARROW)){
        ball.y = ball.y-10
    }
    else if(keyDown(DOWN_ARROW)){
        ball.y = ball.y+10
    }
    drawSprites();
}

function writePosition(x,y){
database.ref("ball/positions").set({
    x:ball.x+x, 
    y:ball.y+y
})
}

function readop(data){
position = data.val()
ball.x = position.x;
ball.y = position.y;
}

function showerror(){
console.log("error")
}