// const router = require('express').Router();

const { createBlog, fetchBlog, singleBlog, updateBlog, deleteBlog } = require('../controller/blogs-controller');


// const { fetchBlog, createBlog, updateBlog, deleteBlog, singleBlog } = require('../controller/blogs-controller');

// router.route("/blogs").get(fetchBlog).post(createBlog);
// router.route("/blogs/:id").get(singleBlog).patch(updateBlog).delete(deleteBlog);

// module.exports = router;

const router=require('express').Router();

router.route("/blogs").post(createBlog).get(fetchBlog)
router.route("/blogs/:id").get(singleBlog).patch(updateBlog).delete(deleteBlog);

module.exports=router;