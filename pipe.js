function Pipe() {
  this.top = random(height / 2);
  this.bottom = random(height / 2);
  this.y = width;
  this.w = 20;
  this.speed = 5;

  this.show = function () {
    fill(255);
    rect(this.y, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  };
  this.update = function () {
    thix.y -= this.speed;
  };
}
