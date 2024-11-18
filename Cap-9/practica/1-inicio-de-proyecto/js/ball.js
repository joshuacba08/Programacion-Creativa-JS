const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  dx: 2,
  dy: 2,
  radius: 6,
  color: "#FFFFFF",
  draw: function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
    },
    updatePosition: function(){
        this.x += this.dx;
        this.y += this.dy;
    },
    
};