# Interactividad

Les doy la bienvenida a uno de los capítulos más interesantes de este curso. Sin duda disfrutarás ver como tus creaciones cobran vida y responden a las acciones del usuario. Ahora ya sabes cómo crear elementos en el Canvas, cómo dibujar formas y cómo animarlas. En este capítulo aprenderás a hacer que el usuario pueda interactuar con tus creaciones, haciendo que el personaje de Pac-Man se mueva con las flechas del teclado. Además, aprenderás a detectar colisiones entre objetos como las paredes del canvas para que el personaje no se salga de la pantalla.

## Eventos

Antes que nada, para desarrollar la interactividad con el usuario es necesario que revisemos algunos conceptos clave como los Eventos. Un evento es cualquier suceso que ocurre en el navegador, ya sea por parte del usuario o por parte del sistema. Por ejemplo, un evento puede ser el clic de un botón, el movimiento del mouse, el presionar una teclal, incluso cuando el navegador termina de cargar una página.

Algunos eventos muy comunes en el desarrollo web son los siguientes:

- **click**: Este evento se dispara cuando el usuario hace clic en un elemento.
- **mouseover**: Este evento se dispara cuando el usuario pasa el mouse sobre un elemento.
- **keydown**: Este evento se dispara cuando el usuario presiona una tecla.
- **keyup**: Este evento se dispara cuando el usuario suelta una tecla.
- **load**: Este evento se dispara cuando la página ha terminado de cargar.
- **resize**: Este evento se dispara cuando el usuario cambia el tamaño de la ventana del navegador.
- **scroll**: Este evento se dispara cuando el usuario hace scroll en la página.
- **submit**: Este evento se dispara cuando el usuario envía un formulario.
- **input**: Este evento se dispara cuando el usuario escribe en un campo de texto.
- **change**: Este evento se dispara cuando el usuario cambia el valor de un campo de texto.

Estos son algunos eventos que puedes "escuchar" en tu página web. Los desarrolladores web preparan instrucciones a través de código para que el navegador ejecute ciertas acciones cuando ocurra un evento.

## Teclado, mouse y touch (táctil)

Como primer paso, separaremos los eventos que nos darán interactividad con el usuario en tres categorías: teclado, mouse y touch (táctil). Para cada una de estas categorías, existen eventos específicos que nos permiten detectar la interacción del usuario con nuestra página web.

### Escuchando eventos

Como hemos dicho, los eventos son sucesos que ocurren en el navegador con o sin intervención del usuario y sin necesidad de que los detectemos. Sin embargo, si queremos reaccionar a estos eventos y ejecutar ciertas acciones, debemos "escucharlos" o "detectarlos" en nuestro código. Es aquí donde entra en juego el concepto de "escuchadores de eventos" o "event listeners".

El siguiente gráfico muestra como se relacionan los eventos, los elementos HTML y los event listeners:

```mermaid
graph LR
    A[Elemento HTML] --> B(Evento)
    B --> C[Event Listener]
    C --> D[Acción]
```

Como puedes ver, un evento ocurre en un elemento HTML, el event listener está "escuchando" ese evento y cuando ocurre, se ejecuta una acción. Recordemos que es necesario capturar el nodo del elemento HTML para poder trabajar con él en JavaScript.

### Capturando eventos del teclado

Como hemos planteado anteriormente, estamos en la búsqueda de la interactividad con el usuario y especialmente queremos que cuando el usuario presione una tecla, nuestro personaje de Pac-Man cambie de dirección. Para ello, necesitamos capturar los eventos del teclado. En JavaScript, los eventos del teclado se capturan con los eventos `keydown` y `keyup`. El evento `keydown` se dispara cuando el usuario presiona una tecla y el evento `keyup` se dispara cuando el usuario suelta una tecla.

```mermaid
graph LR
    A[Elemento HTML] --> B(keydown)
    B --> C[Event Listener]
    C --> D[Acción]
```

```mermaid
graph LR
    A[Elemento HTML] --> B(keyup)
    B --> C[Event Listener]
    C --> D[Acción]
```

Vamos a ver un ejemplo de cómo capturar los eventos del teclado en JavaScript, para ello simplemte crearemos un documento HTML en el que capturaremos el body de la página y añadiremos un event listener para el evento `keydown` y `keyup`.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eventos del teclado</title>
  </head>
  <body>
    <script>
      document.body.addEventListener("keydown", (event) => {
        console.log("Tecla presionada:", event.key);
      });

      document.body.addEventListener("keyup", (event) => {
        console.log("Tecla liberada:", event.key);
      });
    </script>
  </body>
