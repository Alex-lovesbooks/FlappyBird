// function Bird(){
//   this.y = height/2;
//   this.x = 25;
//   this.show = function (){
//     fill(255);
//     ellipse(this.y, this.x, 16, 16);
//   }
// }

function Bird() {
  this.x = height / 2;
  this.y = 100;
  this.gravity = 0.01;
  this.lift = -20;
  this.velocity = 0.1;
  this.show = function () {
    fill(255);
    ellipse(this.y, this.x, 32, 32);
  };
  this.up = function () {
    this.velocity = this.lift / 2;
  };

  this.update = function () {
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
  };
}
