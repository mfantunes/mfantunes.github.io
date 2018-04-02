var create, song, tamA, tamB,pos1, pos2;

function preload()
{
  song = loadSound('assets/slot.mp3');
}
function setup() 
{
  createCanvas (windowWidth, windowHeight, WEBGL);
  
  create=[];

  pos1= 0;
  pos2 = pos1;
  tamA= width;
  tamB= height;
  prof= 2;


}


function draw() 
{
  background(255);

  directionalLight(255,255,255, 1,1,-1);
  //ambientLight(255);
  
  for(var i=0; i<create.length; i++)
  {

    if( verificaColisao (create[i].x), create[i].y, create[i].t, pos1, pos2, tamA, tamB, prof=== true)
    {
      song.play();
    }
    create[i].anima();
    create[i].desenha(); 
  
    
  }

  push();
    translate(pos1, pos2);
    noStroke();
    specularMaterial(250,250,250, 0);
    box(tamA, tamB, prof);
  pop();
  
}

function verificaColisao(x1, y1, t1, x2, y2, tamA, tamB, prof, pos1, pos2 )
  {
    var distEntrePontos = dist (x1,y1, pos1, pos2);
    var somaTamanhos = t1/2 + tamA/2;

    if (distEntrePontos <= somaTamanhos) return true;
  }

function mousePressed()
{
  var novaPosicaoInterior ={
    x: mouseX/width,
    y: mouseY/height

  }

  //song.play();
   
  append(create, new Objecto (novaPosicaoInterior.x*width, novaPosicaoInterior.y*height));

}



class Objecto 
{
  constructor(x_,y_)
  {
    this.x =x_;
    this.y =y_;
    this.z =0;
    
  
    this.Ae = 0; // angulo externo;
    this.vAe = 0.5;
    this.r =20;
  }
  anima()
  {
   
    if (this.Ae < 360) this.Ae += this.vAe;
    else this.Ae = 0;
  

  }

  desenha()
  {
    
    push();
      rotateY (radians(this.Ae));
    
        push();
        translate(this.x-width/2, this.y-height/2, this.z);

        specularMaterial(255, 0, 0);
        noStroke();
        box(this.r);

     pop();
    pop();

  
  }
}



function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
