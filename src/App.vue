<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
    <div class="content">
      <Countdownify
        msg="イベント"
        :goalTime="Date.now() + 5000"
        backgroundColor="rgba(255,0,0, 0.4)"
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
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
