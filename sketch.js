const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


const Constraint = Matter.Constraint;

var divisions=[];
var plinkos=[];
var particles=[];

var ground;
//var plinko;

var engine,world;
var divisionheight=300;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,480);
  
  for(var k =0;k<=width;k=k+80){
    divisions.push(new Division(k,height-150,10,300));
  }
  for(var j =50;j<=width;j=j+50){
    plinkos.push( new Plinko(j,75,10));
     }
     for(var g =70;g<=width-10;g=g+50){
       plinkos.push( new Plinko(g,175,10));
        }
        for(var y =55;y<=width;y=y+50){
         plinkos.push( new Plinko(y,275,10));
          }
          for(var s =40;s<=width-10;s=s+50){
           plinkos.push( new Plinko(s,375,10));
            }
   
  
  
  
  
  
  
  
  ground=new Ground(width/2,height,width,20);
Engine.run(engine);
 
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  ground.display();
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  for(var i  = 0;i<plinkos.length;i++){
  plinkos[i].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }
  for(var p = 0;p<particles.length;p++){
    particles[p].display();
  }
  /*plinko.display();*/
  drawSprites();
}
