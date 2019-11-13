const Joi = require('joi');
const Cfg = require('../models/cfg.model');
const config = require('../config/config')

const cfgSchema = Joi.object({
  key: Joi.string().required(),
  title: Joi.string().required(),
  valu: Joi.string().required(),
  note: Joi.string()
})


module.exports = {
  insert, index, update, destroy, detail, count, getCfgByKey
}

async function insert (cfg) {
  cfg = await Joi.validate(cfg, cfgSchema, { abortEarly: false });
  return await new Cfg(cfg).save();
}

async function index (obj) {
  let page = 1;
  if (obj.page) {
    page = obj.page;
    delete obj.page
  }
  let pageNum = config.paginationNum;
  if (obj.count) {
    delete obj.count
    return await Cfg.find(obj).count();
  } else {
    return await Cfg.find(obj).sort({ '_id': -1 }).skip((page - 1) * pageNum).limit(pageNum);
  }
}

async function count (obj) {
  return await Cfg.find().sort({ '_id': -1 }).count();
}

async function detail (id) {
  return await Cfg.findById(id)
}

async function update (cfg, id) {
  return await Cfg.findByIdAndUpdate(id, cfg)
}

async function destroy (id) {
  return await Cfg.findByIdAndRemove(id)
}

async function getCfgByKey (key) {
  return await Cfg.find({ key: key }).limit(1)
}