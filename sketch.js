var pipes = [];
function setup() {
  createCanvas(200, 300);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
  for (var i = 0; i < pipes.length; i++) {
    pipes[i].update();
    pipes[i].show();
  }
  bird.update();
  bird.show();
}

function ResetBird(b) {
  b.x = height / 2;
}

function keyPressed() {
  if (key == " ") {
    console.log("space");
    bird.up();
  }
  if (key == "b") {
    ResetBird(bird);
  }
}
