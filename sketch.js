const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var particles =[];
var plinkos =[];
var divisions =[];

var divisionHeight=300;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
   rectMode(CENTER);

  
 /*for(var k = 0;k <=width;k = k+80)
   {
       divisions.push(new Divisions(k, height-divisionHeight/2, 10,divisionHeight));
   }*/
 
   for (var a = 40; a<=width;a=a+50){
    plinkos.push(new Plinko(a,75,10));
    }  
    
    
   ground = new Ground(240,780,800,10);
particle1 = new Particle(200,200,20);
/*for (var j = 75; j <=width; j=j+80) {
    //  console.log(frameCount);
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }   */ 
   
}


function draw(){
    background(0);
    Engine.update(engine);
   
     
    //  console.log(particles.length);
    ground.display();
particle1.display();

if(frameCount%60===0){  
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
   } 
   
  for (var j=0;j<particles.length; j=j+1) {
    particles[j].display();
  } 


for (var e=0;e<plinkos.length; e=e+1) {
    plinkos[e].display();
  } 

//drawSprites();
}


