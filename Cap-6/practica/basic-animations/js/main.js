let x = 50;
let y = 50;
let radius = 50;
let mouthAngle = 0;
let mouthSpeed = 0.1;

function drawPacman(x, y, radius, mouthAngle, ctx) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0 + mouthAngle, 2 * Math.PI - mouthAngle);
  ctx.lineTo(x, y);
  ctx.fillStyle = "yellow";
  ctx.fill();
}

function updateMouth() {
  mouthAngle += mouthSpeed;
  if (mouthAngle > 0.8 || mouthAngle < 0) mouthSpeed *= -1;
}

function updatePosition() {
  x += 1;
}

function drawFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGridSystem();
  drawPacman(x, y, radius, mouthAngle, ctx);
  updatePosition();
  updateMouth();
}

setInterval(drawFrame, 1000 / 60);
