var pipes = [];
function setup() {
  createCanvas(200, 300);
  bird = new Bird();
  pipes.push(new Pipeup());
  pipes.push(new Pipedown());
}

function draw() {
  background(0);
  if (frameCount % (width / 2) == 0) {
    pipes.push(new Pipeup());
    pipes.push(new Pipedown());
  }

  for (var i = 0; i < pipes.length; i++) {
    pipes[i].update();
    pipes[i].show();
    if (pipes[i].hits() == true) console.log("hit");
  }

  var to_remove_pipes = [];
  for (var i = 0; i < pipes.length; i++) {
    if (pipes[i].outside_screen()) {
      to_remove_pipes.push(i);
    }
  }
  for (var i = to_remove_pipes.length - 1; i >= 0; i--) {
    pipes.splice(to_remove_pipes[i], 1);
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
