document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  const radius = 120;

  // Dibujar el círculo
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = "#000000";
  ctx.stroke();

  // Dibujar la línea del radio
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + radius, centerY);
  ctx.strokeStyle = "#FF0000";
  ctx.stroke();

  // Calcular el área del círculo
  const area = Math.PI * Math.pow(radius, 2);

  // Mostrar el área en el documento
  document.getElementById(
    "area"
  ).textContent = `El área del círculo es: ${area.toFixed(
    2
  )} unidades cuadradas.`;
});