const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Body = Matter.Body;

var umbrella, bg;
var drops = [];
var maxDrops = 1;

function preload() {
  bg = loadImage("images/background.jpg");
  lightning = loadImage("images/lightning.png");
}

function setup() {
  createCanvas(400, 800);
  engine = Engine.create();
  world = engine.world;

  //create an umbrella
  umbrella = new Umbrella(200, 500, 130, 150);
}

function draw() {
  Engine.update(engine);
  background(bg);
  ellipseMode(CENTER);

  for (var i = 0; i < maxDrops; i++) {
    drops.push(new Drops(random(0, 400), random(0, 400)));
  }
  if (frameCount % 20) {
    for (var i; i < drops.length; i++) {
      drops[i].display();
      drops[i].update();
    }
  }
  umbrella.display();
  //lightning
  if (frameCount % 20) {
    image(lightning, 200, 90, 100, 200);
  }
}
