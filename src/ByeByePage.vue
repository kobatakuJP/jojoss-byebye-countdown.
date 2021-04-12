<template>
  <div id="app" @click="punch">
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
        ></video>
      </div>
    </transition>
    <transition name="fade">
      <div class="blur-loading" v-show="blurLoading">
        <transition name="roll-up">
          <div class="endroll" v-show="rollStandby">
            <h2>Thank you JOJO SS!</h2>
            <h3>Special thanks to...</h3>
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
    <transition name="fade" @after-enter="popShow">
      <div class="cover-roll" v-show="coverRoll"></div>
    </transition>
    <transition name="fade-slow" @after-enter="popShow">
      <div v-show="jojoSSLogo" class="jojoss-logo-wrapper">
        <div class="jojoss-logo-inner-wrapper">
          <img
            @click="currentClickLogo"
            class="jojoss-logo"
            src="./assets/jojoss-logo.png"
            ref="jojoSSLogo"
          />
        </div>
      </div>
      ></transition
    >
    <transition name="fade" @after-enter="popShow">
      <div ref="kan" v-show="kan" class="kan" @click="currentClickKan">完</div>
    </transition>
    <img
      v-show="kq"
      class="killer-queen"
      src="./assets/killerqueen.png"
      @click="bitethedust"
    />
    <transition name="fade" @after-enter="popShow">
      <SNSShareButtons
        v-show="finished"
        class="sns-share-buttons"
        msg="ジョジョSSエンディングページ(非公式)"
      />
    </transition>
    <transition name="fade">
      <div class="info" v-show="finished">
        animation by
        <a
          href="https://animate.style/"
          target="_blank"
          style="color: white"
          rel="noopener"
          >Animate.css</a
        >
      </div>
    </transition>
    <div
      ref="puncher"
      :style="puncherStyle"
      v-show="isPunch"
      class="animate__animated animate__rubberBand"
    ></div>
    <div v-show="moveBitethedust" class="bitethedust-str">バイツァ・ダスト</div>
  </div>
</template>

<script>
// ロード→エンドロール→歴代トップ絵→
import "vue-countdownify/dist/vue-countdownify.css";
import SNSShareButtons from "./components/SNSShareButtons.vue";

const ANIMATE_CSS_LIST = [
  "animate__bounce",
  "animate__flash",
  "animate__pulse",
  "animate__rubberBand",
  "animate__shakeX",
  "animate__shakeY",
  "animate__headShake",
  "animate__swing",
  "animate__tada",
  "animate__wobble",
  "animate__jello",
  "animate__heartBeat",
  "animate__backInDown",
  "animate__backInLeft",
  "animate__backInRight",
  "animate__backInUp",
  "animate__bounceIn",
  "animate__bounceInDown",
  "animate__bounceInLeft",
  "animate__bounceInRight",
  "animate__bounceInUp",
  "animate__bounceOut",
  "animate__bounceOutDown",
  "animate__bounceOutLeft",
  "animate__bounceOutRight",
  "animate__bounceOutUp",
  "animate__fadeIn",
  "animate__fadeInDown",
  "animate__fadeInDownBig",
  "animate__fadeInLeft",
  "animate__fadeInLeftBig",
  "animate__fadeInRight",
  "animate__fadeInRightBig",
  "animate__fadeInUp",
  "animate__fadeInUpBig",
  "animate__fadeInTopLeft",
  "animate__fadeInTopRight",
  "animate__fadeInBottomLeft",
  "animate__fadeInBottomRight",
  "animate__fadeOutDown",
  "animate__fadeOutDownBig",
  "animate__fadeOutLeft",
  "animate__fadeOutLeftBig",
  "animate__fadeOutRight",
  "animate__fadeOutRightBig",
  "animate__fadeOutUp",
  "animate__fadeOutUpBig",
  "animate__fadeOutTopLeft",
  "animate__fadeOutTopRight",
  "animate__fadeOutBottomLeft",
  "animate__fadeOutBottomRight",
  "animate__flip",
  "animate__flipInX",
  "animate__flipInY",
  "animate__flipOutX",
  "animate__flipOutY",
  "animate__lightSpeedInRight",
  "animate__lightSpeedInLeft",
  "animate__lightSpeedOutRight",
  "animate__lightSpeedOutLeft",
  "animate__rotateIn",
  "animate__rotateInDownLeft",
  "animate__rotateInDownRight",
  "animate__rotateInUpLeft",
  "animate__rotateInUpRight",
  "animate__rotateOut",
  "animate__rotateOutDownLeft",
  "animate__rotateOutDownRight",
  "animate__rotateOutUpLeft",
  "animate__rotateOutUpRight",
  "animate__hinge",
  "animate__jackInTheBox",
  "animate__rollIn",
  "animate__rollOut",
  "animate__zoomIn",
  "animate__zoomInDown",
  "animate__zoomInLeft",
  "animate__zoomInLeft",
  "animate__zoomInUp",
  "animate__zoomOut",
  "animate__zoomOutDown",
  "animate__zoomOutLeft",
  "animate__zoomOutRight",
  "animate__zoomOutUp",
  "animate__slideInDown",
  "animate__slideInLeft",
  "animate__slideInRight",
  "animate__slideInUp",
  "animate__slideOutDown",
  "animate__slideOutLeft",
  "animate__slideOutRight",
  "animate__slideOutUp",
];

