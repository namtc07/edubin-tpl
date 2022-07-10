const closeFrame = document.querySelector(".YouTubePopUp-Wrap");
const openVideo = document.getElementById("play-video");

const toggleVideo = () => {
  closeFrame.classList.toggle("hide");
};

openVideo.addEventListener("click", toggleVideo);
closeFrame.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleVideo();
});
