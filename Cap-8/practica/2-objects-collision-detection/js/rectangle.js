let rectangle = {
  x: 200,
  y: 200,
  width: 100,
  height: 50,
  color: "blue",
  draw: function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};
