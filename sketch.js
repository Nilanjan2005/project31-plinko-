const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particle1;

function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;



  particle1 = new Particle(400, 200, 50, 50);

Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(255,255,255);

  particle1.display();

  drawSprites();
}