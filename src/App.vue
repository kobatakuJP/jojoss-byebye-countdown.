<template>
  <div id="app">
    <div class="video-container">
      <div class="video-wrap">
        <video
          src="../public/jojossmovie1_supershrink.mp4"
          autoplay
          loop
          muted
        >
        </video>
      </div>
    </div>
    <div class="content">
      <Countdownify
        msg="ジョジョSS サ終"
        :goalTime="[2021, 4, 13]"
        backgroundColor="rgba(0,0,0,0)"
        @its-time="timeup"
      />
    </div>
  </div>
</template>

<script>
import Countdownify from "vue-countdownify";
import "vue-countdownify/dist/vue-countdownify.css";

export default {
  name: "App",
  components: {
    Countdownify,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #20262e;
}
.content {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(32, 38, 46, 0.8);
}
.video-container {
  position: fixed;
  z-index: 0;
  margin: 0 auto;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.video-wrap {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}

video {
  min-width: 100%;
  min-height: 100vh;
  position: absolute;
}

@media (aspect-ratio: 16/9), (min-aspect-ratio: 16/9) {
  video {
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}

@media (max-aspect-ratio: 16/9) {
  video {
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
