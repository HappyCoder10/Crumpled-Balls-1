
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var left, bottom, right;
var paper1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
  paper1  = new Paper(100,600,20);
  ground=new Ground(width/2, height-35, width, 10);
 
}


function draw() {
  rectMode(CENTER);
  background(0);

  bottom = createSprite(400,650,200,20);
  bottom.shapeColor = ("white");
  //Matter.Body.setStatic(bottom, true);
  //Matter.Body.paper1(bottom, true);

  left = createSprite(300, 610, 20, 100);
  left = left.shapeColor = ("white");

  right = createSprite(500, 610, 20, 100);
  right.shapeColor = ("white");

  //Create a Ground
  //groundSprite=createSprite(width/2, height-35, width, 10);
  //groundSprite.shapeColor=color("yellow");

  drawSprites();
  
  ground.display();
  paper1.display();
 
}
function keyPressed() {
  
    if (keyCode === UP_ARROW){
      //alert ("I need to learn coding");
      Matter.Body.applyForce(paper1.paper,paper1.paper.position,{x:45,y:-45});

    }
}


