const ball = {
  x: 100,
  y: 50,
  dx: 2,
  dy: 2,
  radius: 6,
  color: "#FFFFFF",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
  },
  updatePosition: function () {
    this.x += this.dx;
    this.y += this.dy;
    this.checkCollision();
  },
  checkCollision: function () {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.reverseDirection("x");
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.reverseDirection("y");
    }
  },
  reverseDirection: function (axis) {
    if (axis === "x") {
      this.dx = -this.dx;
    } else if (axis === "y") {
      this.dy = -this.dy;
    }
  },
};