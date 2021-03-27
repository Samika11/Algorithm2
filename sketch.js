function setup() {
  createCanvas(800,400);
  box=createSprite(400, 200, 50, 50);
  rectangle=createSprite(500,100,50,100)
  box.shapeColor="blue"
  rectangle.shapeColor="yellow"
  box2=createSprite(200,50,20,20)
  box2.shapeColor="orange"
  rectangle2=createSprite(300,300, 100, 50)
  rectangle2.shapeColor="purple"
  box3=createSprite(350,150,70,70)
  box3.shapeColor="red"
  rectangle3=createSprite(400,400,200,20)
  rectangle2.shapeColor="black"
}

function draw() {
  background(255,255,255);  
  drawSprites();
  box.x=mouseX
  box.y=mouseY
  if (isTouching(box,box2)){
    box.shapeColor="pink"
    box2.shapeColor="green" 
  }
  else{
  box.shapeColor="blue"
  box2.shapeColor="orange"
  }
}
function isTouching(object1,object2){
  if(object1.x-object1.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object2.height/2+object1.height/2
    && object2.y-object1.y<object2.height/2+object1.height/2){
    return true
    } 
    else {
    return false
    }
  }