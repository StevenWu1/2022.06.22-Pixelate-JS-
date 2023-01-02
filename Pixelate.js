let img;
let gridSize = 32; // number of rows and cols
let button1;
let button2;
let ticks = 0;
let multiplier = 0.5;

// CHOOSE ONE
let imgUrl =
  "https://happycoding.io/images/stanley-1.jpg";
// imgAsset("cute-monkey.jpg");
// imgAsset("hugging-meerkats.jpg");
// imgAsset("mondrian-c-iii.jpg");
// imgAsset("creative-coding.png");

function imgAsset(filename) {
  const url =
    "https://raw.githubusercontent.com/UChicago-PL/" +
    "cs11111-assets/main/pixelate/" +
    filename;
  return url;
}

function preload() {
  img = loadImage(imgUrl);
}

function setup() {
  frameRate(1);
  img.resize(400, 0); // height is auto-scaled
  createCanvas(img.width, img.height);
  // imgCopy.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
  button1 = createButton("Animation Reset");
  button1.mousePressed(resetPic);
  button2 = createButton("Reverse Pixelation");
  button2.mousePressed(reverseMultiplier);
}

function draw() {
  background("white");
  image(img, 0, 0);

  console.log(`gridSize: ${gridSize} x ${gridSize}`);

  if (ticks > 0) {
    for (let col = 0; col < gridSize; col++) {
      for (let row = 0; row < gridSize; row++) {
        blurGridCell( row, col);
      }
    }
  
  drawGrid();

    if ((gridSize > 1 && multiplier < 1) || (gridSize < 64 && multiplier > 1)) {
      gridSize = gridSize * multiplier;
    }
  }
  ticks++;
}

function drawGrid() {
  stroke("#80808080");
  for (let i = 0; i < gridSize; i++) {
    const w = width / gridSize;
    const h = height / gridSize;
    line(0, i * h, width, i * h);
    line(i * w, 0, i * w, height);
  }
}

function blurGridCell(row, col) {
  const w = width / gridSize;
  const h = height / gridSize;
  let x = w * row;
  let y = h * col;
  
  c = img.get(x + w / 2, y + h / 2);
  noStroke();
  fill(c);
  
  square(x, y, w);
}

function resetPic() {
  background("white");
  gridSize = 32;
  ticks = 0;
  multiplier = 0.5;
}

function reverseMultiplier() {
  multiplier = pow(multiplier, -1);
}

function imgAsset(filename) {
  const url =
    "https://raw.githubusercontent.com/UChicago-PL/" +
    "cs11111-assets/main/pixelate/" +
    filename;
  return url;
}

function preload() {
  img = loadImage(imgUrl);
}

function setup() {
  frameRate(1);
  img.resize(400, 0); // height is auto-scaled
  createCanvas(img.width, img.height);
  // imgCopy.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
  button1 = createButton("Animation Reset");
  button1.mousePressed(resetPic);
  button2 = createButton("Reverse Pixelation");
  button2.mousePressed(reverseMultiplier);
}

function draw() {
  background("white");
  image(img, 0, 0);

  console.log(`gridSize: ${gridSize} x ${gridSize}`);

  if (ticks > 0) {
    for (let col = 0; col < gridSize; col++) {
      for (let row = 0; row < gridSize; row++) {
        blurGridCell(row, col);
      }
    }
  
  drawGrid();

    if ((gridSize > 1 && multiplier < 1) || (gridSize < 64 && multiplier > 1)) {
      gridSize = gridSize * multiplier;
    }
  }
  ticks++;
}

function drawGrid() {
  stroke("#80808080");
  for (let i = 0; i < gridSize; i++) {
    const w = width / gridSize;
    const h = height / gridSize;
    line(0, i * h, width, i * h);
    line(i * w, 0, i * w, height);
  }
}

function blurGridCell(row, col) {
  const w = width / gridSize;
  const h = height / gridSize;
  let x = w * row;
  let y = h * col;
  
  c = img.get(x + w / 2, y + h / 2);
  noStroke();
  fill(c);
  
  square(x, y, w);
}

function resetPic() {
  background("white");
  gridSize = 32;
  ticks = 0;
  multiplier = 0.5;
}

function reverseMultiplier() {
  multiplier = pow(multiplier, -1);
}
