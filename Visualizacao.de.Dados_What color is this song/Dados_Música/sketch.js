/*
Projeto: "What color is this song - Tabela de dados"
Ano Lectivo (2017 - 2018)
1º semestre
3º Ano - Design Multimédia
Escola Superior de Artes e Design de Caldas da Rainha
Docente: Marco Heleno
Data de Avaliação: 8/01/2018


Ana Ildefonso - 3150416
Brígida Antunes - 3150426
Mariana Antunes - 3150135
*/

var musica = [];//array de dados
var dados, nV, nH, marker, lato; //variáveis do código. var dados corresponde à tabela de dados; var maker e lato são as fontes;

function preload()//função para pré-carregar os dados da tabela, e as fontes, por serem ficheiros externos
{
  dados = loadTable("assets/dados.csv", "csv", "header");
  marker = loadFont("assets/marker.ttf");
  lato = loadFont("assets/Lato.ttf");
}

function setup() 
{
  createCanvas (windowWidth, windowHeight);//para criar o ecrã com a largura e altura do ecrã do dispositivo que se estiver a usar

  frameRate(10); // especifica o número de frames a ser apresentado por segundo

  //print ( dados.getRowCount() );      }
  //print(dados.getColumnCount());      } funções "print()" servem para verifica se os dados da tabela estao a ser lidos
  //print(dados.getColumn("Musica"));   }


  for (var linha=0; linha<dados.getRowCount(); linha++) 
  {
    for (var coluna=0; coluna<dados.getColumnCount(); coluna++) 
    {
    // funções para que os títulos das músicas se disponham em pentágono, posisiona o "x" e o "y"  divididos igualmente por um circulo de raio de 250;

      var x = width/2 + sin(radians(360/dados.getRowCount())*linha)*250;
      var y = height/2 + cos (radians(360/dados.getRowCount())*linha)*250;

      // chamada dos dados da tabela em linha
      var musicaNome = dados.getString (linha, 0);
      var amarelo = dados.getNum(linha, 1);
      var ceruleo = dados.getNum(linha, 2);
      var roxo = dados.getNum(linha, 3);
      var verde = dados.getNum(linha, 4);
      var rosa = dados.getNum(linha, 5);
      var menta = dados.getNum(linha, 6);
      var salmao = dados.getNum(linha, 7);
      var bordeaux = dados.getNum(linha, 8);
      var branco = dados.getNum(linha, 9);
      var turquesa = dados.getNum(linha, 10);
      var laranja = dados.getNum(linha, 11);
      var rosaEscuro = dados.getNum(linha, 12);
      var indigo = dados.getNum(linha, 13);
      var lilas = dados.getNum(linha, 14);
      var caqui = dados.getNum(linha, 15);
      var esmeralda = dados.getNum(linha, 16);
      var preto = dados.getNum(linha, 17);
      var azulPastel = dados.getNum(linha, 18);
      var cinzento = dados.getNum(linha, 19);
      var vermelho = dados.getNum(linha, 20);
      var castanho = dados.getNum(linha, 21);

    
      //chamada da class musicas que cria as bolas das cores;

      musica [linha] = new Musicas (x, y, musica, musicaNome, amarelo, ceruleo, roxo, verde, rosa, menta, salmao, bordeaux, branco, turquesa, laranja, rosaEscuro, indigo, lilas, caqui, esmeralda, preto, azulPastel, cinzento, vermelho, castanho);
    }

    
  }

}

function draw() 
{
  
  //Repete o contador de 0 ate ser menos que o numero de linhas;(tem de ser menor pq o 0 tambem conta);
  for (var i=0; i<dados.getRowCount(); i++)
  {
    musica[i].desenha(); // execução do contador musica, para ele desenhar a função desenha;
  }

 /*---- Definições do texto visível no meio do ecrã--------
   cor branca, fonte Marker, tamanho 45, alinhado ao centro, texto: "What color is this Song",
   localizado a metade do ecrã horizontalmente e verticalmente*/
  fill(255);
  textFont(marker);
  textSize(45);
  textAlign(CENTER, CENTER);
  text('What Color is this Song',width/2, height/2);

  
}




