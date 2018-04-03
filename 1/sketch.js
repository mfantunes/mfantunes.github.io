var create, songA,t, numLinhas;

function preload()
{
  songA = loadSound('assets/slot.mp3');
}
function setup() 
{
  createCanvas (windowWidth, windowHeight, WEBGL);
  
  create=[];

}

function draw() 
{
  background(255);

  directionalLight(255,255,255, 1,1,-1);
 
  for(var i=0; i<create.length; i++)
  {
    
    create[i].anima();
    create[i].desenha(); 
  }

  
}

function mousePressed()
{
  var novaPosicaoInterior ={
    x: mouseX/width,
    y: mouseY/height

  }

  append(create, new Objecto (novaPosicaoInterior.x*width, novaPosicaoInterior.y*height, songA));

  for(var i=0; i<create.length; i++)
  {
   create[i].click(mouseX, mouseY); 
  }

}



class Objecto 
{
  constructor(x_,y_,songA)
  {
    this.x =x_;
    this.y =y_;
    this.z =0;
    
    this.songA = songA;
    this.Ae = 0; // angulo externo;
    this.vAe = 0.5;
    this.r =20;
  }

  click(px, py)
  {
    var d = dist(this.x,this.y, px,py)
    if(d <= this.r)
    {
      if(px>0 && px <width && py >0 && py <(height/4)*1)
      {
        this.songA.play();
        console.log('Clicou');
      }

      if(px>0 && px <width && py > (height/4)*1 && py <(height/4)*2)
      {
       // this.songA.play();
        console.log('Clicou2');
      }

      if(px>0 && px <width && py >(height/4)*2 && py <(height/4)*3)
      {
        //this.songA.play();
        console.log('Clicou3');
      }

      if(px>0 && px <width && py >(height/4)*3 && py <(height/4)*4)
      {
        //this.songA.play();
        console.log('Clicou44');
      }
    }
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

   // print(this.x, this.y);
  }
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