</html>
```

Puedes probar este código creando un archivo HTML y abriéndolo ejecutándolo con live server o simplemente abriéndolo en tu navegador. Al presionar una tecla, verás en la consola del navegador el mensaje "Tecla presionada: [tecla]" y al soltar la tecla, verás el mensaje "Tecla liberada: [tecla]".

Por ejemplo, si presionamos y soltamos la tecla "a", veremos en la consola del navegador los mensajes:

```shell
Tecla presionada: a
Tecla liberada: a
```

Para nuestro juego de Pac-Man necesitamos capturar las teclas de dirección, si presionamos la tecla de flecha hacia arriba, abajo, izquierda o derecha, veremos en la consola del navegador los mensajes:

```shell
Tecla presionada: ArrowUp
Tecla liberada: ArrowUp
```

```shell
Tecla presionada: ArrowDown
Tecla liberada: ArrowDown
```

```shell
Tecla presionada: ArrowLeft
Tecla liberada: ArrowLeft
```

```shell
Tecla presionada: ArrowRight
Tecla liberada: ArrowRight
```

#### Sintaxis de los addEventListener

La función `addEventListener` es un método propio de los nodos del DOM que previamente hemos capturado con `document.querySelector` o `document.getElementById`. La sintaxis de `addEventListener` es la siguiente:

```javascript
elemento.addEventListener(evento, callback);
```

Donde:

- `elemento`: Es el nodo del DOM al que queremos añadir el event listener.
- `evento`: Es el nombre del evento que queremos escuchar.
- `callback`: Es la función que se ejecutará cuando ocurra el evento.

<div style="background-color:black; color:white; width:70px; text-align:center;padding:4px; font-size:20px; font-family: sans-serif">Nota:</div>
> Un `callback` es una función que se pasa como argumento o parámetro a otra función y que se ejecuta dentro de la función que la recibe. Los callbacks son muy comunes en JavaScript y se utilizan para ejecutar código de manera asíncrona ya que podemos pasar una función como argumento a otra función y ejecutarla en un momento posterior o cuando se cumpla cierta condición.

#### Anatomía del `callback` que se ejecuta en el `addEventListener`

El `callback` que se ejecuta en el `addEventListener` recibe un parámetro que es el evento que ha ocurrido. Este evento es un objeto que contiene información sobre el evento que ha ocurrido.

Como podrás ver en el ejemplo anterior, la forma de la función `callback` es un poco diferente a lo que hemos visto anteriormente. En lugar de utilizar la palabra reservada `function`, hemos utilizado una función flecha `() => {}`. Esta es una forma más moderna de definir funciones en JavaScript y es equivalente a la forma tradicional de definir funciones. La función flecha tiene la siguiente forma:

```javascript
(parametro1, parametro2, ..., parametroN) => {
  // Código de la función
}
```

Donde:

- `parametro1, parametro2, ..., parametroN`: Son los parámetros que recibe la función.
- `{}`: Es el cuerpo de la función que contiene el código que se ejecutará.
- `=>`: Es el operador de flecha que indica que estamos definiendo una función flecha.
- `// Código de la función`: Es el código que se ejecutará cuando se llame a la función.

##### Funciones flecha vs funciones tradicionales

Las funciones flecha son una forma más moderna de definir funciones en JavaScript y tienen algunas diferencias con las funciones tradicionales.

Ejemplo de función tradicional:

```javascript
document.body.addEventListener("keydown", function (event) {
  console.log("Tecla presionada:", event.key);
});
```

Ejemplo de función flecha:

```javascript
document.body.addEventListener("keydown", (event) => {
  console.log("Tecla presionada:", event.key);
});
```

###### La función flecha es anónima

Las funciones flecha son funciones anónimas, es decir, no tienen un nombre. Esto significa que no podemos llamar a una función flecha por su nombre, sino que debemos asignarla a una variable o pasarla como argumento a otra función. Para resolver este problema, podemos asignar la función flecha a una variable.

El siguiente ejemplo muestra cómo asignar una función flecha a una variable:

```javascript
const miFuncion = (parametro1, parametro2) => {
  console.log(parametro1, parametro2);
};

miFuncion("Hola", "Mundo");
```

##### Si la función flecha se escribe en una sola línea, no es necesario utilizar `{}` y `return`

