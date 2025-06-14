const express=require('express');
const { blogs } = require('./database/connection');
const { where } = require('sequelize');
const blogRoutes=require('./Routes/blogsRoutes')
const cors = require("cors")
const { createBlog, fetchBlog, updateBlog, singleBlog, deleteBlog } = require('./controller/blogs-controller');

 require('./database/connection');


const App=express();
// Api creation 
App.use(express.json());
App.use(cors({
  origin:"*",
}))

App.use("/",blogRoutes)
// listen port number

App.listen(3500,()=>{
  console.log("Well your backend project is running in port number 3500")
})
