<template>
  <div id="app">
    <div class="video-wrapper">
      <video
        class="loading"
        src="./assets/loading.mp4"
        autoplay
        loop
        muted
        playsinline
      ></video>
      <div v-show="finished">
        <SNSShareButtons class="sns-share-buttons" />
      </div>
    </div>
    <div class="endrole">

    </div>
  </div>
</template>

<script>
import "vue-countdownify/dist/vue-countdownify.css";
import SNSShareButtons from "./components/SNSShareButtons.vue";

export default {
  name: "ByeByePage",
  components: {
    SNSShareButtons,
  },
  data() {
    return {
      finished: false,
    };
  },
  methods: {},
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
  perspective: 1000px;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
}
.video-wrapper {
  text-align: center;
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
}
.loading {
  width: 100%;
  height: 100%;
}
.endrole {
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>