Si la función flecha se escribe en una sola línea, no es necesario utilizar `{}` y `return`. En este caso, la función flecha devolverá el valor de la expresión que se encuentra a la derecha de `=>`.

El siguiente ejemplo muestra cómo escribir una función flecha en una sola línea:

```javascript
const sumar = (a, b) => a + b;

console.log(sumar(2, 3)); // 5
```

- Como podemos ver, la función flecha `sumar` recibe dos parámetros `a` y `b` y devuelve la suma de `a` y `b`. En este caso, la función flecha se escribe en una sola línea y no es necesario utilizar `{}` y `return`. Se dice entonces que el `return` es implícito.

##### Si la función flecha recibe un solo parámetro, no es necesario utilizar `()`

Si la función flecha recibe un solo parámetro, no es necesario utilizar `()`. En este caso, la función flecha se escribe de la siguiente forma:

```javascript
const duplicar = (numero) => numero * 2;

console.log(duplicar(5)); // 10
```

#### El objeto `event` que recibe el `callback` como parámetro

El objeto `event` que recibe el `callback` como parámetro contiene información sobre el evento que ha ocurrido. Este objeto tiene las siguientes propiedades y varía dependiendo del tipo de evento que se haya producido. Algunas de las propiedades más comunes del objeto `event` para los eventos del teclado son las siguientes:

- `event.key`: Es la tecla que se ha presionado o liberado.
- `event.code`: Es el código de la tecla que se ha presionado o liberado.
- `event.ctrlKey`: Indica si la tecla `Control` está presionada.
- `event.shiftKey`: Indica si la tecla `Shift` está presionada.
- `event.altKey`: Indica si la tecla `Alt` está presionada.
- `event.metaKey`: Indica si la tecla `Meta` está presionada.

Por ejemplo, si presionamos la tecla "a", el objeto `event` tendrá las siguientes propiedades:

```javascript
{
  key: "a",
  code: "KeyA",
  ctrlKey: false,
  shiftKey: false,
  altKey: false,
  metaKey: false
}
```

#### Apliquemos lo aprendido en nuestro juego de Pac-Man

Ahora que ya sabemos cómo capturar los eventos del teclado, vamos a aplicar este conocimiento en nuestro juego de Pac-Man. Necesitamos que cuando el usuario presione una tecla de dirección, nuestro personaje Pac-Man cambie de dirección. Para ello, necesitamos capturar el evento `keydown` para las teclas de dirección y cambiar la dirección del personaje dependiendo de la tecla que se haya presionado.

##### Añadiendo una variable `direction` al código `

Para poder cambiar la dirección del personaje Pac-Man primero es necesario definir una variable `direction` que almacenará la dirección actual del personaje.

```javascript
let x = 50;
let y = 50;
let radius = 50;
let mouthAngle = 0;
let mouthSpeed = 0.1;
let direction = "ArrowRight"; // Dirección inicial del personaje
```

##### Capturando el evento `keydown` y cambiando la dirección del personaje

Ahora, necesitamos capturar el evento `keydown` y cambiar la dirección del personaje dependiendo de la tecla que se haya presionado. Para ello, añadiremos un event listener al body de la página y cambiaremos la dirección del personaje dependiendo de la tecla que se haya presionado.

```javascript
// Events
document.body.addEventListener("keydown", (e) => {
  console.log("event", e.key);
  direction = e.key;
});
```

##### Cambiando la posición del personaje dependiendo de la dirección

Hay que recordar que tenemos una función llamada `updatePosition` que se encarga de actualizar la posición del personaje. Hasta ahora esta función solo actualizaba la posición del personaje en la dirección `ArrowRight`. Ahora, necesitamos que esta función actualice la posición del personaje dependiendo de la dirección actual del personaje. Para ello y como solo manejamos 4 opciones de dirección, utilizaremos un `switch` para cambiar la posición del personaje dependiendo de la dirección.

```javascript
function updatePosition() {
  switch (direction) {
    case "ArrowRight":
      x += 1;
      break;
    case "ArrowLeft":
      x -= 1;
      break;
    case "ArrowDown":
      y += 1;
      break;
    case "ArrowUp":
      y -= 1;
      break;
    default:
      console.warn("direction no coincide con ninguno de los casos");
      break;
  }
}
```

