function drawPacman(x, y, radius, ctx) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0.2 * Math.PI, 1.8 * Math.PI);
  ctx.lineTo(x, y);
  ctx.fillStyle = "yellow";
  ctx.fill();
}

function drawRandomPacmans(n, ctx) {
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * ctx.canvas.width);
    const y = Math.floor(Math.random() * ctx.canvas.height);
    const radius = Math.floor(Math.random() * 100) + 50;
    drawPacman(x, y, radius, ctx);
  }
}

drawRandomPacmans(5, ctx);
