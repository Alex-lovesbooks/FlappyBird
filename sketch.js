var pipes = [];
function setup() {
  createCanvas(200, 300);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  bird.update();
  bird.show();
  for (var i = pipes.lenght - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    console.log("xx");
  }
}

function ResetBird(b) {
  b.x = height / 2;
}

function keyPressed() {
  if (key == "a") {
    console.log("space");
    bird.up();
  }
  if (key == "b") {
    ResetBird(bird);
  }
}
