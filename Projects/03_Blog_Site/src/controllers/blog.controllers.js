import { Blog } from "../models/blog.models.js"
import { Comment } from "../models/comment.models.js"

// render page for writing blog
function handleAddBlogPageDisplay(req,res){
    return res.render("addBlog",{
        user: req.user,
});
};

// send blog data to db and render on webpage
async function handleAddBlog(req,res){
    const { title, content } = req.body;

    if(!title && !content){
        return res.json("Entre tilte and content for blog")
    }

    try{
        const blog = await Blog.create({
            title,
            content,
            createdBy: req.user._id,
            coverImg: `/uploads/${req.file.filename}`,
        });
    
        res.redirect(`/blogs/${blog._id}`);
    } catch(error){
        return res.json("Unable to add blog")
    }
}

// display blog and comment on it by id
async function handleBlogById(req,res){
    const id = req.params.id;
    
    try {
        const blog = await Blog.findById(id).populate("createdBy");
        const comments = await Comment.find({ blogId: id}).populate("createdBy");

        return res.render("blog",{
            user: req.user,
            blog,
            comments,
        })

    } catch (error) {
        return res.json("Unable to display blog")
    }
}

export {
    handleAddBlogPageDisplay,
    handleAddBlog,
    handleBlogById
}