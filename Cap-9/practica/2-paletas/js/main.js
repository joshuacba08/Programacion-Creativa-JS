let on = true;
ball.draw();

function drawFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGridSystem(); // dibujar la cuadrícula
  ball.draw(); // dibujar la bola
  ball.updatePosition(); // actualizar la posición de la bola
   paddle_player1.draw(); // dibujar la paleta del jugador 1
  paddle_player2.draw(); // dibujar la paleta del jugador 2
}

// eventos
canvas.addEventListener("mousemove", (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseY = event.clientY - rect.top;
  paddle_player2.y = mouseY - paddle_player1.height / 2;
});

// bucle principal
setInterval(() => {
  if (on) drawFrame();
}, 1000 / 60);
