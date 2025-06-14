const { blogs } = require("../database/connection")

exports.fetchBlog=async(req,res)=>{
const datas=await blogs.findAll()

  res.json({ 
    message:"Succesfully blog fetched",
    datas
  })
}

exports.createBlog=async(req,res)=>{
const {blogTitle,blogAuther,blogDescription,blogExcerpt}=req.body;

await blogs.create({
  blogTitle,
  blogAuther,
  blogDescription,
  blogExcerpt
})


  res.json({
    message:"Succesfully blog added"
  })
}

exports.updateBlog=async(req, res)=>{
  const id = req.params.id;
  const {blogTitle ,blogAuther, blogDescription,blogExcerpt}= req.body;

await blogs.update({
  blogTitle,
  blogAuther,
  blogDescription
  ,blogExcerpt
},{
  where:{
    id:id
  }
})
  res.json({
    message:"Succesfully blog updated"
  })
}

exports.singleBlog=async (req,res)=>{
const id =await req.params.id;
const dataa=await blogs.findByPk(id);
res.json({
  message:"Single Book fetch successfully ",
  dataa
})

}
exports.deleteBlog=async (req,res)=>{
  const id =req.params.id;
await blogs.destroy({
  where:{
    id
  }
})
}