// import { pipes } from "./sketch";

function Pipe() {
  this.top = random(height / 2);
  this.bottom = random(height / 2);
  this.y = width;
  this.w = 20;
  this.speed = 1;

  this.show = function () {
    fill(255);
    rect(this.y, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  };
  this.update = function () {
    thix.y -= this.speed;
  };
}
function draw() {
  background(0);
  bird.update();
  bird.show();
  if (frameCount % 40 == 0) {
    pipes.push(new Pipe());
  }
  for (var i = 0; i < pipes.lenght; i++) {
    pipes[i].show();
    pipes[i].update();
  }
}
