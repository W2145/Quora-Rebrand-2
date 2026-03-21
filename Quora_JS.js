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






function toggleUpvote(button){
    button.classList.toggle('clicked')
}



