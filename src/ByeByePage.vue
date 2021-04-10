<template>
  <div id="app">
    <transition name="fade">
      <div class="video-wrapper" v-show="showVideo">
        <video
          class="loading"
          src="./assets/loading.mp4"
          autoplay
          loop
          muted
          playsinline
          @play="startvideo"
        >
          loading...
        </video>
      </div>
    </transition>

    <transition name="fade">
      <div class="blur-loading" v-show="blurLoading">
        <transition name="roll-up">
          <div class="endroll" v-show="rollStandby">
            <h2>Thank you JOJO SS!</h2>
            <h3>for...</h3>
            <p class="bold">BANDAI NAMCO Entertainment Inc.</p>
            <p class="bold">Drecom Co., Ltd.</p>
            <p class="bold">集英社</p>
            <p class="bold">LUCKY LAND COMMUNICATIONS</p>
            <p class="bold">荒木飛呂彦大先生</p>
            <p class="bold">and.... YOU!</p>
            <p>・</p>
            <p>・</p>
            <p>・</p>
            <p class="italy">つらいことがたくさんあったが・・・</p>
            <p class="italy">でも楽しかったよ</p>
            <p class="italy">みんながいたから この旅は楽しかった</p>
          </div>
        </transition>
      </div>
    </transition>
    <transition name="fade">
      <div class="cover-roll" v-show="coverRoll"></div>
    </transition>
    <transition name="fade">
      <SNSShareButtons v-show="finished" class="sns-share-buttons" />
    </transition>
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
      showVideo: false,
      rollStandby: true, // falseにすると始まる
      blurLoading: false, // loadingをぼかす
      coverRoll: false, // エンドロールを覆う
      finished: false, // アニメーション完了
    };
  },
  mounted: function() {
    this.showVideo = true;
  },
  methods: {
    async startvideo() {
      console.log("startvideo");
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 4000);
      });
      this.blurLoading = true;
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
      this.rollStandby = false;
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 55000);
      });
      this.coverRoll = true;
    },
  },
};
</script>

<style>
/** 変数 */
:root {
  --roll-up-time: 60s;
  --jojo-black: #20262e;
}
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--jojo-black);
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  color: white;
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
.blur-loading {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(32, 38, 46, 0.8);
}
.endroll {
  position: fixed;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 300%;
  transform: translateY(100%);
}
.bold {
  font-weight: bold;
}
.italy {
  font-style: italic;
  font-family: "Times New Roman", "ヒラギノ明朝 Pro W6", "Hiragino Mincho Pro",
    "ＭＳ Ｐゴシック", serif;
}
.cover-roll {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--jojo-black);
}
.sns-share-buttons {
  position: fixed;
  right: 3px;
  bottom: 3px;
  z-index: 2;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.roll-up-leave-active {
  transition: all var(--roll-up-time) linear;
}
.roll-up-enter,
.roll-up-leave-to {
  transform: translateY(-100%);
}
</style>
