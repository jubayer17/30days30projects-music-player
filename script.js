const song = document.getElementById("song");
const progress = document.getElementById("progress");
const ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

song.ontimeupdate = function () {
  progress.value = song.currentTime;
};

progress.oninput = function () {
  song.currentTime = progress.value;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
}
