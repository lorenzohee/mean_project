const Joi = require('joi');
const Blog = require('../models/blog.model');
const Cfg = require('../models/cfg.model')
const config = require('../config/config')

const blogSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  blogType: Joi.string().required(),
  bannerUrl: Joi.any(),
  blogAccess: Joi.string().required(),
  tags: Joi.array(),
  createdAt: Joi.any()
})


module.exports = {
  insert, index, update, destroy, detail, count, getRelativeBlogs, tagCloud
}

async function insert (blog) {
  blog = await Joi.validate(blog, blogSchema, { abortEarly: false });
  return await new Blog(blog).save();
}

async function index (obj) {
  let page = 1;
  if (obj.page) {
    page = obj.page;
    delete obj.page
  }
  let pageNum = obj.pageNum || config.paginationNum;
  if (obj.blogType === 'undefined') {
    delete obj.blogType;
  }
  if (obj.blogNum) {
    delete obj.blogNum;
  } else {
    obj.createdAt = { $lte: new Date() }
  }
  if (obj.tags) {
    obj.tags = { $all: obj.tags.split(',') }
  }
  if (obj.count) {
    delete obj.count
    return await Blog.find(obj).countDocuments();
  } else {
    return await Blog.find(obj).sort({ 'createdAt': -1 }).skip((page - 1) * pageNum).limit(pageNum);
  }
}

async function count (obj) {
  return await Blog.find().sort({ 'createdAt': -1 }).countDocuments();
}

async function detail (id) {
  return await Blog.findById(id)
}

async function update (blog, id) {
  return await Blog.findByIdAndUpdate(id, blog)
}

async function destroy (id) {
  return await Blog.findByIdAndRemove(id)
}

async function getRelativeBlogs (id, tag) {
  let queryParam = { "tags": { $all: [tag] }, "_id": { $ne: id } }
  return await Blog.find(queryParam).sort({ 'createdAt': -1 }).limit(3);
}

async function tagCloud () {
  let cfgs = await Cfg.find({ key: 'ARTICLE_TAG' }).limit(1)
  let tag_array = JSON.parse(cfgs[0].valu)
  let tag_tmp = []
  await Promise.all(
    tag_array.map(async (tag_val) => {
      if (tag_val.key == 'recommand') {
        return;
      }
      let tmp = {}
      let blogCount = await Blog.find({ "tags": { $all: [tag_val.key] } }).countDocuments()
      tmp.key = tag_val.key
      tmp.num = blogCount
      tag_tmp.push(tmp)
    })
  )
  return tag_tmp
}