function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGridSystem();
  circle.draw();
  rectangle.draw();
}

draw();