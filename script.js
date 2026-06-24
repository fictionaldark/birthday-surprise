// ================= MUSIC CONTROLS =================
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.volume = 0.8;
    music.play()
      .then(() => {
        isPlaying = true;
        musicBtn.innerText = "⏸ Music Playing";
      })
      .catch(err => {
        console.log("Music blocked:", err);
      });
  } else {
    music.pause();
    isPlaying = false;
    musicBtn.innerText = "▶ Play Music";
  }
});


// ================= PAGE NAVIGATION =================
function openMode(mode) {
  document.getElementById("home").style.display = "none";

  document.querySelectorAll(".mode").forEach(section => {
    section.style.display = "none";
  });

  document.getElementById(mode).style.display = "flex";
}

function goBack() {
  document.querySelectorAll(".mode").forEach(section => {
    section.style.display = "none";
  });

  document.getElementById("home").style.display = "flex";
}