const videoPlayerClose = document.getElementById("video-player-close");
const videoPlayerOpen = document.getElementById("video-player-open");
const videoPlayerContainer = document.getElementById("video-player-container");
videoPlayerClose.addEventListener("click", () => {
  console.log("Clciked");
  videoPlayerContainer.style.display = "none";
});
videoPlayerOpen.addEventListener("click", () => {
  console.log("Clciked");
  videoPlayerContainer.style.display = "flex";
});
