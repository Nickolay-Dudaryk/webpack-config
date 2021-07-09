import LottiePlayer from "./shared/lottie-player.js";

document.addEventListener("DOMContentLoaded", async () => {
  window.refs = {
    lottiePlayer: {
      init: () => new LottiePlayer(),
      selectors: [".lottie"],
    },
  };

  Object.keys(window.refs).forEach((ref) => {
    if (
      window.refs[ref].hasOwnProperty("init") &&
      window.refs[ref].selectors.join(",").length > 0
    ) {
      window.refs[ref].class = window.refs[ref].init();
    }
  });
});
