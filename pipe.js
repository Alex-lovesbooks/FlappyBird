// import { pipes } from "./sketch";

class Pipe {
  constructor() {
    this.y = 0;
    this.x = 0;
    this.pipe_width = 0;
    this.pipe_height = 0;

    this.speed = 1;
  }

  hits() {
    if (bird.x < this.pipe_height || bird.x > height - this.bottom)
      if (bird.y > this.y && bird.y < this.y + this.pipe_width) return true;
      else return false;
  }

  show() {
    fill(255);
    rect(this.y, this.x, this.pipe_width, this.pipe_height);
  }
  update() {
    this.y -= this.speed;
  }
  outside_screen() {
    if (this.y < -200) return true;
    else return false;
  }
}

class Pipeup extends Pipe {
  constructor() {
    super();
    this.y = width;
    this.x = 0;
    this.pipe_width = 20;
    this.pipe_height = random(height / 2 - 100, height / 2 - 32);
  }
}
class Pipedown extends Pipe {
  constructor() {
    super();

    this.bottom = random(height / 2 - 100, height / 2 - 32);

    this.y = width;
    this.x = height - this.bottom;
    this.pipe_width = 20;
    this.pipe_height = this.bottom;
  }
}
