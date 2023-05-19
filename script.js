const targetElement = document.getElementById("target-element");

function counterClick(event) {
  // Periksa apakah event target adalah elemen yang diinginkan
  if (event.target === targetElement) {
    // Tambahkan kode yang ingin dijalankan saat elemen tersebut diklik
  }
}
var audio = new Audio('audio/bgm.mp3');
  audio.play();

document.addEventListener("click", counterClick);  //varible
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
        const counter_button = document.getElementById("counter-button");
        let id = null;

        const random = Math.floor(Math.random() * 3) + 1;
        const elem = document.createElement("img");
        elem.src = `img/hertaa${random}.gif`;
        elem.classList.add("animate-herta-img");
        elem.style.position = "fixed";
        elem.style.right = "-510px";
        elem.style.top = counter_button.getClientRects()[0].bottom + scrollY - 120 + "px"
        elem.style.zIndex = "-1";
        document.body.appendChild(elem);

        let pos = -510;
        const limit = window.innerWidth + 510;
        clearInterval(id);
        id = setInterval(() => {
            if (pos >= limit) {
                clearInterval(id);
                elem.remove()
            } else {
                pos += 20;
                elem.style.right = pos + 'px';
            }
        }, 12);
    }

    function animateImage(direction) {
        const elem = document.createElement("img");
        elem.src = "img/hertaa1.gif";
        elem.classList.add("animate-image");
        elem.style.position = "fixed";
        elem.style.zIndex = "-1";
      
        let startPos, endPos, increment;
        if (direction === "atas") {
          startPos = window.innerHeight;
          endPos = -elem.height;
          increment = -10;
          elem.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
          elem.style.top = startPos + "px";
        } else if (direction === "bawah") {
          startPos = -elem.height;
          endPos = window.innerHeight;
          increment = 10;
          elem.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
          elem.style.top = startPos + "px";
        } else if (direction === "kiri") {
          startPos = window.innerWidth;
          endPos = -elem.width;
          increment = -10;
          elem.style.left = startPos + "px";
          elem.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
        } else if (direction === "kanan") {
          startPos = -elem.width;
          endPos = window.innerWidth;
          increment = 10;
          elem.style.left = startPos + "px";
          elem.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
        }
      
        document.body.appendChild(elem);
      
        let pos = startPos;
        const id = setInterval(() => {
          if ((increment > 0 && pos >= endPos) || (increment < 0 && pos <= endPos)) {
            clearInterval(id);
            elem.remove();
          } else {
            pos += increment;
            if (direction === "atas" || direction === "bawah") {
              elem.style.top = pos + "px";
            } else {
              elem.style.left = pos + "px";
            }
          }
        }, 12);
      }
      
      // Contoh penggunaan
      animateImage("atas"); // Gambar bergerak dari bawah ke atas
      animateImage("bawah"); // Gambar bergerak dari atas ke bawah
      animateImage("kiri"); // Gambar bergerak dari kanan ke kiri
      animateImage("kanan"); // Gambar bergerak dari kiri ke kanan
      // Variabel audio
const slideElement = document.getElementById("slide-element");
const audioElement = document.getElementById("audio-element");

slideElement.addEventListener("touchstart", () => {
  audioElement.pause();
});
