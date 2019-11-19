var config = require('../config/config')
let AipSpeech = require("baidu-aip-sdk").speech;
let fs = require('fs');
const path = require('path');

module.exports = {
  getBaiduAudioFileByText
}

async function getBaiduAudioFileByText (obj) {
  var APP_ID = 11809753;
  var API_KEY = config.baidu_apikey;
  var SECRET_KEY = config.baidu_secretkey;
  let client = new AipSpeech(APP_ID, API_KEY, SECRET_KEY);

  let audioFile = '';

  let defaultOption = {
    spd: 5,
    per: 0,
    pid: 5,
    vol: 5,
  }
  let text = obj.body;
  delete obj.body;
  let option = Object.assign(defaultOption, obj);
  await client.text2audio(text, option).then(function (result) {
    if (result.data) {
      //设置日志文件目录
      var logDirectory = path.join(__dirname, '../../audio');
      //确保日志文件目录存在 没有则创建
      fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
      let timeStamp = new Date()
      audioFile = `audio-${timeStamp.getTime()}.mp3`
      console.log(`语音合成成功，文件保存到${audioFile}，打开听听吧`);
      fs.writeFileSync(`${logDirectory}\\${audioFile}`, result.data);
    } else {
      // 合成服务发生错误
      console.log('语音合成失败: ' + JSON.stringify(result));
    }
  }, function (err) {
    console.log(err);
  });

  return audioFile;
}