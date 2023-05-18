document.addEventListener("click", counterClick);
  //varible
    var audioList = [
        new Audio("audio/kuruto.mp3"),
        new Audio("audio/kuru1.mp3"),
        new Audio("audio/kuru2.mp3"),
    ];

    for (const audio of audioList) {
        audio.preload = "auto";
    }

    var firstSquish = true;
    //end varible
    if (!localStorage.getItem("count")) {
        localStorage.setItem("count", 0);
    }

    let temporaryCounter = parseInt(localStorage.getItem("count"));
    const counterElement = document.getElementById("counter");
    const counterTimesElement = document.getElementById("counter-times");
    
    displayCounter(temporaryCounter);

    function resetCounter() {
        temporaryCounter = 0;
        displayCounter(temporaryCounter);
        localStorage.setItem("count", temporaryCounter);
    }
    
    //counter button
      function counterClick() {
        ++temporaryCounter;
        displayCounter(temporaryCounter);
        localStorage.setItem("count", temporaryCounter);

        playKuru();
        animateHerta();
    }
    
    function displayCounter(value) {
        counterElement.innerText = value;
        counterTimesElement.innerText = value === 1 ? " " : " ";
    }


    function playKuru() {
        var audio;

        if (firstSquish) {
            firstSquish = false;
            audio = audioList[0].cloneNode();
        } else {
            var random = Math.floor(Math.random() * 2) + 1;
            audio = audioList[random].cloneNode();
        }

        audio.play();

        audio.addEventListener("ended", function () {
            this.remove();
        });
    }

    function animateHerta() {
        var counter_button = document.getElementById("counter-button");
        var id = null;

        var random = Math.floor(Math.random() * 2) + 1;
        var elem = document.createElement("img");
        elem.src = `img/hertaa${random}.gif`;
        elem.style.position = "fixed";
        elem.style.right = "15px";
        elem.style.top = counter_button.getClientRects()[0].bottom + scrollY - 120 + "px"
        elem.style.zIndex = "-1";
        document.body.appendChild(elem);

        var pos = -15;
        var limit = window.innerWidth + -50;
        clearInterval(id);
        id = setInterval(frame, 12);
        function frame() {
            if (pos >= limit) {
                clearInterval(id);
                elem.remove()
            } else {
                pos += 15;
                elem.style.right = pos + 'px';
            }
        }
    }

    //end counter button
// Variabel audio
var audio = new Audio("audio/bgm.mp3"); // Ganti "nama_file_audio.mp3" dengan URL atau path file audio yang ingin digunakan

// Fungsi tombol pause
function pauseAudio() {
    audio.pause();
}

// Fungsi tombol reset
function resetAudio() {
    audio.currentTime = 0;
}

// Fungsi tombol autoloop
function toggleAutoLoop() {
    audio.loop = !audio.loop;
}

// Panggil fungsi toggleAutoLoop saat halaman dimuat
window.onload = function() {
    toggleAutoLoop();
};
// Fungsi autoplay
function autoplayAudio() {
    audio.play();
}

// Panggil fungsi autoplay saat halaman dimuat
window.onload = function() {
    autoplayAudio();
};
// Fungsi resume audio
function resumeAudio() {
    audio.play();
}
