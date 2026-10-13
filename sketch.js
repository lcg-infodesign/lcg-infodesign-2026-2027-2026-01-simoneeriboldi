
let x1 = 50;
let x2 = 150;
let x3 = 250;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  // Cielo
  background(135, 206, 235);

  // Sole
  noStroke();
  fill(255, 220, 0);
  ellipse(420, 60, 60, 60);

  // Nuvole
  fill(255);
  ellipse(80, 70, 50, 30);
  ellipse(105, 60, 50, 40);
  ellipse(130, 70, 50, 30);

  ellipse(280, 100, 50, 30);
  ellipse(305, 90, 50, 40);
  ellipse(330, 100, 50, 30);

  // Montaggna
  fill(120, 140, 150);
  triangle(0, 300, 140, 100, 280, 300);

  // Neve sulla montagna dieto
  fill(255);
  triangle(115, 135, 140, 100, 165, 135);

  // Montagna davanti
  fill(90, 110, 120);
  triangle(150, 300, 330, 80, 500, 300);

  // Neve sulla montagna davanti
  fill(255);
  triangle(290, 130, 330, 80, 370, 130);

  // Prato
  noStroke();
  fill(70, 170, 80);
  rect(0, 300, 500, 100);

  // Fiori sul prato
  for (let i = 20; i < 500; i = i + 60) {
    fill(255, 230, 0);
    ellipse(i, 345, 8, 8);
    ellipse(i + 6, 345, 8, 8);
    fill(255);
    ellipse(i + 3, 340, 7, 7);
  }

  // Albero a sinistra
  fill(100, 60, 30);
  rect(45, 245, 15, 60);

  fill(20, 110, 40);
  triangle(20, 270, 52, 205, 85, 270);
  triangle(25, 245, 52, 185, 80, 245);

  // Albero a destra
  fill(100, 60, 30);
  rect(420, 250, 15, 55);

  fill(20, 110, 40);
  triangle(390, 270, 427, 205, 460, 270);
  triangle(395, 245, 427, 185, 455, 245);

  // Uccellino 1
  stroke(0);
  strokeWeight(2);
  noFill();
  arc(x1, 150, 20, 15, PI, TWO_PI);
  arc(x1 + 20, 150, 20, 15, PI, TWO_PI);

  // Uccellino 2
  arc(x2, 180, 20, 15, PI, TWO_PI);
  arc(x2 + 20, 180, 20, 15, PI, TWO_PI);

  // Uccellino 3
  arc(x3, 130, 20, 15, PI, TWO_PI);
  arc(x3 + 20, 130, 20, 15, PI, TWO_PI);

  // Movimento degli uccellini
  x1 = x1 + 2;
  x2 = x2 + 1;
  x3 = x3 + 2;

  // Se arrivano al bordo, tornano a sinistra
  if (x1 > 500) {
    x1 = 0;
  }

  if (x2 > 500) {
    x2 = 0;
  }

  if (x3 > 500) {
    x3 = 0;
  }
}

