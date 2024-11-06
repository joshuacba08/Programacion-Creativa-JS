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

// Funciones

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
  if (detectCollision(x, y, radius, canvas, direction)) {
    return;
  }
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

function detectCollision(xCircle, yCircle, radius, canvas, direction) {
  if (xCircle + radius >= canvas.width && direction === "ArrowRight") {
    // Colisión detectada con la pared derecha
    return true;
  }

  if (xCircle - radius <= 0 && direction === "ArrowLeft") {
    // Colisión detectada con la pared izquierda
    return true;
  }

  if (yCircle + radius >= canvas.height && direction === "ArrowDown") {
    // Colisión detectada con la pared inferior
    return true;
  }

  if (yCircle - radius <= 0 && direction === "ArrowUp") {
    // Colisión detectada con la pared superior
    return true;
  }

  return false;
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
