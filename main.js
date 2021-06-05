status ="";
video ="";


function preload(){
    webcam = createVideo("mp4 video.gif");
    webcam.hide(); 
}

function setup(){
    canvas = createCanvas(470,300)
    canvas.center();
}



function start(){
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("input").value;
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
   

}

function gotResult(error,results){
    if (error){
        console.log(error);
    }else
    {
        console.log(results);
        objects = results;
    }
    
}

function draw(){
    image(video,0,0,470,300);
    if(status != ""){
        objectDetector.detect(video,gotResult);

        for(i=0; i<objects.length;i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected ";
            document.getElementById("number_of_objects").innerHTML = "Number of Objects :" + objects.length;

            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent +"%" ,objects[i].x + 15,objects[i].y +15);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        }

    }
}