const PUNCH_WORD = [
  "オラ",
  "無駄",
  "ドラァ",
  "メメタァ",
  "ズキュン",
  "グッパオン",
  "ピシガシグッグッ",
  "ドモン",
  "ガオン",
  "ズアッ",
  "シィィザーァァァッ",
  "だが断る",
  "ボラーレ・ヴィーア（飛んで行きな）",
  "アリーヴェデルチ!(さよならだ)",
];

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
      jojoSSLogo: false,
      kan: false,
      kq: false,
      moveBitethedust: false,
      finished: false, // アニメーション完了
      shows: [
        // アニメーションを逆順に入れる
        () => {
          this.$refs.jojoSSLogo.classList.add(
            "animate__animated",
            "animate__shakeX"
          );
          this.currentClickKan = this.clickKan;
          this.$refs.kan.classList.add("jojoblack");
          this.kq = true;
        },
        () => {
          this.currentClickLogo = this.clickLogo;
          this.finished = true;
        },
        () => (this.kan = true),
        () => (this.jojoSSLogo = true),
        () => (this.coverRoll = true),
      ],
      currentClickLogo: () => {}, // 最初はなにもしない。後で置き換える
      currentClickKan: () => {}, // 最初はなにもしない。後で置き換える
      puncherStyle: {
        position: "fixed",
        left: "100px",
        top: "100px",
        "user-select": "none",
        "font-weight": "bold",
        "animation-duration": ".1s",
      },
      isPunch: false,
      punchID: -1,
    };
  },
  mounted: function () {
    this.showVideo = true;
  },
  methods: {
    async startvideo() {
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
      // ここからは流れの通りに
      this.popShow();
    },
    /** 次に表示するものをpopする */
    popShow() {
      const next = this.shows.pop();
      next ? next() : null;
    },
    /** ロゴがクリックされた時の動作 */
    clickLogo(e) {
      if (e && e.target && e.target.classList) {
        e.target.addEventListener("animationend", () => {
          e.target.setAttribute("class", "jojoss-logo");
        });
        e.target.classList.add("animate__animated", this.getRandAnimeCss());
      }
    },
    clickKan(e) {
      if (e && e.target && e.target.classList) {
        e.target.classList.add("slide");
      }
    },
    getRandAnimeCss() {
      return ANIMATE_CSS_LIST[
        Math.floor(Math.random() * ANIMATE_CSS_LIST.length)
      ];
    },
    punch(e) {
      this.isPunch = false;
      this.$refs.puncher.innerText =
        PUNCH_WORD[Math.floor(Math.random() * PUNCH_WORD.length)];
      this.puncherStyle.left = Math.floor(this.randPosition(e.x)) + "px";
      this.puncherStyle.top = Math.floor(this.randPosition(e.y)) + "px";
      if (this.punchID > -1) {
        // パンチ済みならclearをキャンセル
        clearTimeout(this.punchID);
      }
      this.punchID = setTimeout(() => {
        this.isPunch = false;
      }, 1000);
      setTimeout(() => (this.isPunch = true), 0);
    },
    randPosition(v) {
      const fix = 10;
      return v + Math.floor(Math.random() * fix) - fix / 2;
    },
    bitethedust() {
      this.moveBitethedust = true;
      window.location.href = "/?bitethedust";
    },
  },
};
</script>

<style>
@import "/animate.css/animate.compat.css";
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
  user-select: none;
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
.jojoss-logo-wrapper {
  display: table;
  position: fixed;
  top: 0;
  text-align: center;
  height: 100%;
  width: 100%;
}
.jojoss-logo-inner-wrapper {
  display: table-cell;
  height: 100%;
  vertical-align: middle;
}
.kan {
  position: fixed;
  user-select: none;
  right: 1rem;
  bottom: 5px;
  text-shadow: 0px 0px 2px #000, 2px 2px 3px #000;
  font-weight: bold;
  font-size: 5rem;
  z-index: 1;
}
.jojoblack {
  background-color: var(--jojo-black);
}
.kan.slide {
  animation: slide 2s ease forwards;
}
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(3rem);
  }
}
.killer-queen {
  position: fixed;
  right: 1rem;
  bottom: 5px;
  height: 4rem;
}
.sns-share-buttons {
  position: fixed;
  right: 3px;
  top: 3px;
  z-index: 2;
}
.info {
  position: fixed;
  top: 0;
  font-size: 0.5rem;
}
.bitethedust-str {
  position: fixed;
  height: 100%;
  text-align: center;
  color: red;
  background-color: rgba(32, 38, 46, 0.8);
  bottom: 0;
  font-weight: bold;
  font-size: 6rem;
  z-index: 10;
}

/** 以降transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-slow-enter-active,
.fade-slow-leave-active {
  transition: opacity 7s;
}
.fade-slow-enter,
.fade-slow-leave-to {
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
