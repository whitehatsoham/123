song_1 = "";
song_2 = "";

song1_status="";
song2_status="";

function preload(){
    song_1=loadSound("music.mp3");
    song_2=loadSound("music2.mp2");
}

function setup(){
canvas=createCanvas(600, 500);
canvas.center();
video=createCapture(VIDEO);
video.height
}
function draw(){
    image(video, 0, 0, 600, 500);
}