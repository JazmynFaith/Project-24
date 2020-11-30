
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

 
var ball,dustbin;
var engine,world;
var ground,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball = new Ball(200,200,40)
	ground = new Ground(400,height, 800, 20);
	dustbin = new Dustbin(650,670)
	Engine.run(engine);
  
}


function draw() {
  background(0);
  //Engine.update(engine)
  rectMode(CENTER);
 // console.log(ball.position.x,ball.position.y)
  ball.display()
  ground.display()
  dustbin.display()
  drawSprites();
 
  function keyPressed(){
	  if (keyCode === UP_ARROW) {
		  Matter.ball.applyForce(ballObject.body,ballObject.position,{x:85,y:85})
	  }
  }
}



