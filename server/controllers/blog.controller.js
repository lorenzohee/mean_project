const Joi = require('joi');
const Blog = require('../models/blog.model');
const config = require('../config/config')

const blogSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  blogType: Joi.string().required(),
  bannerUrl: Joi.string().required(),
  blogAccess: Joi.string().required()
})


module.exports = {
  insert, index, update, destroy, detail, count
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
  let pageNum = config.paginationNum;
  if (obj.count) {
    delete obj.count
    return await Blog.find(obj).count();
  } else {
    return await Blog.find(obj).sort({ '_id': -1 }).skip((page - 1) * pageNum).limit(pageNum);
  }
}

async function count (obj) {
  return await Blog.find().sort({ '_id': -1 }).count();
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