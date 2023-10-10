var noseX=0
var noseY=0
var imgBaseball
function preload(){
imgBaseball=loadImage('bigode.jpg')

}
function setup(){
  canvas=createCanvas(330,330 );
  canvas.center()
  video=createCapture(VIDEO);
  video.center()
  video.hide();

  posenet=ml5.poseNet(video,modelLoaded)
  posenet.on('pose',gotPoses) 
  
}

function modelLoaded(){
  console.log('modelo carregado')
}

function gotPoses(results){
if(results.length>0){
  console.log(results)
  noseX=results[0].pose.nose.x-168
  noseY=results[0].pose.nose.y-80

}
}

function draw(){
image(video,0,0,330,330);
  
  fill('red');
  stroke('red');
 // circle(noseX,noseY,30,30);//
  image(imgBaseball,noseX,noseY,60,60)
}
function takeSnapshot(){
  save('filter.png')
}
