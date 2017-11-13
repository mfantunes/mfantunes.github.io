/*
Projeto: "Tangrami - Unfolding EVA"
Ano Lectivo (2017 - 2018)
1º semestre
3º Ano - Design Multimédia
Escola Superior de Artes e Design de Caldas da Rainha
Docente: Marco Heleno
Data de Avaliação: 12/11/2017


Ana Ildefonso - 3150416
Brígida Antunes - 3150426
Mariana Antunes - 3150135
*/

var a,t, n, numLinhas, numbColunas;
var cores=[];

function setup() 
{
  createCanvas (595, 842, SVG);
  
  frameRate(1);
  cores[0]=color(230,49,90);
  cores[1]=color(118,193,213);
  cores[2]=color(247,201,23);
  
  n = 6;//nº de objetos
}

function draw() 
{
  
  t= width/n;
  numLinhas = height/t;
  numbColunas = width/t;

  noStroke();

  for (var x=0; x<numbColunas; x++)
  {
    for(var y = 0; y<numLinhas; y++)
    {

     var x1= x*t;
     var x3= x*t+t;
     var x2= x1;
     var x4= x*t+t;

     var y1=y*t;
     var y2=y*t+t;
     var y3=y2;
     var y4= y1;
     
       fill (cores[int(random(0, 3))]);
       triangle(x1, y1, x2, y2, x3, y3);
       
        fill( cores[int(random(0, 3))]);
        triangle(x1, y1, x4, y4, x3, y3);
    }
  }
  
}

function keyPressed()
{
  if (key === " ")
  {
    noLoop();
    save("cartaz.svg");
  }
}
