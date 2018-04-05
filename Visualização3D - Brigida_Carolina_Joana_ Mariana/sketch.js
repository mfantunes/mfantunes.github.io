/*
Projeto: "Visualização 3D - Music Box"
Ano Lectivo (2017 - 2018)
2º semestre
3º Ano - Design Multimédia
Escola Superior de Artes e Design de Caldas da Rainha
Docente: Marco Heleno
Data de Avaliação: 06/04/2018


Brígida Marques - 3150426
Carolina Mendes - 3150413
Joana Oliveira - 3150442
Mariana Antunes - 3150135
*/

var create, t, socket, songA, songB, songC, songD, obj;

function preload() 
{

  //função para carregar os sons e o modelo para o sketch
  songA = loadSound('assets/a1.mp3');
  songB = loadSound('assets/b1.mp3');
  songC = loadSound('assets/c1.mp3');
  songD = loadSound('assets/d1.mp3');

  
  obj = loadModel('assets/2eights.obj', true);
  objA = loadModel('assets/piano.obj', true);

}
function setup() 
{
  createCanvas (windowWidth, windowHeight, WEBGL);

  socket = io.connect("https://polar-journey-49397.herokuapp.com"); //ligação com o servidor
  socket.on ("mouse", servidor);
  
  create=[]; //array de objetos
}

function draw() 
{
  background(124, 185, 255);

//pointLight (255, 0, 0, -1, 0, 0);
  directionalLight(255,255,255, 1,1,-1);//luz do ambiente
 
  for(var i=0; i<create.length; i++)
  {
    create[i].anima();
    create[i].desenha();
    
  }

  //plano transparente localizado no meio do ambiente
    push();
      translate(0, 0, 0);  
      fill(124, 185, 255, 80);
      noStroke();
      rectMode(CENTER);
      rect(0, 0, width, height);
    //pop();

  //Piano no meio do ecrã
    push();
      rotateX(radians(160));
      rotateY(radians(230));
      noStroke();

      specularMaterial(100,100,100);
      model(objA);
    pop();

}


function mousePressed()
{
  var novaPosicaoInterior ={
    x: mouseX/width,
    y: mouseY/height
  }

  append(create, new Objecto (novaPosicaoInterior.x*width, novaPosicaoInterior.y*height, songA, songB, songC,songD, obj));
  
  //Chama a funcionalidade de quando se clica cria um som
  for(var i=0; i<create.length; i++)
    {
       create[i].click(mouseX, mouseY); 
    }

  socket.emit("mouse", novaPosicaoInterior);
}

//Cria as notas a partir dos dados enviados pelo outro server
function servidor(novaPosicaoExterior)
{
  append(create, new Objecto (novaPosicaoExterior.x*width, novaPosicaoExterior.y*height, songA, songB, songC,songD, obj)); 

}



class Objecto 
{
  constructor(x_,y_,songA, songB, songC, songD, obj)
  {
    this.x =x_;
    this.y =y_;
    this.z =0;
    this.obj = obj;
    
    this.songA = songA;
    this.songB = songB;
    this.songC = songC;
    this.songD = songD;
    this.Ae = 0; //rotação sobre o ângulo externo
    this.vAe = 0.5; //velocidade do ângulo
    this.r =20; // taanho do raio
    this.specMat = color(239, 127, 202);//cor do objeto
  }

  // função que define que tipo de música é tocada em certas zonas do ecrã
  click(px, py)
  {
    //deteção da posição da esfera invisivel da posição do rato; Quando o rato clica a cor muda consoante a posição;
    var d = dist(this.x,this.y, px,py)
    if(d <= this.r)
    {
      if(px>0 && px <width && py >=0 && py <(height/4)*1)
      {
        this.specMat = color(102, 168, 255);//cor do objeto
        this.songA.play(); //refere-se ao ficheiro de som
      }

      if(px>0 && px <width && py >= (height/4)*1 && py <(height/4)*2)
      {
        this.specMat = color(152, 94, 229); //cor do objeto
        this.songB.play(); //refere-se ao ficheiro de som
      }

      if(px>0 && px <width && py >= (height/4)*2 && py <(height/4)*3)
      {
        this.specMat = color(230, 40, 93);//cor do objeto
        this.songC.play(); //refere-se ao ficheiro de som
      }

      if(px>0 && px <width && py >= (height/4)*3 && py <=(height/4)*4)
      {
        this.songD.play();//refere-se ao ficheiro de som
      }
    }
  }

  anima()
  {
    
    // faz a rotação dos objectos
    if (this.Ae < 360) this.Ae += this.vAe; //mantém os objetos em rotação
    else this.Ae = 0;

  }

  desenha()
  { 
    push();
      rotateY (radians(this.Ae));

    //esfera invisivel
    push();
        translate(this.x-width/2, this.y-height/2, this.z); 
        specularMaterial(255, 0, 0, 0);
        noStroke();
        sphere(this.r);

     pop();

     //Notas músicias
     push();
     translate(this.x-width/2, this.y-height/2, this.z);
         specularMaterial(this.specMat);
          noStroke();
          rotateX(radians(180));
          scale (0.2); //dimensão do modelo 3D
          model(this.obj);
     pop();
    pop();

  }
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
