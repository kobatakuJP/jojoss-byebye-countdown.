<template>
  <div class="sns_box">
    <div class="sns_button twitter">
      <a href="https://twitter.com/intent/tweet?url=https://jojoss-sasyu-countdown.netlify.app/&text=ジョジョSSのサ終をカウントダウン😢" title="Tweet"><i class="fa fa-twitter"></i></a>
    </div>
    <div class="sns_button facebook">
      <a href="https://www.facebook.com/sharer/sharer.php?u=https://jojoss-sasyu-countdown.netlify.app/" title="Facebook"><i class="fa fa-facebook"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SNSShareButtons",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.sns_button {
  float: left;
  box-shadow: inset 0 0 0 2px #fff;
  border-radius: 100%;
  -moz-transition: all 280ms ease;
  -o-transition: all 280ms ease;
  -webkit-transition: all 280ms ease;
  transition: all 280ms ease;
}
.sns_button a {
  display: table-cell;
  width: 44px;
  height: 44px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  -moz-transition: all 280ms ease;
  -o-transition: all 280ms ease;
  -webkit-transition: all 280ms ease;
  transition: all 280ms ease;
}
.sns_button i {
  font-size: 20px;
  vertical-align: middle;
}
.sns_button:hover {
  box-shadow: inset 0 0 0 22px #fff;
}

.sns_button + .sns_button {
  margin: 0 0 0 12px;
}

.twitter:hover a {
  color: #1b95e0;
}

.facebook:hover a {
  color: #3b5999;
}
</style>