Como se puede ver, hemos añadido un `switch` que evalúa la variable `direction` y cambia la posición del personaje dependiendo de la dirección. Si la dirección es `ArrowRight`, la posición en el eje `x` se incrementa en 1, si la dirección es `ArrowLeft`, la posición en el eje `x` se decrementa en 1, si la dirección es `ArrowDown`, la posición en el eje `y` se incrementa en 1 y si la dirección es `ArrowUp`, la posición en el eje `y` se decrementa en 1.

##### Rotando el personaje dependiendo de la dirección

Es necesario por último, rotar el personaje dependiendo de la dirección. Para ello, añadiremos un `switch` en la función `drawPacman` que rotará el personaje dependiendo de la dirección.

```javascript
function drawPacman(x, y, radius, mouthAngle, ctx) {
  ctx.save(); // Guarda el estado actual del contexto

  // Mueve el origen al centro de Pac-Man
  ctx.translate(x, y);

  // Calcula el ángulo de rotación según la dirección
  let rotationAngle;
  switch (direction) {
    case "ArrowDown":
      rotationAngle = Math.PI / 2; // 90 grados
      break;
    case "ArrowUp":
      rotationAngle = -Math.PI / 2; // -90 grados
      break;
    case "ArrowLeft":
      rotationAngle = Math.PI; // 180 grados
      break;
    case "ArrowRight":
    default:
      rotationAngle = 0; // Sin rotación para la derecha
      break;
  }

  ctx.rotate(rotationAngle); // Rota el contexto en el ángulo deseado

  // Dibuja el Pac-Man en su dirección
  ctx.beginPath();
  ctx.arc(0, 0, radius, mouthAngle, 2 * Math.PI - mouthAngle);
  ctx.lineTo(0, 0);
  ctx.fillStyle = "yellow";
  ctx.fill();

  ctx.restore(); // Restaura el contexto para que no afecte otros dibujos
}
```

Como se puede ver, la función `drawPacman` ahora tiene un `switch` que evalúa la variable `direction` y rota el personaje dependiendo de la dirección. Si la dirección es `ArrowDown`, el personaje se rota 90 grados, si la dirección es `ArrowUp`, el personaje se rota -90 grados, si la dirección es `ArrowLeft`, el personaje se rota 180 grados y si la dirección es `ArrowRight`, el personaje no se rota.

Para entender mejor cómo funciona el código, quisiera que veamos un par de conceptos nuevos que se vieron en esta implementación.

##### El método `save` y `restore` del contexto 2D

El método `save` del contexto 2D guarda el estado actual del contexto y el método `restore` restaura el estado del contexto al último estado guardado. Estos métodos son muy útiles cuando queremos realizar transformaciones en el contexto y luego restaurar el contexto a su estado original.

Estos métodos son muy importantes ya que de lo contrario, la rotación afectaría a todos los dibujos que se realicen después de la rotación. Al utilizar el método `save`, estamos guardando el estado actual del contexto antes de realizar la rotación y al utilizar el método `restore`, estamos restaurando el contexto al estado original después de la rotación. Esto nos permite que rotemos solo el Pac-Man y luego de dibujar el Pac-Man restauramos el contexto al que guardamos antes de la rotación.

##### El método `translate` del contexto 2D

Cuando rotamos un contexto lo hacemos alrededor del origen del contexto. Por defecto, el origen del contexto está en la esquina superior izquierda del canvas, es decir la coordenada `(0, 0)`. Para rotar el Pac-Man alrededor de su centro, primero necesitamos mover el origen del contexto al centro del Pac-Man. Para ello, utilizamos el método `translate` del contexto 2D. Este método mueve el origen del contexto a la coordenada `(x, y)` que le pasamos como argumento. Es decir, el centro del contexto ahora estará en la coordenada `(x, y)` que a su vez es el centro del personaje Pac-Man.

##### Prueba

Si has seguido los pasos correctamente, al presionar las teclas de dirección, verás que el personaje Pac-Man cambia de dirección y se mueve en la dirección que has presionado.

Este es el código completo de la implementación:

