function setTheme(themeName) {
    document.body.classList.remove('dark', 'gen-art');


    var particlesDiv = document.getElementById('particles-js');


    if (themeName == 'gen-art'){
        document.body.classList.add('gen-art');
        particlesDiv.style.display = 'block';
            particlesJS("particles-js", {
                "particles": {
                "number": {
                "value": 100,
                "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#072444" },
                "shape": { "type": "circle" },
                "opacity": {
                "value": 0.8,
                "random": false
                },
                
                "size": {
                    "value": 5,
                    "random": true
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#083e78",
                    "opacity": 0.6,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                    }
                },
                "retina_detect": true
                });

    } else{
        particlesDiv.style.display ='none'
        if(themeName === 'dark'){
            document.body.classList.add('dark')
    }

    }
    
}

let currentAudio = null;


let isMuted = false;









const canvas2 = document.getElementById('KnowledgeMap')









function toggleUpvote(button){

    if (isMuted) return;

    button.classList.toggle('clicked')

    const upvoteSound = new Audio('audio/ding sound effect.mp3')
    upvoteSound.volume = 0.5;
    upvoteSound.play();


}






function toggleMute(){
    isMuted = !isMuted;
    const muteIcon = document.getElementById('muteIcon');

    if (isMuted){
        muteIcon.innerText = "🔇";

        if(currentAudio){
            currentAudio.pause();
        }
    } else{
        muteIcon.innerText = "🔊";
    }
}











function playHoverSound(){

    if (isMuted) return;

    if (currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio('audio/upbeat 1.mp3')
    currentAudio.volume = 0.3

    currentAudio.play().catch(error => {
        console.log("file missing for upbeat1", error);
    });
}

function playHoverSound2(){

    if (isMuted) return;

    if (currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio('audio/upbeat 2.mp3')
    currentAudio.volume = 0.3

    currentAudio.play().catch(error => {
        console.log("file missing for upbeat1", error);
    });
}

function playHoverSound3(){

    if (isMuted) return;

    if (currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio('audio/upbeat 3.mp3')
    currentAudio.volume = 0.3

    currentAudio.play().catch(error => {
        console.log("file missing for upbeat1", error);
    });
}





















function stopHoverSound(){
    if (currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}




const video = document.getElementById('videoSource');

const canvas = document.getElementById('chromaCanvas');
const ctx = canvas.getContext('2d', {willReadFrequently: true});



video.addEventListener('play', () => {
    function computeFrame(){
        if (video.paused || video.ended) return;

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);


        const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const length = frame.data.length;


        for (let i = 0; i< length; i +=4){
            let r = frame.data[i + 0];
            let g = frame.data[i + 1];
            let b = frame.data[i + 2];


            if (g > r * 1.2 && g > b * 1.2  && g > 70){
                frame.data[i + 3] = 0;
            }

        }

        ctx.putImageData(frame, 0, 0);

        requestAnimationFrame(computeFrame);

    }

    computeFrame();


}); 












