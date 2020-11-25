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
 
  left=new Dustbin(300, 610, 20, 100);
  right=new Dustbin(500, 610, 20, 100);
  bottom=new Dustbin(400,650,200,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  /*bottom = createSprite(400,650,200,20);
  bottom.shapeColor = ("white");
  //Matter.Body.setStatic(bottom, true);
  //Matter.Body.paper1(bottom, true);

  left = createSprite(300, 610, 20, 100);
  left = left.shapeColor = ("white");

  right = createSprite(500, 610, 20, 100);
  right.shapeColor = ("white");*/

  //Create a Ground
  //groundSprite=createSprite(width/2, height-35, width, 10);
  //groundSprite.shapeColor=color("yellow");

  drawSprites();
  
  ground.display();
  paper1.display();
  left.display();
  right.display();
  bottom.display();
}
function keyPressed() {
  
    if (keyCode === UP_ARROW){
      Matter.Body.applyForce(paper1.paper,paper1.paper.position,{x:45,y:-45});

    }
}


