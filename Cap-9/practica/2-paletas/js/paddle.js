const paddle_player1 = {
  x: 10,
  y: canvas.height / 2 - 30,
  width: 10,
  height: 60,
  color: "#fb2e01",
  speed: 5,
  side: "left",
  draw: function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
  updatePosition: function () {
    this.checkCollision();
  },
  moveUp: function () {
    this.y -= this.speed;
  },
  moveDown: function () {
    this.y += this.speed;
  },
  checkCollision: function () {
    if (this.y < 0) {
      this.y = 0;
    } else if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height;
    }
  },
};

const paddle_player2 = {
  x: canvas.width - 20,
  y: canvas.height / 2 - 30,
  width: 10,
  height: 60,
  color: "#6fcb9f",
  speed: 5,
  side: "right",
  draw: function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
  updatePosition: function () {
    this.checkCollision();
  },
  moveUp: function () {
    this.y -= this.speed;
  },
  moveDown: function () {
    this.y += this.speed;
  },
  checkCollision: function () {
    if (this.y < 0) {
      this.y = 0;
    } else if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height;
    }
  },
};