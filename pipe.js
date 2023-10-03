// import { pipes } from "./sketch";

function Pipeup() {
  this.top = random(height / 2 - 100, height / 2 - 32);
  this.y = width;
  this.pipe_width = 20;
  this.speed = 1;

  this.show = function () {
    fill(255);
    rect(this.y, 0, this.pipe_width, this.top);
  };
  this.update = function () {
    this.y -= this.speed;
  };
}
function Pipedown() {
  this.bottom = random(height / 2 - 100, height / 2 - 32);
  this.y = width;
  this.pipe_width = 20;
  this.speed = 1;

  this.show = function () {
    fill(255);
    rect(this.y, height - this.bottom, this.pipe_width, this.bottom);
  };
  this.update = function () {
    this.y -= this.speed;
  };
}
// function draw() {
//   background(0);
//   bird.update();
//   bird.show();
//   if (frameCount % 40 == 0) {
//     pipes.push(new Pipe());
//   }
//   for (var i = 0; i < pipes.lenght; i++) {
//     pipes[i].show();
//     pipes[i].update();
//   }
