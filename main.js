function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/NpwafkJJS/model.json',modelready);
}
function modelready(){
classifier.classify(gotResults);
}
function gotResults(error,results){


if (error){
    console.error(error);   
} else {
    console.log(results);
    r = Math.floor(Math.random()*255) + 1;
    g = Math.floor(Math.random()*255) + 1;
    b = Math.floor(Math.random()*255) + 1;

    document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label;
    document.getElementById("result_confidence").innerHTML = "Accuracy - "+(results[0].confidence * 100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
    document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";
    
    img1 = document.getElementById("alien_1");
    img2 = document.getElementById("alien_1");
    img3 = document.getElementById("alien_1");
    img4 = document.getElementById("alien_1");   

    if(results[0].label == "clap"){
        img1.src = "aliens-01.gif";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img3.src = "aliens-04.png";
    }
    else if (results[0].label == "bell"){
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.gif";
        img3.src = "aliens-03.png";
        img3.src = "aliens-04.png";
    }
    else if (results[0].label == "snap"){
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.gif";
        img3.src = "aliens-04.png";
    }
    else if (results[0].label == "BackgroundNoise"){
        img1.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img3.src = "aliens-04.gif";
    }
}
}