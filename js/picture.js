const videoPlayer = document.querySelector("#video");
const button = document.querySelector("#btn");

// prompt thr user to select a media stream, pass to video element, play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoPlayer.srcObject = mediaStream;
    videoPlayer.onloadeddmetadata = () => {
      videoPlayer.play();
    };
  } catch (error) {
    console.log("error here!", error);
    //   catch errors
  }
}

button.addEventListener("click", async () => {
  // disable button when we click on it
  button.disabled = true;
  // start picture in picture
  await videoPlayer.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

// on load
selectMediaStream();
