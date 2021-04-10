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
    <div class="filter">
      <div class="endrole">
        <h2>Thank you JOJO ss!</h2>
        <h3>Thank you for...</h3>
        <p class="bold">BANDAI NAMCO Entertainment Inc.</p>
        <p class="bold">Drecom Co., Ltd.</p>
        <p class="bold">集英社</p>
        <p class="bold">LUCKY LAND COMMUNICATIONS</p>
        <p class="bold">荒木飛呂彦大先生</p>
        <p class="bold">and.... YOU!</p>
        <br />
        <br />
        <br />
        <p class="italy">つらいことがたくさんあったが・・・</p>
        <p class="italy">でも楽しかったよ</p>
        <p class="italy">みんながいたから この旅は楽しかった</p>
      </div>
    </div>
  </div>
</template>

<script>
// ロード→エンドロール→歴代トップ絵→
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
.filter {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
.endrole {
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 300%;
  color: white;
}
.bold {
  font-weight: bold;
}
.italy {
  font-style: italic;
  font-family: 'Times New Roman','ヒラギノ明朝 Pro W6', 'Hiragino Mincho Pro', 'ＭＳ Ｐゴシック', serif;
}
</style>
