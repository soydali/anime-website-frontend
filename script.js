var section = document.querySelector("section");
var audio = document.querySelector("audio");
var intro_video = document.querySelector("#intro-video");
var isPlay = false;


section.addEventListener("click", ()=>{
    if(!isPlay){
        intro_video.play();
        audio.play();
        isPlay = true;
    }else{
        intro_video.pause();
        audio.pause();
        isPlay = false;
    }
});