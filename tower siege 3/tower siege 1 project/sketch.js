const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var g,s1,s2;
var backgroundImg
function preload(){
  polygon_img=loadImage("polygon.png");
  getBackgroundChange()

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  g=new Ground(400,400,1000,50)
  s1=new Ground(400,300,300,15)
  s2=new Ground(600,100,250,15)

  

  box1=new Box(500,299,35,35)
  box2=new Box(465,299,35,35)
  box3=new Box(430,299,35,35)
  box4=new Box(465,264,35,35)
  box5=new Box(395,299,35,35)
  box6=new Box(360,299,35,35)
  box7=new Box(325,299,35,35)
  box8=new Box(290,299,35,35)
  box9=new Box(325,264,35,35)
  box10=new Box(395,264,35,35)
  box11=new Box(395,229,35,35)
  box12=new Box(395,194,35,35)
  box13=new Box(500,264,35,35)
  box14=new Box(500,229,35,35)
  box15=new Box(290,264,35,35)
  box16=new Box(290,229,35,35)

  box17=new Box(600,99,35,35)
  box18=new Box(560,99,35,35)
  box19=new Box(520,99,35,35)
  box20=new Box(640,99,35,35)
  box21=new Box(680,99,35,35)
  box22=new Box(600,64,35,35)
  box23=new Box(560,64,35,35)
  box25=new Box(640,64,35,35)
  box26=new Box(680,64,35,35)
 
  polygon = Bodies.circle(50,200,20)
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});


  Engine.run(engine);

}

function draw() {
  Engine.update(engine);
  if(backgroundImg){
    background(backgroundImg);
    }
g.display()
s1.display()
s2.display()
box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()


  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box25.display()
  box26.display()


  slingshot.display()


  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  
  drawSprites();


}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
slingshot.attach(this.polygon)
  }
}

async function getBackgroundChange(){
var response = await fetch('http://worldclockapi.com/api/json/est/now');
var responsejson = await response.json();
    var currentDateTime = responsejson.currentDateTime;
    var time = currentDateTime.slice(11,13);
    if(keyCode==="UP_ARROW"){
      bg=".vscode/night.jpg"
     }
     else{
         bg=".vscode/day.jpg"
     }
     backgroundImg=loadImage(bg)
}