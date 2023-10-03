class Bird {
  constructor() {
    this.x = height / 2;
    this.y = 100;
    this.gravity = 0.01;
    this.lift = -15;
    this.velocity = 0.1;
  }
  show() {
    fill(255);
    ellipse(this.y, this.x, 32, 32);
  }

  up() {
    this.velocity = this.lift / 2;
  }

  update() {
    this.velocity += this.gravity / 2;
    this.x += this.velocity / 2;
    this.velocity += 0.4;
    if (this.x > height - 16) {
      this.x = height - 16;
      this.velocity = 0;
    }
    if (this.x < 16) {
      this.x = 16;
      this.velocity = 0;
    }
  }
}
