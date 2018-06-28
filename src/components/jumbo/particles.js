const options = {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 15
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1.5,
                "opacity_min": 0.15,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.15,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 110,
            "color": "#ffffff",
            "opacity": 0.25,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 100,
                "size": 3,
                "duration": 2,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 50,
                "duration": 0.4,
            },
            "push": {
                "particles_nb": 3
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};


(function(){
    setTimeout(function(){
        particlesJS("particle", options);
        window.dispatchEvent(new Event('resize'));
    }, 100)
})()