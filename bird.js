class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 100;
    this.gravity = 0.01;
    this.lift = -15;
    this.velocity = 0.1;
    this.score = 0;

    this.radius = 16;
  }
  show() {
    fill(255);
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  up() {
    this.velocity = this.lift / 2;
  }

  update() {
    this.velocity += this.gravity / 2;
    this.y += this.velocity / 2;
    this.velocity += 0.4;
    if (this.y > height - this.radius) {
      this.y = height - this.radius;
      this.velocity = 0;
    }
    if (this.y < this.radius) {
      this.y = this.radius;
      this.velocity = 0;
    }
  }
}
