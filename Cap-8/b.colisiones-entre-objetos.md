# Colisiones entre objetos

En el apartado anterior hemos visto cómo detectar cuando nuestro personaje colisiona con las paredes del canvas. Pero, ¿qué pasa si queremos detectar cuando dos objetos colisionan entre sí? En este nuevo apartado vamos a ver cómo detectar colisiones entre diferentes objetos que se encuentran dentro de nuestro canvas.

## Técnicas de detección de colisiones

Existen diferentes técnicas para detectar colisiones entre objetos. Sin embargo, en este curso vamos a centrarnos únicamente en aquellas enfocadas a juegos de 2D. A continuación, se presentan algunas de las técnicas más comunes:

- **Punto vs. Forma**: Esta técnica consiste en comparar la posición de un punto con la forma de un objeto. Por ejemplo, si queremos saber si un punto está dentro de un círculo, podemos calcular la distancia entre el punto y el centro del círculo y compararla con el radio del círculo. Se determnina que hay colisión si la distancia es menor o igual al radio del círculo o en pocas palabras, el punto intersecciona con la forma del objeto.

- **Círculo vs. Círculo**: Esta técnica consiste en comparar la distancia entre los centros de dos círculos con la suma de sus radios. Si la distancia es menor o igual a la suma de los radios, entonces hay colisión.

- **Rectángulo vs. Rectángulo**: Esta técnica consiste en comparar las posiciones de dos rectángulos en los ejes X e Y. Si las posiciones de los rectángulos se solapan en ambos ejes, entonces hay colisión.

- **Círculo vs. Rectángulo**: Esta técnica consiste en comparar la distancia entre el centro de un círculo y el rectángulo con el radio del círculo. Si la distancia es menor o igual al radio del círculo, entonces hay colisión. También se puede comparar la distancia entre el centro del círculo y el punto más cercano del rectángulo. (Esto lo vimos en el apartado anterior con las paredes del canvas).

Con estas 4 técnicas en tu arsenal, se abren las puertas de un sin fin de posibilidades para crear animaciones y juegos interactivos.

## Modelado de un objeto colisionable

Antes de empezar a detectar colisiones más complejas, es importante considerar a cada figura interactiva de nuestro canvas como un objeto. Como ya hemos visto en los primeros capítulos, los objetos en JavaScript son una estructura de datos capaz de representar algo en particular. En este caso, un objeto colisionable puede ser un círculo, un rectángulo o cualquier otra forma geométrica que se pueda dibujar en el canvas.

Recordemos que los objetos tienen propiedades y métodos que nos permiten interactuar con ellos. Por ejemplo, un objeto círculo puede tener propiedades como el radio, el color de relleno, la posición en el canvas, etc. Además, puede tener métodos que nos permitan dibujarlo, moverlo, cambiar su color, etc. Este enfoque orientado a objetos nos permite modelar de manera más eficiente y organizada los objetos colisionables de nuestro juego.

### Modelado de un círculo

Vamos a ver un ejemplo de cómo modelar un círculo en JavaScript. Para ello, vamos a crear un objeto `circle` con las siguientes propiedades:

- `x`: Posición en el eje X del círculo.
- `y`: Posición en el eje Y del círculo.
- `radius`: Radio del círculo.
- `color`: Color de relleno del círculo.

```javascript
let circle = {
  x: 100,
  y: 100,
  radius: 50,
  color: "red",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  },
};
```

En este ejemplo, hemos creado un objeto `circle` con las propiedades `x`, `y`, `radius` y `color`. Además, hemos definido un método `draw` que nos permite dibujar el círculo en el canvas.

> **Nota**: Hasta ahora solo hemos creado figuras teniendo "sueltas" las variables que representaban las propiedades de un círculo. En este caso, estamos creando un objeto que representa un círculo, lo cual nos permite tener un control más preciso sobre sus propiedades y métodos asociados. Es decir, todo lo que tiene que ver con un círculo está encapsulado en un solo objeto.

### Modelado de un rectángulo

De manera similar, podemos modelar un rectángulo en JavaScript. Para ello, vamos a crear un objeto `rectangle` con las siguientes propiedades:

- `x`: Posición en el eje X del rectángulo.
- `y`: Posición en el eje Y del rectángulo.
- `width`: Ancho del rectángulo.
- `height`: Alto del rectángulo.
- `color`: Color de relleno del rectángulo.

```javascript
let rectangle = {
  x: 200,
  y: 200,
  width: 100,
  height: 50,
  color: "blue",
  draw: function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};
```

En este ejemplo, hemos creado un objeto `rectangle` con las propiedades `x`, `y`, `width`, `height` y `color`. Además, hemos definido un método `draw` que nos permite dibujar el rectángulo en el canvas.

De esta forma, podemos modelar cualquier objeto colisionable que queramos en nuestro juego. Una vez que tengamos los objetos modelados, podemos empezar a detectar colisiones entre ellos.

## Preparación del entorno

Para poder detectar colisiones entre objetos, necesitamos tener un entorno de trabajo adecuado. En este caso, vamos a utilizar un canvas para dibujar los objetos y un bucle de animación para actualizar el estado de los objetos en cada fotograma como en los capítulos anteriores.

### Estructura del repositorio:

```
objects-collision-detection/
|--index.html
|--styles.css
|--js/
|--|--main.js
|--|--circle.js
|--|--rectangle.js
|--|--collision.js
|--|--drawing.js
```

Como puedes ver, hemos creado una estructura de archivos similar a la que hemos utilizado en los capítulos anteriores. En este caso, hemos creado un archivo `circle.js` para modelar el objeto círculo, un archivo `rectangle.js` para modelar el objeto rectángulo, un archivo `collision.js` para detectar colisiones entre objetos y un archivo `drawing.js` que dibuja nuestro ya conocido canvas y canvas grid system.

#### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Objects Collision Detection</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main class="main-container">
      <canvas id="my-canvas" width="400" height="400"></canvas>
    </main>
    <script src="js/drawing.js"></script>
    <script src="js/rectangle.js"></script>
    <script src="js/circle.js"></script>
    <script src="js/collision.js"></script>
    <script type="module" src="js/main.js"></script>
  </body>
</html>
```

#### styles.css

```css
* {
  box-sizing: "border-box";
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(11, 1, 15);
}

.main-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
```

#### 📁js/drawing.js

```javascript
const canvas = document.getElementById("my-canvas");
canvas.style.backgroundColor = "#000000";
const ctx = canvas.getContext("2d");

function drawGridSystem() {
  ctx.strokeStyle = "#00FF00";
  ctx.lineWidth = 0.25;
  ctx.fillStyle = "#009900";

  for (let x = 0; x < canvas.width; x += 10) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.lineWidth = x % 50 === 0 ? 0.5 : 0.25;
    ctx.stroke();
    if (x % 50 === 0) ctx.fillText(x, x, 10);
  }

  for (let y = 0; y < canvas.height; y += 10) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.lineWidth = y % 50 === 0 ? 0.5 : 0.25;
    ctx.stroke();
    if (y % 50 === 0) ctx.fillText(y, 0, y + 10);
  }
}

function drawCoordinate(ctx, x, y) {
  ctx.fillStyle = "#00FF00";
  ctx.fillText(`(${x},${y})`, x, y);
}
```

#### 📁js/circle.js

```javascript

```
