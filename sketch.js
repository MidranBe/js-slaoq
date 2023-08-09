let xBolinha = 280;
let yBolinha = 250;
let xVelocidade = 5;
let yVelocidade = 5;
let diametro = 50;
let raio = diametro / 2;

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(0);
  mostrarbolinha()
  movimentobolinha()

  function mostrarbolinha()
  { circle(xBolinha,yBolinha,diametro)
 
                         }

  function movimentobolinha () {
   
  xBolinha = xBolinha + xVelocidade;
  yBolinha = yBolinha + yVelocidade;
 
    if (xBolinha + raio > width || xBolinha < 0)
  {xVelocidade *= - 1;}
 
  if (yBolinha + raio > height || yBolinha < 0) {yVelocidade *= - 1}
  }
  }