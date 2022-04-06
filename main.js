
function preload(){
   pic=loadImage("dog.jpg") 
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center()
}

function draw(){
    image(pic,0,0,640,420);
    fill("red");
    text("dog",45,75) ;
    noFill()
    stroke("blue")
    rect(30,60,450,350)
}