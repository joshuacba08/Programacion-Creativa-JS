# Funciones en JavaScript

En los capítulos anteriores hemos visto cómo crear instrucciones para dibujar en el canvas de HTML5. Hemos visto cómo dibujar líneas, círculos, rectángulos, etc. Además, habiendo aprendido a crear formas, tuvimos una actividad en la que dibujamos una casa. Esta actividad requirió de muchas instrucciones para dibujar cada parte de la casa, posicionando cada pieza en su lugar.

¿Qué pasa si queremos dibujar otra casa? ¿Tendremos que escribir todas las instrucciones de nuevo? ¿Y si queremos dibujar 10 casas? ¿O 100? ¿O 1000? ¿Tendremos que escribir todas las instrucciones cada vez?

> "Don't repeat yourself"
>
> The Pragmatic Programmer

La respuesta es no, hay un dicho en programación que dice: "Don't repeat yourself" (No te repitas). Si tienes que hacer algo más de una vez, entonces deberías escribir una función que haga ese trabajo por ti. Una función es un bloque de código que realiza una tarea específica. Una vez que has definido una función, puedes llamarla tantas veces como quieras.

Al empaquetar el código en funciones de esta manera, tu programación es más efectiva, ya que no tienes que repetir el código cada vez que quieras usarlo. Además, si necesitas hacer un cambio en el código, solo necesitas hacerlo en un lugar, en la definición de la función, y no en todos los lugares donde se usa.

## Definición de funciones

Para definir una función en JavaScript, usamos la palabra clave `function`, seguida de un nombre para la función, seguido de paréntesis `()`, seguido de llaves `{}` que contienen el código de la función.

```javascript
function nombreDeLaFuncion() {
  // Código de la función
}
```

Por ejemplo, aquí hay una función que dibuja un círculo en el canvas:

```javascript
function dibujarCirculo() {
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, Math.PI * 2);
  ctx.stroke();
}
```

Para llamar a una función, simplemente escribimos su nombre seguido de paréntesis `()`.

```javascript
dibujarCirculo(); // llamada a la función
```

## Parámetros

Las funciones pueden aceptar valores de entrada, llamados parámetros. Los parámetros se colocan entre los paréntesis de la definición de la función. Los parámetros son variables que se utilizan dentro de la función para realizar su tarea.

Por ejemplo, aquí hay una función que dibuja un círculo en una posición específica:

```javascript
function dibujarCirculo(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2);
  ctx.stroke();
}
```

Para llamar a esta función, debemos pasarle dos valores, uno para la posición `x` y otro para la posición `y`.

```javascript
dibujarCirculo(100, 100); // llamada a la función
```

<div style="background-color:black; color:white; width:70px; text-align:center;padding:4px; font-size:20px; font-family: sans-serif">Nota:</div>

> Los parámetros son variables locales a la función, lo que significa que solo existen dentro de la función. No puedes acceder a ellos desde fuera de la función.

## Retorno de valores

Las funciones pueden devolver un valor de salida, llamado valor de retorno. Para devolver un valor de una función, usamos la palabra clave `return`, seguida del valor que queremos devolver.

Siguiendo el ejemplo de la creación de un círculo, podemos crear una función que calcula el área de un círculo y devuelve ese valor.

```javascript
function areaDelCirculo(radio) {
  return Math.PI * radio * radio;
}
```

Para obtener el valor devuelto por la función, simplemente llamamos a la función y almacenamos el valor devuelto en una variable.

```javascript
let area = areaDelCirculo(50);
console.log(area); // 7853.981633974483
```

- En este ejemplo, la función `areaDelCirculo` toma un parámetro `radio` y devuelve el área del círculo. Luego, almacenamos el valor devuelto en la variable `area` y lo imprimimos en la consola.
- La palabra clave `return` finaliza la ejecución de la función y devuelve el valor especificado. Si una función no tiene una declaración de retorno, devuelve `undefined`.
- Una función puede tener múltiples declaraciones de retorno, pero solo se ejecutará una de ellas.

## Ejemplo

Vamos a crear una función que dibuje una casa en una posición específica. La función aceptará dos parámetros, `x` e `y`, que representan la posición de la esquina superior izquierda de la casa.

```javascript
function dibujarCasa(x, y) {
  // Dibujar la casa
  ctx.beginPath();
  ctx.rect(x, y, 200, 150);
  ctx.stroke();

  // Dibujar la puerta
  ctx.beginPath();
  ctx.rect(x + 75, y + 100, 50, 50);
  ctx.stroke();

  // Dibujar la ventana
  ctx.beginPath();
  ctx.rect(x + 25, y + 25, 50, 50);
  ctx.stroke();

  // Dibujar el techo
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 100, y - 50);
  ctx.lineTo(x + 200, y);
  ctx.closePath();
  ctx.stroke();
}
```

Para llamar a esta función, simplemente pasamos las coordenadas `x` e `y` donde queremos que se dibuje la casa.

```javascript
dibujarCasa(100, 100); // llamada a la función
```

## Conclusión

Las funciones son una parte fundamental de la programación en JavaScript. Nos permiten encapsular bloques de código en unidades reutilizables, lo que hace que nuestro código sea más limpio y fácil de mantener. Al definir funciones, podemos dividir nuestro código en partes más pequeñas y manejables, lo que facilita la comprensión y la depuración.
