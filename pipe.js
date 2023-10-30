// import { pipes } from "./sketch";

class Pipe {
  constructor() {
    // (0, 0) e in stanga sus
    // (W, H) e in dreapta jos
    // (x, y) - colt stanga sus
    // (h, w) - colt dreapta jos

    this.x = 0;
    this.y = 0;

    this.pipe_width = 0;
    this.pipe_height = 0;

    this.speed = 1;

    this.highlight = false;
  }

  // hits(bird) {
  //   if (bird.x > s.x && bird.x < this.x + this.pipe_width) {
  //     if (bird.y > this.y && bird.y < this.y + this.pipe_height) {
  //       this.highlight = true;
  //       console.log("t");
  //       return true;
  //     }
  //   }
  //   this.highlight = false;
  //   console.log("x");
  //   return false;
  // }

  hits(bird) {
    this.highlight = false;

    if (
      bird.x > this.x - bird.radius &&
      bird.x < this.x + this.pipe_width + bird.radius &&
      bird.y > this.y - bird.radius &&
      bird.y < this.y + this.pipe_height + bird.radius
    ) {
      this.highlight = true;
    }
    return this.highlight;
  }

  show() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, this.y, this.pipe_width, this.pipe_height);
  }
  update() {
    this.x -= this.speed;
  }
  outside_screen() {
    if (this.x < -200) return true;
    else return false;
  }
}

class Pipeup extends Pipe {
  constructor() {
    super();
    this.x = width;
    this.y = 0;
    this.pipe_width = 20;
    this.pipe_height = random(height / 2 - 100, height / 2 - 32);
  }
}
class Pipedown extends Pipe {
  constructor() {
    super();

    var bottom = random(height / 2 - 100, height / 2 - 32);

    this.y = height - bottom;
    this.x = width;
    this.pipe_width = 20;
    this.pipe_height = bottom;
  }
}
