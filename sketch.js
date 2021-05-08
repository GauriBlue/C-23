const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box;        

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    box = new Box()
    ground= new Ground()




    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    
box.display()
ground.display()

}