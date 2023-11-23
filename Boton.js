class Boton {

  constructor(x, y, tamX, tamY, texto) {
    this.x = x
      this.y = y
      this.tamX = tamX
      this.tamY = tamY
      this.estado = "off"
      this.texto = texto
      this.colores = [ color(20), color(120), color(255)]

      this.colorFill = this.colores[0]
      this.colorTextFill = this.colores[2]

      this.tiempo = 0
      this.tipo = "App"
  }

  actualizar() {

    this.estado = "off"

      if (this.tiempo < 60) {

      this.tiempo++
        this.estado = "off"
    }

    if (this.tiempo >= 60) {
      this.estado = "on"
    }

    if (this.estado == "on" &&
      mouseX > this.x &&
      mouseX < this.x + this.tamX &&
      mouseY > this.y &&
      mouseY < this.y + this.tamY) {

      this.colorFill = this.colores[1]

        if (this.estado == "on") {

        this.colorFill = this.colores[2]

          if (mouseIsPressed && this.estado == "on") {

          this.evento(this.texto)
            this.estado = "off"
        }
      }
    } else {

      this.colorFill = this.colores[0]
    }
    this.estado = "off"
  }


  evento(txt) {
    if (this.tipo == "Minijuego") {
      if (txt == "Créditos") {
        minijuego.cambiarPantalla("creditos")
      } else if (txt == "Jugar") {
        minijuego.cambiarPantalla("Jugar")
      }
    } else {
      if (txt == "Créditos") {
        app.cambiarPantalla("creditos")
      }

      if (txt == "Volver") {
        app.cambiarPantalla("volver")
      }

      if (txt == "Iniciar") {
        app.cambiarPantalla(2)
      }

      if (txt == "Inicio") {
        app.cambiarPantalla("irainicio")
      }

      if (txt == "Siguiente") {
        app.cambiarPantalla("Siguiente")
      }

      this.estado = "off"
    }
  }
  dibujar() {

    this.actualizar()
      push()
      fill(this.colorFill)
      rect(this.x, this.y, this.tamX, this.tamY)
      fill(this.colorTextFill)
      text(this.texto, this.x + this.tamX/4, this.y + this.tamY/2)
      pop()
  }
}
class MiniBoton extends Boton {

  constructor(x, y, tamX, tamY, txt) {

    super(x, y, tamX, tamY, txt)
      this.tipo = "Minijuego"
  }
}
