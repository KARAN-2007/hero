const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22;
var ground;
var hero;
var chain;
var m;
var bg;
function preload(){
bg=loadImage("gamingbackground2.png")
}


function setup(){
    var canvas = createCanvas(3000,windowHeight);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,680,1200,20)
    b1=new Box(870,100,75,75)
    b2=new Box(870,100,75,75)
    b3=new Box(870,100,75,75)
    b4=new Box(870,100,75,75)
    b5=new Box(870,100,75,75)
    b6=new Box(870,100,75,75)
    b7=new Box(780,100,75,75)
    b8=new Box(780,100,75,75)
    b9=new Box(780,100,75,75)
    b10=new Box(780,100,75,75)
    b11=new Box(780,100,75,75)
    b12=new Box(780,100,75,75)
    b21=new Box(780,100,75,75)
    b22=new Box(780,100,75,75)
    b13=new Box(690,100,75,75)
    b14=new Box(690,100,75,75)
    b15=new Box(690,100,75,75)
    b16=new Box(690,100,75,75)
    b17=new Box(690,100,75,75)
    b18=new Box(690,100,75,75)
    b19=new Box(690,100,75,75)
    b20=new Box(870,100,75,75)
    hero= new Ball(100,0,250)
    chain=new Chain(hero.body,{x:250,y:250})
    m=new Monster(1100,500,150)


}

function draw(){
    background(bg)
    
    Engine.update(engine);
    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display(); 
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    hero.display();
    chain.display();
    m.display();
    console.log(height)
}
function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}