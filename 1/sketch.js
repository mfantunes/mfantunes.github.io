var create, t, socket, songA, songB, songC, songD;

function preload()
{
  songA = loadSound('assets/a1.mp3');
  songB = loadSound('assets/b1.mp3');
  songC = loadSound('assets/c1.mp3');
  songD = loadSound('assets/d1.mp3');

}
function setup() 
{
  createCanvas (windowWidth, windowHeight, WEBGL);

  socket = io.connect("https://polar-journey-49397.herokuapp.com");
  socket.on ("mouse", servidor);
  
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

  append(create, new Objecto (novaPosicaoInterior.x*width, novaPosicaoInterior.y*height, songA, songB, songC,songD));
  for(var i=0; i<create.length; i++)
    {
       create[i].click(mouseX, mouseY); 
    }
  socket.emit("mouse", novaPosicaoInterior);
}

function servidor(novaPosicaoExterior)
{
  append(create, new Objecto (novaPosicaoExterior.x*width, novaPosicaoExterior.y*height));
   
}



class Objecto 
{
  constructor(x_,y_,songA, songB, songC, songD)
  {
    this.x =x_;
    this.y =y_;
    this.z =0;
    
    this.time= min(12)
    this.songA = songA;
    this.songB = songB;
    this.songC = songC;
    this.songD = songD;
    this.Ae = 0; // angulo externo;
    this.vAe = 0.5;
    this.r =20;
  }

  click(px, py)
  {
    var d = dist(this.x,this.y, px,py)
    if(d <= this.r)
    {
      if(px>0 && px <width && py >=0 && py <(height/4)*1)
      {
    
         this.songA.play();
        console.log('Clicou');
      }

      if(px>0 && px <width && py >= (height/4)*1 && py <(height/4)*2)
      {
        this.songB.play();
      }

      if(px>0 && px <width && py >= (height/4)*2 && py <(height/4)*3)
      {
        this.songC.play();

      }

      if(px>0 && px <width && py >= (height/4)*3 && py <=(height/4)*4)
      {
        this.songD.play();
  
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
