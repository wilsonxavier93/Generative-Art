function setup() {
  createCanvas(1080, 1920);
  background(0);
  randomSeed(5);

  let palette = [
    color(135, 166, 128),
    color(247, 233, 152),
    color(255, 255, 255),
    color(219, 62, 28),
    color(79, 54, 75),
    color(202, 186, 216),
    color(88, 132, 231),
  ]


  let w = 40;
  for (let x = 0; x < width; x += w) {
    for (let y = 0; y < height; y += w) {
      noStroke();
      fill(random(palette));
      square(x, y, w);
    }
  }


  for (let x = 0; x < width; x += w) {
    for (let y = 0; y < height; y += w) {
      noFill();
      stroke(random(palette));
      strokeWeight(w / 2);
      strokeCap(SQUARE)
      push();
      translate(x + w / 2, y + w / 2);
      let offset = int(random(4));
      rotate((offset * PI) / 2);
      arc(
        -w / 2,
        -w / 2,
        w * 2 - w / 2,
        w * 2 - w / 2,
        0,
        PI / 2
    );
    pop();
    }
  }

  // for (let x = 0; x < width; x += w) {
  //   for (let y = 0; y < height; y += w) {
  //     noStroke();
  //     fill(random(palette));
  //     circle(x, y, w);
  //   }
  // }

}
