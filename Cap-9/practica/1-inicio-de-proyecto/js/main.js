let on = true;
ball.draw();

function drawFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGridSystem(); // dibujar la cuadrícula
  ball.draw(); // dibujar la bola
  ball.updatePosition(); // actualizar la posición de la bola
}

// bucle principal
setInterval(() => {
  if (on) drawFrame();
}, 1000 / 60);