```javascript
let x = 50;
let y = 50;
let radius = 50;
let mouthAngle = 0;
let mouthSpeed = 0.1;
let direction = "ArrowRight";

// events
document.body.addEventListener("keydown", (e) => {
  console.log("event", e.key);
  if (
    e.key === "ArrowUp" ||
    e.key === "ArrowDown" ||
    e.key === "ArrowLeft" ||
    e.key === "ArrowRight"
  ) {
    direction = e.key;
  }
});

function drawPacman(x, y, radius, mouthAngle, ctx) {
  ctx.save(); // Guarda el estado actual del contexto

  // Mueve el origen al centro de Pac-Man
  ctx.translate(x, y);

  // Calcula el ángulo de rotación según la dirección
  let rotationAngle;
  switch (direction) {
    case "ArrowDown":
      rotationAngle = Math.PI / 2; // 90 grados
      break;
    case "ArrowUp":
      rotationAngle = -Math.PI / 2; // -90 grados
      break;
    case "ArrowLeft":
      rotationAngle = Math.PI; // 180 grados
      break;
    case "ArrowRight":
    default:
      rotationAngle = 0; // Sin rotación para la derecha
      break;
  }

  ctx.rotate(rotationAngle); // Rota el contexto en el ángulo deseado

  // Dibuja el Pac-Man en su dirección
  ctx.beginPath();
  ctx.arc(0, 0, radius, mouthAngle, 2 * Math.PI - mouthAngle);
  ctx.lineTo(0, 0);
  ctx.fillStyle = "yellow";
  ctx.fill();

  ctx.restore(); // Restaura el contexto para que no afecte otros dibujos
}

function updateMouth() {
  mouthAngle += mouthSpeed;
  if (mouthAngle > 0.8 || mouthAngle < 0) mouthSpeed *= -1;
}

function updatePosition() {
  switch (direction) {
    case "ArrowRight":
      x += 1;
      break;
    case "ArrowLeft":
      x -= 1;
      break;
    case "ArrowDown":
      y += 1;
      break;
    case "ArrowUp":
      y -= 1;
      break;
    default:
      console.warn("direction no coincide con ninguno de los casos");
      break;
  }
}

function drawFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGridSystem(); // Dibuja el fondo si tienes un sistema de cuadrícula
  drawPacman(x, y, radius, mouthAngle, ctx);
  updatePosition();
  updateMouth();
}

// Canvas setup
setInterval(drawFrame, 1000 / 60);
```

También podes ver el código completo en la carpeta `Cap-7/practica/2-movimientos` del repositorio de GitHub.

### Capturando eventos del mouse

Además de capturar los eventos del teclado, también podemos capturar los eventos del mouse. Los eventos del mouse son muy útiles para detectar la interacción del usuario con nuestra página web. Algunos eventos del mouse muy comunes son los siguientes:

- **click**: Este evento se dispara cuando el usuario hace clic en un elemento.
- **dblclick**: Este evento se dispara cuando el usuario hace doble clic en un elemento.
- **mouseover**: Este evento se dispara cuando el usuario pasa el mouse sobre un elemento.
- **mouseout**: Este evento se dispara cuando el usuario quita el mouse de un elemento.
- **mousedown**: Este evento se dispara cuando el usuario presiona un botón del mouse.
- **mouseup**: Este evento se dispara cuando el usuario suelta un botón del mouse.

#### Aplicando eventos del mouse en nuestro juego de PacMan

En general y en mi experiencia desarrollando, la mayoría de veces los eventos del mouse en el desarrollo web están vinculados a botones, enlaces o elementos interactivos. En nuestro juego, vamos a añadir un button que al hacer clic empiece el juego.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Eventos del Mouse</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <canvas id="my-canvas" width="400" height="400"></canvas>
    <div class="controls-container">
      <button class="start-button">Start</button>
    </div>
    <script src="js/drawing.js"></script>
    <script type="module" src="js/main.js"></script>
  </body>
</html>
```

##### Añadiendo una variable `on` al código

Para poder controlar el estado del juego, añadiremos una variable `on` que nos permitirá saber si el juego está en marcha o no. Si esto te resulta familiar, estamos hablando de un valor booleano.

```javascript
let on = false;
```

##### Capturando el nodo del botón

Vamos a capturar el nodo del botón usando `document.querySelector` que es una manera bastante común de capturar elementos del DOM.

```javascript
const startButton = document.querySelector(".start-button");
```

Recuerda que el método `document.querySelector` recibe un selector CSS como argumento y devuelve el primer elemento que coincida con el selector CSS. En este caso, estamos capturando el primer elemento que tenga la clase `start-button`.

##### Añadiendo un event listener al botón

Ahora, necesitamos añadir un event listener al botón para que cuando el usuario haga clic en el botón, se ejecute una función que inicie el juego.

```javascript
// Events
startButton.addEventListener("click", (e) => {
  on = !on;
  if (on) {
    startButton.textContent = "Stop";
  } else {
    startButton.textContent = "Start";
  }
});
```

En este caso, estamos añadiendo un event listener al botón para el evento `click`. Cuando el usuario haga clic en el botón, se ejecutará la función que cambia el valor de la variable `on` a su valor contrario. Si `on` es `true`, se cambia a `false` y si `on` es `false`, se cambia a `true`. Además, si `on` es `true`, el texto del botón se cambia a "Stop" y si `on` es `false`, el texto del botón se cambia a "Start".

##### Añadiendo la lógica del juego al bucle principal

Ahora, necesitamos añadir la lógica del juego al bucle principal. Si `on` es `true`, el juego se ejecutará y si `on` es `false`, el juego se detendrá.

Recordemos que nuestro bucle principal esta definido por un `setInterval` que ejecuta la función `drawFrame` cada 16.67 milisegundos.

En este caso, reemplazaremos `drawFrame` por una función flecha anónima que ejecutará la función `drawFrame` solo si `on` es `true`.

```javascript
// bucle principal
setInterval(() => {
  if (on) drawFrame();
}, 1000 / 60);

