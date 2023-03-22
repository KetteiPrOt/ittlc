let videos = [
    videoUno = document.getElementById('videoUno'),
    videoDos = document.getElementById('videoDos'),
    videoTres = document.getElementById('videoTres'),
    videoCuatro = document.getElementById('videoCuatro')
];

function redimencionar() {
    let ancho = window.screen.width;

    if (ancho < 375) {
        for (let i = 0; i < videos.length; i++) {
            let video = videos[i];

            video.width = 250;
            video.height = 125;
        }
    } else if (ancho < 435) {
        for (let i = 0; i < videos.length; i++) {
            let video = videos[i];

            video.width = 350;
            video.height = 150;
        }
    } else if (ancho < 615){
        for (let i = 0; i < videos.length; i++) {
            let video = videos[i];

            video.width = 400;
            video.height = 200;
        }
    } else {
        for (let i = 0; i < videos.length; i++) {
            let video = videos[i];
            video.width = 560;
            video.height = 315;
        }
    }
}

window.addEventListener('resize', redimencionar);

redimencionar();