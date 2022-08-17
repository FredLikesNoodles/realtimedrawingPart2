function preload() {}
function setup() {
  canvas = createCanvas(600, 550);
  canvas.position(150, 180);
  video = createCapture(VIDEO);
  video.size(600, 550);
  model1 = ml5.poseNet(video, modelLoaded);
  model1.on("pose", gotPoses);
}
function modelLoaded() {
  console.log("Model has been loaded");
}
function draw() {
  background("white");
}
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
  }
}
