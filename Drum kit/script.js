var buttons=document.querySelectorAll(".drum");

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        let buttonName=buttons[i].innerHTML.toLowerCase();

        let audio=document.querySelector("#"+buttonName);
        audio.currentTime=0;
        audio.play();
    })
}

//Keyboard key press event
document.addEventListener("keydown",function(event){
    let keyName=event.key.toLowerCase();
    let audio=document.querySelector("#"+keyName);
    if(audio!=null){
        //audio.currentTime=0;
        audio.play();
    }
})