class Minijuego {

  constructor(cantidad, segundos) {
    this.cambiable = true
      this.cantidadDeCorrecciones = cantidad
      this.segundos = segundos
      this.segundosPorCorreccion = this.segundos / this.cantidadDeCorrecciones
      this.estado = 0
      this.tiempoBalance = 0
      this.startMinute = minute()
      this.startSecond = second()
      this.second = second()
      this.count = 0
      this.secondsCount = 0
      this.limitSeconds = this.segundosPorCorreccion
      this.miniBoton = new MiniBoton(width/2, height/2, width/10, height/10, "Jugar")
      this.miniBotonCreditos = new MiniBoton(width - width/3, height/2, width/10, height/10, "Creditos")
      this.miniBotonInstrucciones = new MiniBoton(width/3, height/2, width/10, height/10, "Instrucciones")
      this.colorDeFondo = 255
  }

  mecanica() {

    if (this.second != second()) {

        this.second = second()
        this.secondsCount++
        this.colorDeFondo = map(this.secondsCount, 0, this.segundosPorCorreccion, 120, 0)
        if (this.secondsCount >= this.segundosPorCorreccion ) {
      }
    }
  }

  dibujar() {

    if (this.estado == 0) {

      push()

        background(this.colorDeFondo, 255, 255)
        fill(255)
        text("Este es un minijuego", 20, 80)

        this.miniBoton.dibujar()
        this.miniBotonCreditos.dibujar()
        this.miniBotonInstrucciones.dibujar()

        pop()

        //instrucciones
    } else if (this.estado == 1) {

      this.mecanica()
        push()

        background(this.colorDeFondo, 255, 255)
        fill(0)
        text("Tiempo por visado: "+ this.limitSeconds, 20, height/10)
        text("Tiempo actual: "+ this.secondsCount, 20, height/10 * 2)
        text("Ya vamos: "+ this.count, 20, height/10 * 3)

        pop()
        //contando
    } else if (this.estado == 2) {
      //no llegamos con el tiempo
    } else if (this.estado == 3) {
      //mision cumplida!
      push()
        pop()
    }
  }
  keyPressed() {
    if (key == " ") {
        this.count++
        this.tiempoActual = 0
        this.secondsCount = 0
    }
  }
  cambiarPantalla(param) {
    if ( this.cambiable == true) {
      this.estado = 1
    }
  }
  boton(param) {
    if (param == "Sig") {
      this.estado++
    } else if (param == "Ant") {
      this.estado--
    }
  }
}
