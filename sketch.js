
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone1,groundObject, launcher, mango2,mango3,mango4,mango5,mango6;
var mango1,world,boy

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1160,178,30);
	mango3=new mango(991,150,30);
	mango4=new mango(1055,187,30);
	mango5=new mango(925,222,30);
	mango6=new mango(1005,74,30);


launcher = new Slingshot(boy.body,{x:200,y:100})

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1 = new stone (219,405,20)
	Engine.run(engine);

}

function draw() {

  background(230);
  
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  treeObj.display();
  text(mouseX+","+mouseY,mouseX,mouseY);
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

launcher.display();

stone1.display();
  groundObject.display();
}

function mouseDragged (){
	Matter.Body.setPosition(boy.body,{x:mouseX,y:mouseY})
	   
	}
	
	function mouseReleased (){
	
launcher.fly();
	
	
	
	}