
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint
var dustbinObj,groundObject	
var world;

function preload(){

	
	tree = loadImage("tree.png")
	boy = loadImage("boy.png")
	


}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(240, 450, 120)

	
	mango1 = new Mango(1200, 250)
	mango2 = new Mango(1300, 200)
	mango3 = new Mango(1500, 350)
	mango4 = new Mango(1000, 320)
	mango5 = new Mango(1400, 340)
	mango6 = new Mango(1100, 190)
	mango7 = new Mango(1200, 350)
	mango8 = new Mango(1100, 370)

	sling = new Slingshot(paper.body, {x : 240, y : 450})
	
	groundObject=new ground(width/2,670,width,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  breakF(paper, mango1)
  breakF(paper, mango2)
  breakF(paper, mango3)
  breakF(paper, mango4)
  breakF(paper, mango5)
  breakF(paper, mango6)
  breakF(paper, mango7)
  breakF(paper, mango8)
 
 
  imageMode(CENTER)
  image(tree, 1200, 390, 600, 600)
  image(boy, 360, 580, 400, 400)

  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()

  sling.display()
  

  groundObject.display();
  
  paper.display()
  



	
}

function mouseDragged(){

	Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
	sling.fly()
}

function breakF(stone, mango){
	var distance = dist(stone.body.position.x, stone.body.position.y, mango.body.position.x, mango.body.position.y)
if(distance <=100+120){
Matter.Body.setStatic(mango.body, false)
}
}
