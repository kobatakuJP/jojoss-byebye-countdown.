<template>
  <div>
    <div class="animation-area">
      <div class="pic pic-a">
        <img src="./assets/title3_1.jpg" />
      </div>
      <div class="pic pic-b">
        <img src="./assets/title3_2.jpg" />
      </div>
      <div class="pic pic-c">
        <img src="./assets/title4_1.jpg" />
      </div>
      <div class="pic pic-d">
        <img src="./assets/title4_2.jpg" />
      </div>
      <div class="pic pic-e">
        <img src="./assets/title5_1.jpg" />
      </div>
      <div class="pic pic-f">
        <img src="./assets/title5_2.jpg" />
      </div>
    </div>
    <div v-show="finished">
      <SNSShareButtons class="sns-share-buttons" />
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
img {
  width: 200px;
}

.animation-area {
  position: relative;
  transform-style: preserve-3d;
  width: 500px;
  height: 500px;
  margin: auto;
  animation: rotate 5s infinite linear;
}
.pic {
  position: absolute;
}
.pic-a {
  transform: translate3d(calc(150px - 100%), 50%, 200px) rotateY(45deg);
}
.pic-b {
  transform: translate3d(calc(150px + 100%), 50%, 200px) rotateY(-45deg);
}
.pic-c {
  transform: translate3d(calc(150px - 80%), 50%, 100px) rotateY(45deg);
}
.pic-d {
  transform: translate3d(calc(150px + 80%), 50%, 100px) rotateY(-45deg);
}
.pic-e {
  transform: translate3d(calc(150px - 60%), 50%, 0px) rotateY(45deg);
}
.pic-f {
  transform: translate3d(calc(150px + 60%), 50%, 0px) rotateY(-45deg);
}

@keyframes rotate {
  0% {
    transform: translateZ(-100px);
  }
  100% {
    transform: translateZ(1000px);
  }
}

.sns-share-buttons {
  position: fixed;
  right: 3px;
  bottom: 3px;
  z-index: 2;
}
</style>
