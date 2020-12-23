const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var Box1,Box2;
var ground;
var pig1;
var Log1;
function setup(){
    var canvas = createCanvas(1500,400);
    engine = Engine.create();
    world = engine.world;

Box1=new Box(700,220,70,70);
Box2=new Box(920,220,70,70);

 ground=new Ground(600,height,1200,20);

//  pig1=new Pig(810,220);
//  Log1=new log(810,260,300,PI/2);
  
}

function draw(){
    background("grey");
    Engine.update(engine);
   Box1.display();
  Box2.display();
    ground.display();
//  pig1.display();
//  Log1.display();


}