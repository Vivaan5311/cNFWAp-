noseX=0;
noseY=0;

function preload() {
  moustache = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-4o3nOGv2ohkK_DYRvNKcfbaSwcrLPM26g&usqp=CAU');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO)
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Intitialized');
}

function draw() {
image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
  if(results.lenght > 0)
  {
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  }
};




