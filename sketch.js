var pipes;
var bird;
var running;
function setup() {
  createCanvas(200, 300);
  init_scene();
}

function init_scene() {
  pipes = [];
  running = true;
  frameCount = 0;
  bird = new Bird();
  pipes.push(new Pipeup());
  pipes.push(new Pipedown());
}

function draw() {
  if (running == true) {
    background(0);
    if (frameCount % (width / 2) == 0) {
      pipes.push(new Pipeup());
      pipes.push(new Pipedown());
    }

    for (var i = 0; i < pipes.length; i++) {
      pipes[i].update();
      if (pipes[i].hits(bird) == true) running = false;
      pipes[i].show();
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
    text(bird.score, 10, 30);
  } else {
    text("GAME OVER", width / 3, height / 2);
    text("Score: " + bird.score, width / 3, height / 2 + 32);
    text("press Space to to play again", width / 3, height / 2 + 64);
  }
}

function ResetBird(b) {
  b.y = height / 2;
}

function keyPressed() {
  if (key == " ") {
    if (running == false) init_scene();
    console.log("space");
    bird.up();
  }
  if (key == "b") {
    ResetBird(bird);
  }
}
