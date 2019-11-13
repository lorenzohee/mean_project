var request = require('request');
const util = require('util');
const getPromise = util.promisify(request.get);
const postPromise = util.promisify(request.post);
var CfgContrl = require('./cfg.controller')
var config = require('../config/config')

module.exports = {
  getBaiduAudioFileByText
}

async function getBaiduAudioFileByText (text) {
  let accessToken = await CfgContrl.getCfgByKey('baidu_access_token');
  if (accessToken == null) {
    let baidu_return = await this.getBaiduAccessToken();
    let form = {
      key: 'baidu_access_token',
      title: '百度语音ACCESS_TOKEN',
      valu: baidu_return.access_token,
      note: baidu_return
    }
    accessToken = await CfgContrl.insert(form)
  }
  let postVal = {
    tex: text,
    tok: accessToken,
    cuid: 'lorenzo_val',
    ctp: 1,
    lan: 'zh',//必填	固定值zh。语言选择,目前只有中英文混合模式，填写固定值zh
    spd: 5, //选填	语速，取值0-15，默认为5中语速
    pit: 5, //选填	音调，取值0-15，默认为5中语调
    vol: 5, //选填	音量，取值0-15，默认为5中音量
    per: 4, //（基础音库）	选填	度小宇=1，度小美=0，度逍遥=3，度丫丫=4
  }
  return await this.postBaiduText(postVal)
}

async function getBaiduAccessToken () {
  let url = `https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=${config.baidu_apikey}&client_secret=${config.baidu_secretkey}`;
  return await getPromise(url);
}

async function postBaiduText (form) {
  let url = `http://tsn.baidu.com/text2audio`;
  return await postPromise(url, form)
}