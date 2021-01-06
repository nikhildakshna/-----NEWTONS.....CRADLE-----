
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5,Roof,chain1,chain2,chain3,chain4,chain5;



function preload(){
	
}



function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new bob(200);
	b2 = new bob(300);
	b3 = new bob(400);
	b4 = new bob(500);
	b5 = new bob(600);
	Roof = new roof();
	chain1 = new thread(b1.body,{x: 200,y: 100});
	chain2 = new thread(b2.body,{x: 300,y: 100});
	chain3 = new thread(b3.body,{x: 400,y: 100});
	chain4 = new thread(b4.body,{x: 500,y: 100});
	chain5 = new thread(b5.body,{x: 600,y: 100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 Roof.display()
 chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();

}

function mouseDragged(){
Matter.Body.setPosition(b1.body,{x: mouseX,y: mouseY});
}