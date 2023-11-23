let minijuego

  function setup() {
  createCanvas(windowWidth, windowHeight)
    minijuego = new Minijuego(19, 105*60)
    textSize(48)
    colorMode(HSB)
}


function draw() {

  minijuego.dibujar()
}

function keyPressed() {
  minijuego.keyPressed()
}
