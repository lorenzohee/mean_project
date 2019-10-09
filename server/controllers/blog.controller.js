const Joi = require('joi');
const Blog = require('../models/blog.model');

const blogSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  blogType: Joi.string().required(),
  bannerUrl: Joi.string().required()
})


module.exports = {
  insert, index, update, destroy, detail
}

async function insert (blog) {
  blog = await Joi.validate(blog, blogSchema, { abortEarly: false });
  return await new Blog(blog).save();
}

async function index () {
  return await Blog.find();
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