```

Como se puede ver, hemos añadido una función flecha anónima que ejecuta la función `drawFrame` solo si `on` es `true`. De esta forma, si `on` es `true`, el juego se ejecutará y si `on` es `false`, el juego se detendrá.

##### Prueba

Si has seguido los pasos correctamente, al hacer clic en el botón, verás que el juego se inicia y se detiene dependiendo del estado de la variable `on`.

Este es el código completo de la implementación:

```javascript
let x = 50;
let y = 50;
let radius = 50;
let mouthAngle = 0;
let mouthSpeed = 0.1;
let direction = "ArrowRight";
let on = false;
const startButton = document.querySelector(".start-button");

// events
document.body.addEventListener("keydown", (e) => {
  console.log("event", e.key);
  if (
    e.key === "ArrowUp" ||
    e.key === "ArrowDown" ||
    e.key === "ArrowLeft" ||
    e.key === "ArrowRight"
  ) {
    direction = e.key;
  }
});

startButton.addEventListener("click", (e) => {
  on = !on;
  if (on) {
    startButton.textContent = "Stop";
  } else {
    startButton.textContent = "Start";
  }
});

function drawPacman(x, y, radius, mouthAngle, ctx) {
  ctx.save(); // Guarda el estado actual del contexto

  // Mueve el origen al centro de Pac-Man
  ctx.translate(x, y);

  // Calcula el ángulo de rotación según la dirección
  let rotationAngle;
  switch (direction) {
    case "ArrowDown":
      rotationAngle = Math.PI / 2; // 90 grados
      break;
    case "ArrowUp":
      rotationAngle = -Math.PI / 2; // -90 grados
      break;
    case "ArrowLeft":
      rotationAngle = Math.PI; // 180 grados
      break;
    case "ArrowRight":
    default:
      rotationAngle = 0; // Sin rotación para la derecha
      break;
  }

  ctx.rotate(rotationAngle); // Rota el contexto en el ángulo deseado

  // Dibuja el Pac-Man en su dirección
  ctx.beginPath();
  ctx.arc(0, 0, radius, mouthAngle, 2 * Math.PI - mouthAngle);
  ctx.lineTo(0, 0);
  ctx.fillStyle = "yellow";
  ctx.fill();

  ctx.restore(); // Restaura el contexto para que no afecte otros dibujos
}

function updateMouth() {
  mouthAngle += mouthSpeed;
  if (mouthAngle > 0.8 || mouthAngle < 0) mouthSpeed *= -1;
}

function updatePosition() {
  switch (direction) {
    case "ArrowRight":
      x += 1;
      break;
    case "ArrowLeft":
      x -= 1;
      break;
    case "ArrowDown":
      y += 1;
      break;
    case "ArrowUp":
      y -= 1;
      break;
    default:
      console.warn("direction no coincide con ninguno de los casos");
      break;
  }
}

function drawFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGridSystem(); // Dibuja el fondo si tienes un sistema de cuadrícula
  drawPacman(x, y, radius, mouthAngle, ctx);
  updatePosition();
  updateMouth();
}

// bucle principal
setInterval(() => {
  if (on) drawFrame();
}, 1000 / 60);
```

Recuerda modificar también el archivo `index.html` para añadir el botón y el archivo `styles.css` para darle estilo al botón.

También podes ver el código completo en la carpeta `Cap-7/practica/3-eventosDelMouse` del repositorio de GitHub.