//Classe que agrupa o Template de circulos por musica;
class Musicas
{
  // O constructor é o que diz há classe o que ele contém;
  constructor (x_, y_, musica_, musicaNome_, amarelo_, ceruleo_, roxo_, verde_, rosa_, menta_, salmao_, bordeaux_, branco_, turquesa_, laranja_,rosaEscuro_, indigo_, lilas_, caqui_, esmeralda_, preto_, azulPastel_, cinzento_, vermelho_, castanho_, d_)
  {
  this.x = x_;
  this.y = y_;
  this.musica = musica_;
  this.musicaNome = musicaNome_;
  this.d = d_;


    //cores da tabela
  this.amarelo = amarelo_;
  this.ceruleo = ceruleo_;
  this.roxo = roxo_;
  this.verde = verde_;
  this.rosa = rosa_;
  this.menta = menta_;
  this.salmao = salmao_;
  this.bordeaux = bordeaux_;
  this.branco = branco_;
  this.turquesa = turquesa_;
  this.laranja = laranja_;
  this.rosaEscuro = rosaEscuro_;
  this.indigo = indigo_;
  this.lilas = lilas_;
  this.caqui = caqui_;
  this.esmeralda = esmeralda_;
  this.preto = preto_;
  this.azulPastel = azulPastel_;
  this.cinzento = cinzento_;
  this.vermelho = vermelho_;
  this.castanho = castanho_;
  }

  // Função que desenha todos os círculos de "Template" das cores,
  desenha ()
  {
    //print(this.musicaNome, this.amarelo);

    //Os círculos estão definidos para não terem contorno, e terem uma cor correspondente à das cores da tabela, através do "fill()".
    // A posição das formas é gerado aleatóriamente e o tamanho é gerado pelo os valores da tabela correspondente à cor. P
    //No entanto havia valores muito pequenos, decidi multiplicar esses valores por 10.
    noStroke();
    fill(255, 251, 0);
    ellipse(random(width),random(height), this.amarelo*10, this.amarelo*10);

    noStroke();
    fill(61, 126, 255);
    ellipse(random(width),random(height), this.ceruleo*10, this.ceruleo*10);

    noStroke();
    fill(92,21,114);
    ellipse(random(width),random(height), this.roxo*10, this.roxo*10);

    noStroke();
    fill(138,205,0);
    ellipse(random(width),random(height), this.verde*10, this.verde*10);

    noStroke();
    fill(255,149,163);
    ellipse(random(width),random(height), this.rosa*10, this.rosa*10);

    noStroke();
    fill(2,239,140);
    ellipse(random(width),random(height), this.menta*10, this.menta*10);

    noStroke();
    fill(255,186,145);
    ellipse(random(width),random(height), this.salmao*10, this.salmao*10);

    noStroke();
    fill(137,16,25);
    ellipse(random(width),random(height), this.bordeaux*10, this.bordeaux*10);

    noStroke();
    fill(255,255,255);
    ellipse(random(width),random(height), this.branco*10, this.branco*10);
    
    noStroke();
    fill(3,222,255);
    ellipse(random(width),random(height), this.turquesa*10, this.turquesa*10);

    noStroke();
    fill(255,135,0);
    ellipse(random(width),random(height), this.laranja*10, this.laranja*10);

    noStroke();
    fill(189,92,109);
    ellipse(random(width),random(height), this.rosaEscuro*10, this.rosaEscuro*10);

    noStroke();
    fill(12,54,130);
    ellipse(random(width),random(height), this.indigo*10, this.indigo*10);

    noStroke();
    fill(168,118,196);
    ellipse(random(width),random(height), this.lilas*10, this.lilas*10);

    noStroke();
    fill(118,118,0);
    ellipse(random(width),random(height), this.caqui*10, this.caqui*10);

    noStroke();
    fill(0,96,72);
    ellipse(random(width),random(height), this.esmeralda*10, this.esmeralda*10);

    noStroke();
    fill(0,0,0);
    ellipse(random(width),random(height), this.preto*10, this.preto*10);

    noStroke();
    fill(117,181,255);
    ellipse(random(width),random(height), this.azulPastel*10, this.azulPastel*10);

    noStroke();
    fill(155,155,155);
    ellipse(random(width),random(height), this.cinzento*10, this.cinzento*10);

    noStroke();
    fill(255,38,45);
    ellipse(random(width),random(height), this.vermelho*10, this.vermelho*10);

    noStroke();
    fill(114,65,1);
    ellipse(random(width),random(height), this.castanho*10, this.castanho*10);

    // Defenição do texto da musica:
    //cor branca, com contorno, font Lato, tamanho 16, alinhado ao centro.
    fill(255);
    stroke(0);
    textFont(lato)
    textSize(16);
    textAlign (CENTER, CENTER);
    text(this.musicaNome, this.x, this.y);
  }

  posX()
  {
    return this.x;
  }
  
  posY()
  {
     return this.y;
  }

  diametro()
  {
    return this.d;
  }
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}