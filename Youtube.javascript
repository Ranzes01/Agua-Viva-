function playVideo() {
  const url = document.getElementById("youtubeUrl").value;
  const videoId = url.split("v=")[1]?.split("&")[0];
  if (videoId) {
    document.getElementById("player").innerHTML =
      `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
  }
}

function download(format) {
  const url = document.getElementById("youtubeUrl").value;
  window.open(`https://yt-download.org/api/button/${format}?url=${url}`, "_blank");
}