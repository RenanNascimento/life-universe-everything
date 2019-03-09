const initSliderRange = 0;
const endSliderRange = 15;
const xSlider = 20;
const ySlider = xSlider;
const xSliderText = 155;
const ySliderText = 65;
const xSeriesOffset = 35;
const numSpacing = 50;

let intSlider;
let font, fontsize = 40;

function preload() {
  font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
  // Create canvas
  createCanvas(window.innerWidth, window.innerHeight);
  strokeWeight(1);
  stroke(255);

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

  // Create slider
  intSlider = createSlider(initSliderRange, endSliderRange, initSliderRange);
  intSlider.position(xSlider, ySlider);
}

function draw() {
  background(0);
  let i = intSlider.value();

  text('Number of 1\'s: '+i, xSliderText, ySliderText);

  fill(255);
  let num = sumBy13(multiplyBy8(numOnlyDigitsEight(i)))+'';
  let digits = num.match(/\d/g);
  digits.forEach((d, index) => {
    text(char(d.charCodeAt(0)), index*numSpacing+xSeriesOffset, window.innerHeight/2);
  });
}