<template>
  <transition name="fade" v-on:after-leave="afterLeave">
    <div id="app" v-if="show">
      <div class="video-container">
        <div class="video-wrap">
          <video
            src="../public/jojossmovie1_supershrink.mp4"
            autoplay
            loop
            muted
            playsinline
          ></video>
        </div>
      </div>
      <div class="content">
        <Countdownify
          msg="ジョジョSS サ終"
          :goalTime="goalTime"
          backgroundColor="rgba(0,0,0,0)"
          @its-time="timeup"
        />
      </div>
      <SNSShareButtons
        class="sns-share-buttons"
        msg="ジョジョSSのサ終をカウントダウン😢"
      />
    </div>
  </transition>
</template>

<script>
import Countdownify from "vue-countdownify";
import "vue-countdownify/dist/vue-countdownify.css";
import SNSShareButtons from "./components/SNSShareButtons.vue";

export default {
  name: "CouontdownPage",
  components: {
    Countdownify,
    SNSShareButtons,
  },
  data() {
    return {
      show: true,
      goalTime: new URLSearchParams(document.location.search.substring(1)).has(
        "bitethedust"
      )
        ? Date.now() + 10000
        : 1618304400000
    };
  },
  methods: {
    timeup: async function () {
      this.show = false;
    },
    afterLeave: async function () {
      const resp = await fetch("/.netlify/functions/checktime");
      const json = await resp.json();
      window.location.href = json["url"];
    },
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
  background-color: rgba(32, 38, 46, 0.9);
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

.fade-enter-active,
.fade-leave-active {
  transition: 2s opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.sns-share-buttons {
  position: fixed;
  right: 3px;
  bottom: 3px;
  z-index: 2;
}
</style>
