const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, stand, world;

var block8,block9,block10,block11,block12,block13;
var block14,block15,block16;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    myEngine = Engine.create();
    world = myEngine.world;

    //console.log("1.." + stand);
    stand = new Ground(385,300,200,20);
    //console.log("2.." + stand);

    //2layer
    block8 = new Block(330,235,30,40);  
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    //3layer
    block13 = new Block(360,195,30,40);               
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    //top layer
    block16 = new Block(390,155,30,40);

    polygon = Bodies.circle (200,200,20);
    World.add (world,polygon);

    ground = new Ground(600,height,1200,20);
    slingshot = new SlingShot(this.polygon,{x : 100, y: 200});
}

function draw(){
    background("blue");
    Engine.update(myEngine);
    
    stand.display();    
    ground.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    slingshot.display();
    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    
}