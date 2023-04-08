leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(50, 30);
    canvas = createCanvas(550, 450);
    canvas.position(680, 120);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw() {
    background("#5196e3");
    textSize(difference);
    fill("#00ff0a");
    text('AARAV', 50, 400);
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = " + difference + "px";
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotposes(results, error) {
    if (error) {
        console.error(error);
    }
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("rightWristX = " + results[0].pose.rightWrist.x + " rightWristY = " + results[0].pose.rightWrist.y);
        console.log("leftWristX = " + results[0].pose.leftWrist.x + " leftWristY = " + results[0].pose.leftWrist.y);
        difference = floor(leftWristX - rightWristX);
    }
}