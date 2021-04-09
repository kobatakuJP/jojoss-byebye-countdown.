const TIME = 1618239600000; // Tue Apr 13 2021 00:00:00 GMT+0900
const MARGIN_TIME = TIME - 60000; // 1分のマージンを取っておく
const TRUE_URL = "/byebye-and-thanks-jojoss-20210413";
const FALSE_URL = "/ikasama_dameyo.jpeg";

/** 時刻が予定を過ぎていればtrue, 過ぎていなければfalse */
export function handler(event, context, callback) {
  const isTimedUp = Date.now() > MARGIN_TIME ? true : false;
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      isTimedUp: isTimedUp,
      url: isTimedUp ? TRUE_URL : FALSE_URL
    })
  })
}
