function setup() {
    createCanvas(500,500); 
    background(random(0,255),random(0,255),random(0,255));

    fill("red");
    rect(100, 300, 50, 50);

    fill("blue");
    rect(200, 300, 50, 50);

    fill("yellow");
    rect(300, 300, 50, 50);   
    
    fill("white");
    rect(200,100,50,50);

    fill("purple");

}

function mouseDragged(){
    ellipse(mouseX, mouseY,10 ,10);
    return false;
}

function mouseClicked(){
if(mouseX > 100 && mouseX <150 && mouseY > 300 && mouseY < 350){
    fill("red"); 
} else if (mouseX > 200 && mouseX <250 && mouseY > 300 && mouseY < 350){
    fill("blue"); 
} else if (mouseX > 300 && mouseX < 350 && mouseY > 300 && mouseY < 350){
    fill("yellow"); 
} else if(mouseX > 200 && mouseX <250 && mouseY > 100 && mouseY < 150){
    setup(); 
}
    return false;
    
}